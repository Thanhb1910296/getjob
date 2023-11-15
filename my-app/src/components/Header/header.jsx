import React from "react";

//import axios from "axios";
//import { useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom";

// import {Button, Form, InputGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../public/img/logo.jpg';
import "./styles.css";

const Header = () => {
    // const navigate = useNavigate();
    // const handleLogin = () => {
    //     navigate('/sign_in');
    // }
    // const [users, setUsers] = useState([]);
    // useEffect(() => {

    //     axios
    //       .get('http://localhost:5555/user')
    //       .then((response) => {
    //         // console.log(response);
    //         setUsers(response.data.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);
    
    return (
        <div>
            {/* Header */}
            <header className="header">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <ul className="menu">
                        <li> <span> All Jobs </span> 
                            <ul className="submenu">
                                <li>
                                    <span> Job by Language </span>
                                    <ul className="submenu2">
                                        <li><span> PHP </span></li>
                                        <li><span> Java </span></li>
                                        <li><span> Javascript </span></li>
                                        <li><span> Laravel </span></li>
                                        <li><span> Spring </span></li>
                                        <li><span> NodeJS </span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span> Job by title </span>

                                </li>
                                <li>
                                    <span> Job by company </span>
                                </li>
                                <li>
                                    <span> Job by City </span>
                                    <ul className="submenu2">
                                        <li><span> PHP </span></li>
                                        <li><span> Java </span></li>
                                        <li><span> Javascript </span></li>
                                        <li><span> Laravel </span></li>
                                        <li><span> Spring </span></li>
                                        <li><span> NodeJS </span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li> <span> IT Companies </span> </li>
                        <li> <span> Blog </span> </li>
                        <li> <span> Others </span> </li>
                    </ul>
                    <div className="account">
                        <div> For Employer </div>
                        <div> Trần Tiến Thành </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;