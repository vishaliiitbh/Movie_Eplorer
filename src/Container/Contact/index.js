import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
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
        </div>
    )
}

export default ContactContainer;