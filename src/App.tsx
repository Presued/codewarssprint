import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUpComponent';
import SignIn from './Components/SignInComponent';
import CodewarsProfile from './Components/CodewarsProfileComponent/CodeWarsProfile';
import RandomComponent from './Components/RandomComponent/RandomComponent';
import SearchComponent from './Components/SearchComponent/SearchComponent';
import Header from './Components/HeaderComponent/HeaderComponent';
import Footer from './Components/FooterComponent/FooterComponent';


function App() {
  return (
   <BrowserRouter>
    
   <Routes>
    <Route path='/' element={<SignIn />} />
   <Route path='/SignUp' element={<SignUp />} />
   <Route path='/CodeWarsProfile' element={<CodewarsProfile userId='12345' />} />
   <Route path='/SearchComponent' element={<SearchComponent/>} />
   <Route path='/RandomComponent' element={<RandomComponent/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;