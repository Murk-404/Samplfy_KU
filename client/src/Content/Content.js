import React from 'react'
// import './App.css';
import './Content.css'
import { Dimensions } from 'react-native';
import ButtonComponent from '../ButtonComponent/ButtonComponent.js';

// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import { Container, Row, Col } from 'react-bootstrap'

// export default function Content() {
//   return (
//     // <Container fluid style={{ paddingTop: '40vh' }} className="d-flex align-items-center justify-content-center">
//     //   {/* <Row className="d-flex align-text-center justify-text-center">
//     //     <p>This is the text that will be above the button</p>
//     //   </Row> */}
//     //   <Row className="d-flex align-items-center justify-content-center">
//     //     <ButtonComponent/>
//     //   </Row>

//     // </Container>
//     <div className="container-container">
//       <div className="row" id="text">
//         <p>Welcome to Samplfy!<br/>Click below to get started</p>
//       </div>
//       <div className="row" id="button">
//         <ButtonComponent/>
//       </div>
//     </div>
    
//   )
// }

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state={windowSize : this.getWindowSize()}
  }

  getWindowSize() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height; 

    return(windowWidth * windowHeight)
  }

  render() {
    return (
      <div className="container-container">
        <div className="row" id="text">
          <p> <span id="welcome"> Welcome to Samplify!</span> <br/>Click below to get started</p>
        </div>
        <div className="row" id="button">
          <ButtonComponent />
        </div>
      </div>
    )
  }
}