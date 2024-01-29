import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Admin.login';
import SignUp from './components/Signup/Admin.signup';
import Home from './components/Home';

function App() {
  return (
     <div className="App">
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/home' Component={Home} />
      </Routes>
     </div>
  );
}

export default App;
