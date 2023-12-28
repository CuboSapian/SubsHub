import React from 'react'
import Button from 'react-bootstrap/Button'
import "./navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Navbar = () => {
   
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <>
            <nav className='main-nav'>

                {/* 1st component for LOGO of SubsHub */}
                <div className='logo'>
                    <NavLink>
                    <h2>
                        <span style={{ color: "black" }}>Subs </span>
                        <span style={{ color: "green" }}>Hub</span>

                    </h2>
                    </NavLink>
                </div>



                {/* 2nd component for main navigation */}
                <div className='menu-link'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/plans">Plans</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div >



                {/* 3rd component for user profile */}
                <div className='user-ifc designUsr'>
                <Link to='ott'><button type="button" className="btn btn-light" style={{'fontFamily': 'Barlow','fontSize':'2em'}}><AppRegistrationIcon/></button></Link>

                    {!localStorage.getItem('token')
                        ?
                        // When user is not Logged in
                        <>
                            <Link to='/login'>
                                <button type="button" className="btn btn-light" style={{'fontFamily': 'Barlow','fontSize':'2em'}} ><PersonIcon/></button>
                            </Link>
                        </>
                        :
                        // When user is logged in
                        <>
                            <Button onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    }

                </div>

            </nav >
        </>
    )
}

export default Navbar
