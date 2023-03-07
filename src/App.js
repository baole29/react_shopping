
import './App.css';
import React from 'react';
import NavBar from "./components/NavBar.js"
import logo from './img/logo.png'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <NavBar/>
      </div>
    );
  }
}



class Header extends React.Component {
  render() {
    return (
      <div className='flex justify-between'>
        <img src={logo} alt='logo' className='h-32'/>
        <button> Signin </button>
      </div>
    );
  }
}


export default App;
