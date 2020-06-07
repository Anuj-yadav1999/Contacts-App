import React from 'react';
import './DeleteData.css';
const DeleteData = ({ id }) => {
    
    const handleClick = (event) => {
        event.preventDefault();
        
        fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    
    return(
        <div className="outerContainer">
            <label className="labelContainer">Are You Sure to Permanent Delete this Contact</label>
            <form onSubmit={handleClick} className="formContainer">
                <button type="submit" className="buttonContainer">Delete</button>
            </form>
        </div>
    )
}

export default DeleteData;