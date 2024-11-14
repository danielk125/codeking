import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../CodeKingTrans.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("updated...")
  }, [email, password]);

  const login = useCallback(() => {
    console.log(email);
    console.log(password);
    navigate('/user');
  }, [email, password, navigate]);

  return (
    <div className='login_form'>
      <h1>
        Log In
      </h1>
      <div className='card'>
        <div className='login_card'>
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
            <button onClick={login} to="/user">
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

function Home() {
  return (
    
    <div className="App">
        <Navbar />
        <div className='backdrop'>
            <img alt='Code King Logo' src={logo}></img>
            <Login />
        </div>
        <Footer />
    </div>
  );
}

export default Home;
