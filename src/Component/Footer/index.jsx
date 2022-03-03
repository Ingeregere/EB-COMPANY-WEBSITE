import React from 'react';
import {Link} from "react-router-dom";
import './styleFooter.css'
import {Row,Col} from 'react-bootstrap'
import WhatsappChat from './whatsapp';

const Footer = () => {

    return (
            <div>
                <footer className="paddingfooter bgfooter">
                    <Row className={'mx-3'}>
                        <Col md={3}>
                        <div>
                                <img src={"images/logofooter.png"} alt={"logoimage"}/>
                            </div>
                            <p className={'text-white '}>
                            © 2022 <span className={'simat-burundi'}>EB-COMPANY.</span>Tous les droits sont réservés. 
                             <span className={'text-center'}>Tous les logiciels et thèmes sont développés </span> <span className={"eb-companye"}>par EB-COMPANY </span>. 
                            </p>
                        </Col>
                        <Col md={3}>
                        <h5 className={'text-white text-uppercase'}>EB-COMPANY</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/'} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                        <h5 className={'text-white text-uppercase'}>EB-COMPANY</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/'} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                            </ul>
                        </Col>
                        <Col md={3}>
                        <h5 className={'text-white text-uppercase'}>EB-COMPANY</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/'} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/"} className="nav-link p-0 text-white all_link">EB-COMPANY</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
                <WhatsappChat />
                
            </div>
    );
};

export default Footer;