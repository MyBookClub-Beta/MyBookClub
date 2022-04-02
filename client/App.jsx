import React, { useState } from 'react';
import { useAuth } from './auth/authContext';
import Signup from './components/signup';
import Login from './components/login';
import './stylesheets/styles.css';

function App() {
  const auth = useAuth();

  return (
    <>
      <div  className=" bg-gray-100" >Welcome to MyBookClub!</div>
      <Signup />
      <Login />
    </>
  );
}

export default App;
