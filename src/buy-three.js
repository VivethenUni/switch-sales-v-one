import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sticky from 'react-stickynode';
import MultiStep from 'react-multistep';
import Stepper from 'react-stepper-horizontal';
import useState from 'react';
import './box.css';
import logo from './logo.svg';
import handshake from './images/Handshake.webp';
import './make-review.css';

function BuyThree() {

    const steps = [
        { title: 'Game Choice' },
        { title: 'Your Info' },
        { title: 'Confirmation' }
    ];
  const activeStep = 2;

  return (
    <div className="App">
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      
      <Container fluid>
        <Row>
          <h6></h6>
          {/* Navbar */}
          <Col xs={2}>
            <div className="topnav">
              <a className="active" href="./"><h6 className="h-six"></h6></a>
              <a className="./book-button" href="./buy-one"><h6 className="h-six">Buy Now</h6></a>
              <a href="./about-us"><h6 className="h-six">About Us</h6></a>
              <a href="./reviews"><h6 className="h-six">Reviews</h6></a>
              <a href="./our-games"><h6 className="h-six">Our Games</h6></a>
            </div>
          </Col>
          {/* Header */}
          <Col>
            <div className="stepper">
                <Stepper className="stepper"
                    activeColor="#1379ff"
                    defaultColor="#494949"
                    completeColor="#68d410"
                    activeTitleColor="#000"
                    completeTitleColor="#111"
                    defaultTitleColor="#444"
                    circleFontColor="#fff"
                    completeBarColor="#11df7f"
                    steps={steps}
                    activeStep={activeStep}/>
            </div>
            <h1 className="h-two">Your Purchase Was Successful</h1>
          </Col>
          <h6></h6>
        </Row>
        <Row>
        <Col xs={2}>
            {/* Submit A Review Button */}
            {/*<div class="alert alert-success alert-dismissable" role="alert">
                <button className="button1" type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>
                Review Submitted Successfully!
            </div>*/}
            <div className="topnav" style={{ position: 'absolute', bottom: '10px', width: '15%' }}>
                <a href="./buy-two"><h6 className="h-six">Change Your Info</h6></a>
                <a href="./buy-one"><h6 className="h-six">Buy Another Game</h6></a>
                <a href="./"><h6 className="h-six">Go To Home Page</h6></a>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor: '#cbe2f7'}}>
              <Row>
                <Col xs={1}></Col>
                <Col xs={6}>
                    <br></br><b>
                    <p className="confirm">Your purchase has been received, confirmed and approved</p>
                    <p className="confirm">A confirmation email will be sent shortly</p>
                    <p className="confirm">Shipping time varies depending on your address, the average shipping time is one week</p>
                    <p className="confirm">Thank you for shopping with us and enjoy your new game!</p></b>
                    <hr></hr>
                    <p className="confirm">If you have any questions or would like to cancel your order then please contact us at <b>switch_sales@gmail.com</b> so we can help solve your issue</p>
                </Col>
                <Col>
                    <img src={handshake} style={{ borderRadius: "5px", width: "95%"}} alt="Handshake"></img>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row style={{ textAlign: "right", color: '#cbe2f7' }}></Row>
              </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default BuyThree;
