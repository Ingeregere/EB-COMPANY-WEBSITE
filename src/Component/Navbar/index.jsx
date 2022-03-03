import React, {useEffect} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link ,useLocation} from 'react-router-dom'
import logo from '../../Pages/assets/images/logo1.png'
import './styleNavbar.css'

function Navbars() {
  const mainContent = React.useRef(null);
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  return (
    <Navbar collapseOnSelect expand="lg" className={'bgNavbar'} fixed={'top'} >
  <Container>
  <Navbar.Brand as={Link} to={"/"}><img src={logo} alt={"logo"} className={'logostyle'}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " className={'borderNavbar '} />
  <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
    <Nav className="me-right" ref={mainContent}>
      <Nav.Link as={Link} to={"/"}  className={'linksimatbdi'}>Accueil</Nav.Link>
      <Nav.Link as={Link} to={"/nos-produits"}  className={'linksimatbdi'}>Nos produits</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars