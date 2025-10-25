import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [position, setPosition] = useState(null);
    let navigate = useNavigate();

    return(<>
        <div className="main-container">
            <div className="container-2 left">
                <p>Made by Aleksis</p>
                <h1>Where Ideas come alive...</h1>
            </div>
            <div className="container-2 right">
                <p className="title">Welcome back!</p>
                <form action="">
                    <div className="input-div">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" minLength="10"/>
                    </div>
                    <div className='input-div center'>
                        <button type="submit" className="submit">Sign in</button>
                    </div>
                </form>
                <div className="input-div">
                    <button className="redirect" onClick={() => {navigate('/resetpassword')}}>Reset password</button>
                </div>
                <div className="input-div">
                    <button className="redirect" onClick={() => {navigate('/register')}}>Create a new account</button>
                </div>
            </div>
        </div>
    </>)
}

export default Login;