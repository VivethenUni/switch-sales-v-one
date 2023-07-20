import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Sticky from 'react-stickynode';
import logo from './logo.svg';
import Review1 from './images/Review1.jpg';
import Review2 from './images/Review2.jpg';
import Review3 from './images/Review3.jpg';
import Review4 from './images/Review4.jpg';
import Review5 from './images/Review5.jpg';
import './reviews.css';

function Reviews() {
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
            <h1 className="h-one">Reviews</h1>
            <h2 className="h-two">What Do Our Customers Think About Us?</h2>
          </Col>
          <h6></h6>
        </Row>
        <Row>
          <Col xs={2}>
            {/* Make A Review Button */}
            <div className="topnav" style={{ position: 'absolute', bottom: '10px', width: '15%' }}>
                <a href="./make-review"><h6 className="h-six">Create A Review</h6></a>
            </div>
          </Col>
          <Col>
            <div>
              <Row>
                <Col>
                  {/*<div style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1")'}}>
                    <img src={Review1} style = {{maxWidth:'55%', height: '50%'}} alt="Review1"/>
                    </div>*/}
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item interval={20000} style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5")',
                        backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                            <img style = {{maxWidth:'55%', height: '50%', margin: 'auto'}}
                            className="d-block w-100"
                            src={Review1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={20000} style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/en_US/games/switch/f/fire-emblem-three-houses-switch/screenshot-gallery/screenshot01")',
                        backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                            <img style = {{maxWidth:'55%', height: '50%', margin: 'auto'}}
                            className="d-block w-100"
                            src={Review2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={20000} style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000063714/05b3d8e8c74beaa43a7714c275a7ad06018ed069bd6bd3f923442b9ac16fdc49")',
                        backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                            <img style = {{maxWidth:'55%', height: '50%', margin: 'auto'}}
                            className="d-block w-100"
                            src={Review3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={20000} style={{backgroundImage: 'url("https://cdn.vox-cdn.com/thumbor/bVRoO3rlCmMKoASiFWKJi-EQGnI=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22789967/Pokemon_Legends__Arceus_Artwork_3.jpg")',
                        backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                            <img style = {{maxWidth:'55%', height: '50%', margin: 'auto'}}
                            className="d-block w-100"
                            src={Review4}
                            alt="Forth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={20000} style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000053336/8cbf496b29efdd59fe0f7c915dada09df605acb2b3e8481ae419250b9968a429")',
                        backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                            <img style = {{maxWidth:'55%', height: '50%', margin: 'auto'}}
                            className="d-block w-100"
                            src={Review5}
                            alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
              </Row>
              </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Reviews;
