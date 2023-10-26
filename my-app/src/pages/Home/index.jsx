import React from "react";

//import axios from "axios";
//import { useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfocircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
// import { Button } from 'react-bootstrap';


import logo from '../../public/img/logo.jpg';
import "./styles.css";

const Home = () => {
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
        <header className="header">
            <nav>
                <div className="logo">
                   <img src={logo} alt="Logo"/>
                </div>
                <ul className="menu">
                    <li> <span> All Jobs </span> 
                        <ul className="submenu">
                            <li>
                                <span> Job by  </span>
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
                            </li>
                        </ul>
                    </li>
                    <li> <span> IT Companies </span> </li>
                    <li> <span> Blog </span> </li>
                    <li> <span> Others </span> </li>
                </ul>
                <div className="account">
                    <div> For Employer </div>
                    <div> Sign in/Sign up </div>
                </div>
            </nav>
        </header>
        // <div className="container">
        //     <header>
        //         <div className="logo">
        //             <img src={logo} alt="Logo"/>
        //         </div>
        //         <div className="tag">
        //             All Jobs <i class="fas fa-angle-down"></i>
        //             <ul>
        //                 <li className="skill"> Job by skill 
        //                     <ul>
        //                         <li> PHP </li>
        //                         <li> Java </li>
        //                         <li> Javascript </li>
        //                         <li> Tester </li>
        //                         <li> NodeJS </li>
        //                         <li> .NET </li>
        //                     </ul>
        //                 </li>
        //                 <li className="title"> Job by title 
        //                     <ul>
        //                         <li> PHP Developer </li>
        //                         <li> Java Developer </li>
        //                         <li> Javascript Developer </li>
        //                         <li> Tester </li>
        //                         <li> NodeJS Developer </li>
        //                         <li> .NET Developer </li>
        //                     </ul>
        //                 </li>
        //                 <li className="company"> Job by company 
        //                     <ul>
        //                         <li> MB Bank </li>
        //                         <li> Techcombank </li>
        //                         <li> FPT Software </li>
        //                         <li> Viettel Group </li>
        //                     </ul>
        //                 </li>
        //                 <li className="city"> Job by city 
        //                     <ul>
        //                         <li> Ho Chi Minh </li>
        //                         <li> Ha Noi </li>
        //                         <li> Can Tho </li>
        //                         <li> Others </li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="account">
        //             <div>
        //                 For Employers                    
        //             </div>
        //             <div>
        //                 Sign in/Sign up
        //             </div>
        //         </div>
        //         {/* <div>
        //             {users.map((user, index) => (
        //                 <div key={index+1}>
        //                     {user.fullname}
        //                 </div>
        //             ))}
        //         </div>
        //         <div onClick={handleLogin}>
        //             Login
        //         </div> */}
        //     </header>
        //     <div>

        //     </div>
        // </div>
    )
}

export default Home;