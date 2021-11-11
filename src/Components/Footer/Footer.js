import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white p-3 mt-5">
            <div className="d-flex justify-content-around row">
                <div className="col-lg-4 col-md-12 px-3 text-start">
                    <p>We Are Travel Agency </p>
                    <p>All right reserved@Medicare,2022</p>
                </div>
                <div className="col-lg-4 col-md-12">
                <p><Link className="text-white pe-3" to='./home'>Home</Link></p>
                <p><Link className="text-white pe-3" to='./home#spot'>spot</Link></p>
                <p><Link className="text-white pe-3" to='./login'>Login</Link></p>
                <p><Link className="text-white pe-3" to='./contact'>Contact Us</Link></p>
                </div>
                <div className="col-lg-4 col-md-12">
                    <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i> Facebook</a></p>
                    <p><a href="http://github.io" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Github</a></p>
                    <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a></p>
                    <p><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow"></i> StackOverflow</a></p>
                
                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;