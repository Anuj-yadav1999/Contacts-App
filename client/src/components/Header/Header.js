import React from 'react';
import './Header.css';
import addLogo from './new_logo/add_new.png';
import { Link } from 'react-router-dom';

const Header = ({allData}) => {
    return(

        <div className="outerContainer " style={{backgroundColor:"blanchedalmond"}} >
            <section className="innerContainer">
                <h1>My Contact List</h1>
            </section>
            <section className="bottomContainer">
                <h1>{allData.length} Total Contacts</h1>
            </section>
            <div className="logoContainer" style={{marginLeft:"550PX"}}>
                <Link to={{pathname: `/new`}} ><img src={addLogo} alt="add_New" /></Link>    
            </div>
        </div>
    );
}

export default Header;