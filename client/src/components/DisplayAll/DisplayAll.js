import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DisplayAll.css';
import Header from '../Header/Header';
import logo from './logos/call.png';
import editLogo from './logos/pencil.png';
import deleteLogo from './logos/delete.png';

const Listing = ({ data }) => {
    return(
    <div className="listingCont"  >
        <div className="logoCont" >
            <img src={logo} alt="Logo" style={{ width: "40px", height: "40px", marginTop: "10px" }}/>
        </div>
        <div className="dataCont"  style={{marginTop:"12px"}}>
            {data.firstName}
            <span style={{marginLeft: "30px", fontSize: "25px"}}>
                {data.phoneNumber}
            </span>
        </div>
        <div className="editCont" style={{opacity: "70%"}  }>
            <div style={{marginLeft:"880px"}}>
            <Link to={{pathname: `/edit/${data._id}`, state: { id: `${data._id}`}}} ><img src={editLogo} alt="Edit" style={{ width: "40px", height: "40px", marginTop: "10px", mmarginLeft: "710px ", }} /></Link>
            <Link to={{pathname: `/delete/${data._id}`, state: { id: `${data._id}`}}} ><img src={deleteLogo} alt="Delete" style={{ width: "40px", height: "40px", marginTop: "10px", marginLeft:"40px"}} /></Link>
            </div>
        </div>
    </div>
    )
};



const DisplayAll = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() =>{
         async function getData() {
            let url = `http://localhost:5000/`;
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log(response);
            const data  = await response.json();
            console.log(data);
            setAllData(data);
            }
            getData();
        }, []);

    return(
        <div className='outerCont'>
            <section className='innerCont'>
                <Header allData={allData}/>
            </section>
            <br />
            <br />
            <br />
            <br />
            <section className="bottomCont">
                { allData.map((data, index) => (
                    <div key={index}><Listing data={data}/></div>
                    ))
                }
            </section>
    </div>
    )
};

export default DisplayAll;