import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Home from "./components/Notes/Home";
import Home1 from "./components/PYQs/Home1";
import Home2 from "./components/Feedbacks/Home2";
import Login from "./components/Login/login";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/Signup";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import axios from 'axios';

// allow calls from react app to Django api 
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/notes" element={<Home/>}/>
                    <Route path="/PYQs" element={<Home1/>}/>
                    <Route path="/feedbacks" element={<Home2/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>
                    <Route path="/SignIn" element={<SignIn/>}/>
                </Routes>

            </div>
        </Router>
    );
};

export default App;
