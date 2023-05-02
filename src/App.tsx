import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUpComponent';
import SignIn from './Components/SignInComponent';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SignIn />} />
   <Route path='/SignUp' element={<SignUp />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
