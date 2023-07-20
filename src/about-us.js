import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sticky from 'react-stickynode';
import logo from './logo.svg';
import playTogether from './images/PlayTogether.jpg';
import contactInfo from './images/contactInfo.png';
import './about-us.css';

function AboutUs() {
  return (
    <div className="App">
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
      <Container fluid>
        <Row>
          <h6></h6>
          <div aria-description="This page is about the Switch Sales Company. It covers the website's purpose and the various ways to contact them."></div>
          {/* Navbar */}
          <Col xs={2}>
            <div className="topnav" alt="The navigation bar containing many buttons leading to various parts of the website">
              <a className="active" href="./" alt="A Button with the Switch Sales Logo leading to the home page"><h6 className="h-six"></h6></a>
              <a className="./book-button" href="./buy-one" alt="A button titled buy now leading to the buy now page"><h6 className="h-six">Buy Now</h6></a>
              <a href="./about-us" alt="A button titled about us leading to the about us page"><h6 className="h-six">About Us</h6></a>
              <a href="./reviews" alt="A button titled reviews leading to the reviews page"><h6 className="h-six">Reviews</h6></a>
              <a href="./our-games" alt="A button titled our games leading to the our games page"><h6 className="h-six">Our Games</h6></a>
            </div>
          </Col>
          {/* Header */}
          <Col>
            <h1 className="h-one">About Us</h1>
            <h2 className="h-two">Why We Created Switch Sales</h2>
          </Col>
          <h6></h6>
        </Row>
        <Row>
          <Col xs={2}>
            {/* English - Tamil Bilingual Button */}
            <div className="topnav">
              <a href="./about-us-2" alt="A button that lets you change the text language from english to tamil."><h6 className="h-six">தமிழ்</h6></a>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor:'white'}}>
              <Row>
                <Col>
                  <div style = {{backgroundColor:'white'}} aria-description="This section goes over the purpose of Switch Sales as a company.">
                    <h3 className="h-three" style = {{paddingTop: '8px'}}>What Is Switch Sales?</h3>
                    <p className = "para">We at Switch Sales strive to make your favourite games afforable for all by offering various sales for these amazing games. 
                    We hope to continue expanding our game library and eventually become the best place to go to when looking to buy all kinds of Nintendo games.</p>
                    {/* Buy Now Button */}
                    <Row>
                      <Col xs={3}></Col>
                      <Col>
                        <div className="text-center">
                          <div className="topnav">
                            <a href="./our-games" style={{padding: '5px'}} alt="A button titled browse our games leading to the our games page"><h6 className="h-six">Browse Our Games</h6></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs={3}></Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <img src={playTogether} style = {{maxWidth:'100%', maxHeight: '100%'}} 
                    alt="4 People playing together on a Nintendo Switch"/>
                    <hr style = {{color: 'white'}}></hr>
                  </div>
                </Col>
              </Row>
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <div style = {{backgroundColor:'white'}}>
              <Row>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <img src={ contactInfo } style = {{maxWidth:'100%', maxHeight: '100%'}} 
                    alt="Contact info icons showing an icon of a phone, mail, and at symbol"/>
                    <hr style = {{color: 'white'}}></hr>
                  </div>
                </Col>
                <Col>
                  <div style = {{backgroundColor:'white'}} aria-description="This section goes over the 2 ways to contact Switch Sales if needed.">
                    <h3 className="h-three" style = {{paddingTop: '8px'}}>How To Contact Us</h3>
                    <ul className="para" alt="2 ways to contact Switch Sales shown through bullet points.">
                        <li>Email: switch_sales@gmail.com</li>
                        <li>Phone Number: +1 (613)-472-4820</li>
                    </ul>
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

export default AboutUs;
