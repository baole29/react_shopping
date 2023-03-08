
import './App.css';
import React from 'react';
import NavBar from "./components/NavBar.js"
import logo from './img/logo.png'
import { GoogleLogin, googleLogout  } from '@react-oauth/google';
import {} from 'googleapis'

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

  getInfo = async ()=>{
    const auth2 = await loadAuth2(
      '1095217483237-dni9jq3km49trlmh4ct5f2gjcqab5o25.apps.googleusercontent.com',
      'https://www.googleapis.com/auth/userinfo.profile'
    )
    console.log(auth2);
  }

  logout = ()=>{
    googleLogout()
    console.log('logouted');
  }
  render() {

    return (
      <div className='flex justify-between'>
        <img src={logo} alt='logo' className='h-32'/>

        <GoogleLogin
            
            text='signin'
            shape='circle'
            type='standard'
            theme='filled_blue'
            responseType="code,token"
            cookiePolicy={'single_host_origin'}
            onSuccess={credentialResponse => {
              console.log(credentialResponse.credential);
            }}
          
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
          <button onClick={this.getInfo}> Logout </button>
{/* <button onClick={() => login()}>
  Sign in with Google ?{' '}
</button>; */}

      </div>
    );
  }
}


export default App;
