import logo from './CodeKingTrans.png';
import { useState, useEffect } from 'react';
import './App.css';

function Navbar() {
  return(
    <div class='navbar'>
        <img alt='Code King Logo' src={logo}></img>
        <h1>
          CODE KING
        </h1>
        <div class='nav_buttons'>
          <button>
            LOGIN
          </button>
          <button>
            ABOUT
          </button>
          <button>
            HOME
          </button>
        </div>
      </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("updated...")
  }, [email, password]);

  const login = () => {
    console.log(email)
    console.log(password)
  }

  return (
    <div class='login_form'>
      <h1>
        Log In
      </h1>
      <div class='card'>
        <div class='login_card'>
            <input 
              type='text'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input 
              type='text'
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button onClick={login}>
              LOGIN
            </button>
            <a href='google.com'>
              FORGOT PASSWORD?
            </a>
            <a href='google.com'>
              CREATE AN ACCOUNT
            </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class='backdrop'>
        <img alt='Code King Logo' src={logo}></img>
        <Login />
      </div>
      <div class='footer'>
        <img alt='instagram logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'></img>
        <img alt='x logo' src='https://acrm.org/wp-content/uploads/2024/03/twitter-x-logo-101c7d2420-seeklogocom.png'></img>
        <img alt='facebook logo' src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'></img>
      </div>
    </div>
  );
}

export default App;
