import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Signup.css"
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Signup = () => {
    // VARIABLES
    // toggle to see password
    const [type, setType] = useState("Password");
    const [conftype, setConftype] = useState("Password");
    // input credentials
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // navigation
    const navigate=useNavigate()


    // FUNCTIONS
    // toggle functions
    const handleToggle = () => { type === "Password" ? setType("text") : setType("Password"); }
    const handleToggleConf = () => { conftype === "Password" ? setConftype("text") : setConftype("Password"); }
    
    // onSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/auth/createUser' , {username,email,password})
        .then(result => {
            console.log(result)
            localStorage.setItem('token', result.data.authtoken);
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container cont'>
            <div className='signup'>
                <div className='headingSignup'>
                    <HowToRegIcon fontSize='large'/>Sign Up
                </div>

                <form>

                    <div className='form-start'>
                        <div>Username</div>
                        <div>
                            <input type="text" placeholder="Enter Username" className='form-control custom' onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div>Email</div>
                        <div>
                            <input type="text" placeholder="Enter email" className='form-control custom' onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>Password</div>
                        <div>
                            <input type={type} placeholder="Enter Password" className='form-control custom' onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <input type="checkbox" className='custom' onClick={handleToggle} />
                            &nbsp;See password
                        </div>

                        <div>Confirm Password</div>
                        <div>
                            <input type={conftype} placeholder="Enter Password" className='form-control custom' />
                        </div>

                        <div>
                            <input type="checkbox" className='custom' onClick={handleToggleConf} />
                            &nbsp;See password
                        </div>

                        <div className='button'>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </div>

                    <div className='transfer'>
                        Already have an account?
                        <Link to='/login'>
                        <button type="button" className="btn btn-link">Login</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
