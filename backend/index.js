const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json());

const secret = '403270432j4h23jk4hk234';

const attachjwt = (user) => {
  const token =  jwt.sign({user, role : 'admin'} , secret , {expiresIn : '1h'});
  return token;
}

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
},{
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const todoSchema = new mongoose.Schema({
  title : String,
  description : String
},{
  timestamps: true // Automatically add createdAt and updatedAt fields
})

const Admin = mongoose.model('Admin' , adminSchema);
const Todo = mongoose.model('Todo', todoSchema);


mongoose.connect('mongodb+srv://krrishnendusukumar:INDUK1965@cluster2.oe2wq9r.mongodb.net/',{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  dbName: "todo" 
});

async function authenticate(req, res, next) {
  const auth = req.headers.auth;
  const token = auth.split(' ')[1];
  jwt.verify(token, secret, (err, res) => {
    if(err) return res.sendStatus(403)
    next();
  })
}

async function handlelogin(req, res) {
  const {username, password} = req.body;
  const user = await Admin.findOne({username});
  if(user) {
    if(user.password === password) return res.send({
      message : "login successfully"
    })
    else return res.send({
      message : "please enter correct password"
    })
  }
  else return res.send({
    message : "please enter correct username"
  })

}

async function handlesignup(req, res) {
  const {username, password} = req.body;
  const user = await Admin.find({username});
  console.log(user.length)
  if(user.length) {
    return res.send({
      message : 'admin already exist'
    })
  }
  else {
    const token = attachjwt(username);
    const newAdmin = new Admin({username : username , password: password});
    await newAdmin.save();
    return res.send({
      message : "sign up successful",
      token
    })
  }

}
 
async function getAll(req, res) {
  console.log("Fetching all todos");
  const todos = await Todo.find({});
  return res.send({ todos: todos });
}


async function postTodo(req, res) {
  const { title, description } = req.body;
  const user = req.headers;

  

  const token = attachjwt(user);

    const newTodo = new Todo({
      title: title,
      description: description,
    });  

    await newTodo.save();

    const creationTime = newTodo._id.getTimestamp().toLocaleString();

    return res.send({
      message: "Todo created successfully",
      id: newTodo._id,
      createdAt: creationTime
    });  
}

async function deleteTodo(req, res) {
          const id = req.params.id;
          const result = await Todo.deleteOne({_id : id});
          if(result.deletedCount > 0) {
    return res.send({
        message : "element deleted succesfully",
      })
    }
    else {
        return res.send({
            message: "please enter the correct id"
          })
    }
}
      
  async function modifyTodo(req, res) {
    const id = req.params.id;
    const newTodo = req.body;
    const result = await Todo.findByIdAndUpdate(id, newTodo, {new : true});
    if(result) {
      return res.send({
             message : 'todo array modified successfully',
      })
    }
    else {
      return res.send({
      message : "please select the correct id"
      })
    }
}


app.post('/login', authenticate, handlelogin);
app.post('/signup', handlesignup);
app.get('/get', getAll);
app.post('/post', postTodo);
app.delete('/delete/:id', deleteTodo);
app.put('/put/:id', modifyTodo);

app.listen(port, () => console.log("Server started, please check on your port"));