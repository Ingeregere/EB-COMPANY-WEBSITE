import React from 'react';
import './styleFooter.css'
import {Row,Col} from 'react-bootstrap'
import WhatsappChat from './whatsapp';
import {BsHouseDoorFill} from 'react-icons/bs'

const Footer = () => {

    return (
            <center>
                <footer className="paddingfooter bgfooter">
                    <Row className={'mx-3'}>
                        <Col md={6} sm={12} xs={12}>
                            <Row>
                                <Col>
                                <div>
                                    <img src={"images/logofooter.png"} alt={"logoimage"}/>
                                </div>
                               </Col>
                                <Col>
                                <p className={'text-white descriptionebcompany'}>
                                © 2022 <span className={'simat-burundi'}>EB-COMPANY.{" "}</span>Tous les droits sont réservés. 
                                <span className={'text-center'}> {" "}Tous les logiciels et thèmes sont développés </span> <span className={"eb-companye"}>par EB-COMPANY </span>
                                </p>

                                </Col>
                            </Row>
                            
                            
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                        <h5 className={' text-uppercase titlefooter'}>Adresse </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"> <BsHouseDoorFill /> Kabondo avenue Lac RWERU no 7, Bujumbura</li>
                            </ul>
                        </Col>
                      
                     
                        <Col md={3} sm={12} xs={12}>
                        <h5 className={' text-uppercase titlefooter'}>Nous contacter </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white">info@eb-company.com</li>
                                <li className="nav-item mb-2 text-white">79 343 813 / 72 415 986</li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
                <WhatsappChat />
                
            </center>
    );
};

export default Footer;