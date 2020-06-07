import React, { useState } from 'react';

import './InputForm.css';

const InputForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        if( phoneNumber.length === 10){
            setPhoneNumber(phoneNumber)
        } else {
            alert("Phone Number must be of 10 digits")
            return;
        }
        
        fetch('http://localhost:5000/new',{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber,
                    isActive: isActive
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        
        resetInput();
    }

    const resetInput = () => {
        setPhoneNumber('');
        setFirstName('');
        setIsActive(false);
        setLastName('');
        setEmail('');
    }

    return(
        <form onSubmit={handleClick} method='POST' className="formContainer">
            <label className="heading">New Contact</label>
            <div className="firstNameContainer">
                <label>First Name</label>
                <input className="inputContainer" height="30px" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className="lastNameContainer">
                <label>Last Name</label>
                <input className="inputContainer" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="emailContainer">
                <label>Email</label>
                <input className="inputContainer" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="phoneNumberContainer">
                <label>Phone Number</label>
                <input className="inputContainer" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value) } />
            </div>
            <div className="isActiveContainer">
                <label>Is it a Active Phone Number</label>
                <input className="inputContainer" type="checkbox" value={isActive} onChange={() => setIsActive(!isActive)} />
            </div>
            <button type="submit" className="buttonContainer">Add</button>
        </form>
    )
}

export default InputForm;