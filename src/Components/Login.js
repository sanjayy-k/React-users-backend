import './Style.css'
import { useState } from 'react';
import { useEffect } from 'react'; //to avoid multiple rendering in console
import { useNavigate } from 'react-router-dom';
const Login=()=> {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{ 
  async function getUser() {
    alert("Sign Up First")
    try {
      const res = await fetch('https://users-backend-0ljr.onrender.com/get-user'); 
      const data = await res.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
getUser();
},[])
  async function add() {
    if (!emailId || !password) {
        alert('Please fill in both email and password.');
        return;
      }
    try {
      const res = await fetch('https://users-backend-0ljr.onrender.com/add-user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          emailId: emailId,
          password: password,
        }),
      });
      if (res.ok) {
         navigate('/Display1');
        
      } else {
        alert('User already exists. Try a different username and password.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <h2>SIGNUP</h2>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email"name="email" id="a" required value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
            <label>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" name="password"id="b" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label>Password</label>
          </div>
          <div className="forget">
            <label>
              <input type="checkbox" /> Remember me <a href="#">Forget Password</a>
            </label>
          </div>
         <button type="button" id="loginButton" onClick={add}>
            Sign Up
          </button>
          <div className="register">
            <p>
              Don't have an account? <a href='/Login1'>LOGIN</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;