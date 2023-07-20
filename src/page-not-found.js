import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sticky from 'react-stickynode';
import logo from './logo.svg';
import nintendoConfused from './images/Confused.webp';
import './home.css';

function PageNotFound() {
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
            <h1 className="h-one">Uh Oh...</h1>
            <h2 className="h-two">This Seems To Be A Dead End</h2>
          </Col>
          <h6></h6>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <div style = {{backgroundColor:'white'}}>
              <Row>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <h3 className="h-three" style = {{paddingTop: '8px'}}>What Happened?</h3>
                    <p className="para">It seems you have somehow discovered some uncharted territory within our website.</p>
                    <p className = "para">No need to worry though! Click the button below to be brought back on track to the Switch Sales home page, 
                    or use the navigation bar on the top left to find a specifc page you may be interested in!</p>
                    {/* Home Page Button */}
                    <Row>
                      <Col xs={3}></Col>
                      <Col>
                        <div className="text-center">
                          <div className="topnav">
                            <a href="./" style={{padding: '5px'}}><h6 className="h-six">Return To Home Page</h6></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs={3}></Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                <p className="para" style = {{textAlign: 'center', color: 'white'}}>.</p>
                  <div style = {{backgroundColor:'white'}}>
                    <img src={nintendoConfused} style = {{maxWidth:'100%', maxHeight: '100%', float: "bottom"}} alt="nintendoConfused"/>
                  </div>
                </Col>
              </Row>
              </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default PageNotFound;
