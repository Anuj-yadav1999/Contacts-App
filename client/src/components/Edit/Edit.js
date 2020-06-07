import React, { useState } from 'react';
import {Redirect} from 'react-router';
import './Edit.css';
const Edit = ({ id }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = (event) => {
        event.preventDefault();
        if(firstName === '' && lastName === '' && email === '' && phoneNumber === '' && isActive === false){
            alert('No data is changed')
            return;
        }
        fetch(`http://localhost:5000/edit/${id}`,{
            method: 'PUT',
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
        return (<Redirect to="/new" />);
    }

    const resetInput = () => {
        setPhoneNumber('');
        setFirstName('');
        setIsActive(false);
        setLastName('');
        setEmail('');
    }
    
    return(
        <div className="outerContainer">
            <label className="dataContainer">
                <h1 >Enter the Fields you want to Update</h1>
            </label>
            <div>
                <form onSubmit={handleClick} className="editContainer">
                    <div className="fieldContainer">
                        <label>First Name</label>
                        <input className="inputContainer" type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="fieldContainer">
                        <label>Last Name</label>
                        <input className="inputContainer" type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className="fieldContainer">
                        <label>Email</label>
                        <input className="inputContainer" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="fieldContainer">
                        <label>Phone Number</label>
                        <input className="inputContainer" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value) } />
                    </div>
                    <div className="fieldContainer">
                        <label>Is it a Active Phone Number</label>
                        <input className="inputContainer" type="checkbox" value={isActive} onChange={() => setIsActive(!isActive)} />
                    </div>
                <button type="submit" className="buttonContainer" style={{backgroundColor: "rgb(66, 228, 93)"}}>Save</button>            
                </form>
            </div>
        </div>
    )
}

export default Edit;