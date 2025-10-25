import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {

    const [position, setPosition] = useState(null);
    let navigate = useNavigate();

    return(<>
        <div className="main-container">
            <div className="container-2 left">
                <p>Made by Aleksis</p>
                <h1>Where Ideas come alive...</h1>
            </div>
            <div className="container-2 right">
                <p className="title">Reset Password</p>
                <form action="">
                    <div className="input-div">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className='input-div center'>
                        <button type="submit" className="submit big-button">Reset Password</button>
                    </div>
                </form>
                <div className="input-div">
                    <button className="redirect" onClick={() => {navigate('/login')}}>Back to Login</button>
                </div>
            </div>
        </div>
    </>)
}

export default ResetPassword;