import React from 'react'
import { useState } from 'react';
import './Form.css'
import Navbar from '../homepage/navbar';
import Footer from '../homepage/footer'

export const Form = () => {
    const [data, setData ] = useState({fname:"",lname:"", mail:"",phone:"",message:""});

    const handleChange = (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]: value})
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        alert(data.message)
    }

return (
    <>
    <Navbar/>
    <form method='post' onSubmit={handleSubmit}>
        <div className='contact-form' style={{maxWidth:'100%'}}>
        <h1><b>Contact<span style={{ color: 'rgb(255 74 167)' }}>Us</span></b></h1>
        <div><input type='text' name='fname' className='form-input-text' onChange={handleChange} value={data.fname}placeholder='First Name' /></div>
            <div ><input type='text' name='lname' className='form-input-text' onChange={handleChange} value={data.lname} placeholder='Last Name' /></div>
            <div ><input type='email' name='mail' className='form-input-text' onChange={handleChange} value={data.mail}placeholder='example@gmail.com' /></div>
            <div ><input type='phone' name='phone' className='form-input-text'  onChange={handleChange} value={data.phone}placeholder='+91' /></div>
            <div ><textarea name='message' className='form-input-text' onChange={handleChange} value={data.message} cols='30' row='10' placeholder='Type Your Message here..' /></div>
            <div><button type='submit'>Send</button></div>
            {/* <p>{data.fname}, {data.lname}, {data.mail}, 
            {data.message} </p> */}
        </div>
    </form>
    <Footer/>
    </>
)
}

export default Form
