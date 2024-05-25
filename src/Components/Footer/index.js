import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    
                                    <BsFacebook />
                                    
                                </li>
                                <li>
                                    
                                    <BsLinkedin />
                                    
                                </li>
                                <li>
                                    
                                    <BsTwitter />
                                    
                                </li>
                                <li>
                                    
                                    <BsStackOverflow />
                                    
                                </li>
                                <li>
                                    
                                    <BsGoogle />
                                    
                                </li>
                                <li>
                                   
                                    <BsGithub />
                                    
                                </li>
                                <li>
                                    
                                    <BsYoutube />
                                    
                                </li> 
                            </ul>
                            
                        </Col>
                        
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;