import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Admin.login';
import SignUp from './components/Signup/Admin.signup';
import Home from './components/Home';
import Add from './components/Add.todo.screen/Add';
import Update from './components/Update.todo.screen/Update';
import Delete from './components/Delete.todo.screen';
import Navbar from './components/Navbar';

function App() {
  return (
     <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/home' Component={Home} />
        <Route path='/add' Component={Add} />
        <Route path='/update' Component={Update} />
        <Route path='/delete' Component={Delete} />
      </Routes>
     </div>
  );
}

export default App;
