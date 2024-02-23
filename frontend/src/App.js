import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Login = React.lazy(() => import('./components/login/Admin.login'));
const SignUp = React.lazy(() => import('./components/Signup/Admin.signup'));
const Home = React.lazy(() => import('./components/Home'));
const Add = React.lazy(() => import('./components/Add.todo.screen/Add'));
const Update = React.lazy(() => import('./components/Update.todo.screen/Update'));
const Delete = React.lazy(() => import('./components/Delete.todo.screen'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Show = React.lazy(() => import('./components/Show.todo.screen'));
const Find = React.lazy(() => import('./components/find.todo.screen'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='/show' element={<Show />} />
          <Route path='/find' element={<Find />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;