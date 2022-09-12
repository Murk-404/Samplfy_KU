import React from 'react'
// import './App.css';
import './Content.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';

// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container, Row, Col } from 'react-bootstrap'

export default function Content() {
  return (
    // <Container fluid style={{ paddingTop: '40vh' }} className="d-flex align-items-center justify-content-center">
    //   {/* <Row className="d-flex align-text-center justify-text-center">
    //     <p>This is the text that will be above the button</p>
    //   </Row> */}
    //   <Row className="d-flex align-items-center justify-content-center">
    //     <ButtonComponent/>
    //   </Row>

    // </Container>
    <div className="container-container">
      <div className="row" id="text">
        <p>Welcome to Samplfy!<br/>Click below to get started</p>
      </div>
      <div className="row" id="button">
        <ButtonComponent/>
      </div>
    </div>
    
  )
}
