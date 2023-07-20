import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sticky from 'react-stickynode';
import logo from './logo.svg';
import nintendoBigThree from './images/nintendoBigThree.jpg';
import './home.css';

function Home() {
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
            <h1 className="h-one">Switch Sales</h1>
            <h2 className="h-two">The Best Games For The Best Price</h2>
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
                    <h3 className="h-three" style = {{paddingTop: '8px'}}>What Do We Offer?</h3>
                    <p className="para">Have you ever found yourself looking to buy a game on your nintendo switch but it never seems to go on sale? That's classic Nintendo for you.</p>
                    <p className = "para">Our goal at Switch Sales is to provide a safe and afforable way to purchase Nintendo Switch games at a discount since Nintendo won't do it themselves. <i>We do what Nintendon't!</i></p>
                    {/* Buy Now Button */}
                    <Row>
                      <Col xs={3}></Col>
                      <Col>
                        <div className="text-center">
                          <div className="topnav">
                            <a href="./our-games" style={{padding: '5px'}}><h6 className="h-six">Check Out Our Games</h6></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs={3}></Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <img src={nintendoBigThree} style = {{maxWidth:'100%', maxHeight: '100%'}} alt="nintendoBigThree"/>
                    {/* A little easter egg since this will never be a real site */}
                    <p className="para" style = {{textAlign: 'center', color: 'white'}}>This is totally 100% legit and legal</p>
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

export default Home;
