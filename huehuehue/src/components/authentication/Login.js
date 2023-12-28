import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    // input credentials
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // navigation
    const navigate = useNavigate()
    // toggle to see password
    const [type, setType] = useState("Password");

    const handleToggle = () => {
        type === "Password" ? setType("text") : setType("Password");
    }

    // onSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.post('http://localhost:5000/auth/login', { email, password })
            .then(result => {
                console.log(result)
                if (!result.data.success)
                {
                    alert(result.data.error)
                   
                }
                else
                {
                    console.log("huehuehue")
                    localStorage.setItem('token', result.data.authtoken);
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container contLogin' id='myForm'>
            <div className='login'>
                <div className='headingLogin'>
                   <LoginIcon fontSize='large'/> Login
                </div>
                <div className='form-start'>
                    <form onSubmit={handleSubmit}>
                        <div>Email</div>
                        <div className='userNameLogin'>
                            <input type="text" placeholder="Enter Email" className='form-control custom' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>Password</div>
                        <div className='passwordLogin'>
                            <input type={type} placeholder="Enter Password" className='form-control custom' onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <input type="checkbox" onClick={handleToggle} />
                            &nbsp;See password
                        </div>

                        <div className='button'>
                            <Button variant="primary" type="submit" onSubmit={handleSubmit} >
                                Submit
                            </Button>
                        </div>
                        <div className='transfer'>
                            Don't have an account?
                            <Link to='/register'>
                            <button type="button" className="btn btn-link">Register</button>
                            </Link>
                        </div>
                        <div className='transfer'>
                            Sign-in With Google
                            <a href='http://localhost:5000/auth/google'>
                            <button type="button" className="btn btn-link">Click Here</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
