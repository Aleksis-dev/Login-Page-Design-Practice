import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [position, setPosition] = useState(null);
    let navigate = useNavigate();

    return(<>
        <div className="main-container">
            <div className="container-2 left">
                <p>Made by Aleksis</p>
                <h1>Where Ideas come alive...</h1>
            </div>
            <div className="container-2 right">
                <p className="title">Create a new Account!</p>
                <form action="">
                    <div className="input-div">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password confirmation">Password Confirmation</label><br />
                        <input type="password" name="password confirmation" id="password confirmation" />
                    </div>
                    <div className='input-div center'>
                        <button type="submit" className="submit">Sign up</button>
                    </div>
                </form>
                <div className="input-div">
                    <button className="redirect" onClick={() => {navigate('/login')}}>Already a user?</button>
                </div>
            </div>
        </div>
    </>)
}

export default Register;