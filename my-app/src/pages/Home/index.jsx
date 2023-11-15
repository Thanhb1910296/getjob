import React from "react";

//import axios from "axios";
//import { useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfocircle } from "react-icons/bs";
// import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import {Button, Form, InputGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles.css";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx"
import img from "../../public/img/Capture.PNG";
const Home = () => {
    // const img = "../../public/img/3.png";
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
            <Header/>
            {/* Main */}
            <main className="">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default">
                        Locaiton
                    </InputGroup.Text>
                    <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    <Button className="search"> Search </Button>
                </InputGroup>
                
                <div className="suggestions">
                    <Form.Label htmlFor="basic-url"> Suggestions for you </Form.Label>
                    <Button variant="dark"> Java </Button>
                    <Button variant="dark"> ReactJS </Button>
                    <Button variant="dark"> .NET </Button>
                    <Button variant="dark"> Tester </Button>
                    <Button variant="dark"> PHP </Button>
                    <Button variant="dark"> Business Analyst </Button>
                    <Button variant="dark"> NodeJS </Button>
                    <Button variant="dark"> Manager </Button>
                    <Button variant="dark"> Flutter </Button>
                    <Button variant="dark"> Security </Button>
                </div>
                
            </main>
            <div className="d-flex justify-content-center mt-5">
                <img className="img-change" src={img} alt=""/>
            </div>
            <Footer/>
        </div>
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