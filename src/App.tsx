import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodewarsProfile from './Components/CodewarsProfileComponent/CodeWarsProfile';
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <CodewarsProfile userId="Brand0nLe" />
      <Footer/>
    </div>
  );
}


export default App;
