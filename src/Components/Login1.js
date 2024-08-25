import './Style1.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login1 = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const n=useNavigate();
    const Login = async () => {
        try {
            const res = await fetch('https://users-backend-0ljr.onrender.com/validate-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailId: userName,
                    password: password
                })
            });

            if (res.status === 200) {
                const data = await res.json();
                if (data.status === 'success') {
                   n('/Display2') // Redirect only if user exists and credentials are correct
                } else {
                    alert("User does not exist or invalid credentials"); // User does not exist or invalid credentials
                }
            } else {
                alert('Invalid EmailId or password: ' + res.status);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred, please try again later.');
        }
    };

useEffect(()=>{ 
    async function getUser() {
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
    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input
                                type="email"
                                name="email"
                                id="a"
                                required
                                value={userName}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input
                                type="password"
                                name="password"
                                id="b"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>
                        <div className="forget">
                            <label>
                                <input type="checkbox" />
                                Remember me <a href="#">Forget Password</a>
                            </label>
                        </div>
                        <button type="button" id="loginButton" onClick={Login}>Login</button>
                    </form>
                </div>
            </div>
        </section>
       
    );
};

export default Login1;
