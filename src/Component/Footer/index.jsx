import React from 'react';
import {Link} from "react-router-dom";
import './styleFooter.css'
import {Row,Col} from 'react-bootstrap'
import WhatsappChat from './whatsapp';

const Footer = () => {

    return (
            <center>
                <footer className="paddingfooter bgfooter">
                    <Row className={'mx-3'}>
                        <Col md={9} sm={12} xs={12}>
                            <Row>
                                <Col>
                                <div>
                                    <img src={"images/logofooter.png"} alt={"logoimage"}/>
                                </div>
                               </Col>
                                <Col>
                                <p className={'text-white descriptionebcompany'}>
                                © 2022 <span className={'simat-burundi'}>EB-COMPANY.</span>Tous les droits sont réservés. 
                                <span className={'text-center'}>Tous les logiciels et thèmes sont développés </span> <span className={"eb-companye"}>par EB-COMPANY </span>. 
                                </p>

                                </Col>
                            </Row>
                            
                            
                        </Col>
                      
                     
                        <Col md={3} sm={12} xs={12}>
                        <h5 className={' text-uppercase titlefooter'}>Nous contacter </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={"info@eb-company.com"} className="nav-link p-0 text-white all_link">info@eb-company.com</a></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">79 343 813 / 72 415 986 </Link></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
                <WhatsappChat />
                
            </center>
    );
};

export default Footer;