import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sticky from 'react-stickynode';
import logo from './logo.svg';
import playTogether from './images/PlayTogether.jpg';
import contactInfo from './images/contactInfo.png';
import './about-us.css';

function AboutUs2() {
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
          {/* Navbar */}
          <Col xs={2}>
            <div className="topnav">
              <a className="active" href="./"><h6 className="h-six"></h6></a>
              <a className="./book-button" href="./buy-one"><h6 className="h-six">இப்போது வாங்கவும்</h6></a>
              <a href="./about-us"><h6 className="h-six">எங்களை பற்றி</h6></a>
              <a href="./reviews"><h6 className="h-six">விமர்சனங்கள்</h6></a>
              <a href="./our-games"><h6 className="h-six">எங்கள் விளையாட்டுகள்</h6></a>
            </div>
          </Col>
          {/* Header */}
          <Col>
            <h1 className="h-one">எங்களை பற்றி</h1>
            <h2 className="h-two">நாங்கள் ஏன் ஸ்விட்ச் விற்பனையை உருவாக்கினோம்</h2>
          </Col>
          <h6></h6>
        </Row>
        <Row>
          <Col xs={2}>
            {/* English - Tamil Bilingual Button */}
            <div className="topnav">
              <a href="./about-us"><h6 className="h-six">English</h6></a>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor:'white'}}>
              <Row>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <h3 className="h-three" style = {{paddingTop: '8px'}}>ஸ்விட்ச் விற்பனை என்றால் என்ன?</h3>
                    <p className = "para">எங்கள் கேம் லைப்ரரியைத் தொடர்ந்து விரிவுபடுத்துவோம், இறுதியில் எல்லா வகையான நிண்டெண்டோ கேம்களையும் வாங்க விரும்பும் போது சிறந்த இடமாக மாறும் என்று நம்புகிறோம்.</p>
                    {/* Buy Now Button */}
                    <Row>
                      <Col xs={2}></Col>
                      <Col>
                        <div className="text-center">
                          <div className="topnav">
                            <a href="./our-games" style={{padding: '5px'}}><h6 className="h-six">எங்கள் கேம்களை உலாவுக</h6></a>
                          </div>
                        </div>
                      </Col>
                      <Col xs={2}></Col>
                    </Row>
                  </div>
                </Col>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <img src={playTogether} style = {{maxWidth:'100%', maxHeight: '100%'}} alt="playTogether"/>
                    <p style = {{color: 'white'}}>.</p>
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
                    <img src={ contactInfo } style = {{maxWidth:'100%', maxHeight: '100%'}} alt="contactInfo"/>
                    <hr style = {{color: 'white'}}></hr>
                  </div>
                </Col>
                <Col>
                  <div style = {{backgroundColor:'white'}}>
                    <h3 className="h-three" style = {{paddingTop: '8px'}}>எங்களை எப்படி தொடர்பு கொள்வது</h3>
                    <ul className="para">
                        <li>மின்னஞ்சல்: switch_sales@gmail.com</li>
                        <li>தொலைபேசி எண்: +1 (613)-472-4820</li>
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

export default AboutUs2;
