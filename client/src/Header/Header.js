import React from 'react'
// import './App.css';
// import { Container } from 'react'
import logo from '/Spotify_React_Project/client/src/images/samplfy-logo-new.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    
    // <Navbar bg="darkSpotify" variant="dark" fixed="top"
    // expand="sm">
    //   <Navbar.Brand>
    //     <img src={logo} alt="Spotify" className="logo"/>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse className="align-right" id="responsive-navbar-nav">
    //     <Nav>
    //       <NavDropdown title="Features" className="nav-item">
    //         <NavDropdown.Item href="#Top-Songs">Top Songs</NavDropdown.Item>
    //         <NavDropdown.Item href="#Get-Samples">Samples</NavDropdown.Item>
    //         <NavDropdown.Item href="#Get-Playlist">Playlist</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#Login">Get Started</NavDropdown.Item>
    //       </NavDropdown>
    //       <Nav.Link href="#About" className="nav-item">About</Nav.Link>
    //       <Nav.Link href="#Login" className="nav-item">Login</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Spotify" height="70" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Something else</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              No ideas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
