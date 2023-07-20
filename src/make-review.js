import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Typeahead } from 'react-bootstrap-typeahead';
import Autocomplete from "./Autocomplete";
import * as formik from 'formik';
import * as yup from 'yup';
import Sticky from 'react-stickynode';
import Alert from 'react-bootstrap/Alert';
import logo from './logo.svg';
import './make-review.css';


function MakeReview() {

    const [value,onChange]=useState(40);

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })

    const initialValues = {name:"", game:"", comment:""};
      const [formValues, setFormValues]= useState(initialValues);
      const [formErrors, setFormErrors]= useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const [singleSelections, setSingleSelections] = useState([]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value })
        console.log(formValues);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      }

      useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues)
        }
      },[formErrors])
      const validate = (values) => {
        const errors = {}
        errors.nameBool = false;
        errors.gameBool = false;
        errors.commentBool = false;
        if (!values.name) {
          errors.name = "Please enter your name (ex: Edward)";
          errors.nameBool = true;
        }
        if (!values.game) {
          errors.game = "Please enter one of our offered game titles";
          errors.gameBool = true;
        } else if (!(values.game.toUpperCase() == "The Legend of Zelda: TOTK".toUpperCase() || values.game.toUpperCase() == "Super Smash Bros. Ultimate".toUpperCase() || values.game.toUpperCase() == "Pokemon Legends: Arceus".toUpperCase() ||
        values.game.toUpperCase() == "Persona 5 Royal".toUpperCase() || values.game.toUpperCase() == "Super Mario Odyssey".toUpperCase() || values.game.toUpperCase() == "Xenoblade Chronicles 3".toUpperCase() || 
        values.game.toUpperCase() == "Fire Emblem: Three Houses".toUpperCase() || values.game.toUpperCase() == "Skullgirls 2nd Encore".toUpperCase() || values.game.toUpperCase() == "PMD: Rescue Team DX".toUpperCase() ||
        values.game.toUpperCase() == "Nickelodeon All-Star Brawl".toUpperCase() || values.game.toUpperCase() == "Pokken Tournament DX".toUpperCase() || values.game.toUpperCase() == "FINAL FANTASY VII".toUpperCase() || 
        values.game.toUpperCase() == "Super Mario 3D All-Stars".toUpperCase() || values.game.toUpperCase() == "OCTOPATH TRAVELER II".toUpperCase() || values.game.toUpperCase() == "Kirby and the Forgotten Land".toUpperCase())) {
          errors.game = "We don't have that game in our inventory yet. Reviews can only be made for games we currently have available";
          errors.gameBool = true;
        }
        if (!values.comment) {
          errors.comment = "Please share your thoughts on the game you're reviewing";
          errors.commentBool = true;
        }

        if (errors.nameBool == false /*&& errors.gameBool == false*/ && errors.commentBool == false) 
          {window.location.href = "./reviews";}

        return errors;
      };

  const games = ["FINAL FANTASY VII", "Fire Emblem: Three Houses", "Kirby and the Forgotten Land", "Nickelodeon All-Star Brawl", "OCTOPATH TRAVELER II", "Persona 5 Royal", "PMD: Rescue Team DX", "Pokemon Legends: Arceus", "Pokken Tournament DX", 
  "Skullgirls 2nd Encore", "Super Mario 3D All-Stars", "Super Mario Odyssey", "Super Smash Bros. Ultimate", "The Legend of Zelda: TOTK", "Xenoblade Chronicles 3"];

  return (
    <div className="App">
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      
      <Container fluid>
      <form name ="booking-form" onSubmit={handleSubmit} method="post">
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
            {/* Submit A Review Button */}
            {/*<div class="alert alert-success alert-dismissable" role="alert">
                <button className="button1" type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>
                Review Submitted Successfully!
            </div>*/}
            <div className="topnav" style={{ position: 'absolute', bottom: '10px', width: '15%' }}>
                <a href="./reviews" id="submit" onClick={handleSubmit} role="submit" type="submit" value="Submit"><h6 className="h-six">Submit Review</h6></a>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor: '#cbe2f7'}}>
              <Row>
                <Col xs={1}></Col>
                <Col>
                  {/*<div style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1")'}}>
                    <img src={Review1} style = {{maxWidth:'55%', height: '50%'}} alt="Review1"/>
                    </div>*/}
                    <br></br>
                    <Row>
                    <h3 classname="h-three">Your Review</h3>
                    <br></br><br></br>
                    <div class="input-group mb-3 input-group-md">
                        {/* Game Purchased */}
                        <InputGroup hasValidation>
                        <span class="input-group-text" id="game">Game Purchased:</span>
                        {/*<Form.Control classname="input1" type="text" name="game" class="form-control" placeholder="Super Smash Bros. Ultimate" aria-label="Username" aria-describedby="basic-addon1" 
                        value={ formValues.game } onChange={handleChange} required isInvalid={ formErrors.gameBool }></Form.Control>*/}
                        {/*<Autocomplete classname="input1" type="text" name="game" class="form-control" placeholder="Super Smash Bros. Ultimate" aria-label="Username" aria-describedby="basic-addon1" 
                        value={ formValues.game } onChange={handleChange} required isInvalid={ formErrors.gameBool } 
                        suggestions={["Fire Emblem: Three Houses", "Persona 5 Royal", "PMD: Rescue Team DX", "Pokemon Legends: Arceus", "Skullgirls 2nd Encore",
                        "Super Mario Odyssey", "Super Smash Bros. Ultimate", "The Legend of Zelda: TOTK", "Xenoblade Chronicles 3"]}/>*/}
                        <Form.Group>
                          <Typeahead
                            id="basic-typeahead-single"
                            labelKey="name"
                            onChange={setSingleSelections}
                            options={games}
                            placeholder="Super Smash Bros. Ultimate"
                            selected={singleSelections}
                            classname="input1" type="text" name="game" class="form-control" aria-label="Username" aria-describedby="basic-addon1" 
                        value={ formValues.game } required isInvalid={false} style={{width: '20.95vw'}}
                          />
                        </Form.Group>
                        <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                        { formValues.game }
                        </Form.Control.Feedback>
                        </InputGroup>
                    </div> 
                    </Row>
                    <br></br>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Your Name */}
                            <InputGroup hasValidation>
                            <span class="input-group-text" id="name">Your Name:</span>
                            <Form.Control classname="input1" type="text" name="name" class="form-control" placeholder="Edward" aria-label="Username" aria-describedby="basic-addon1" 
                            value={ formValues.name } onChange={handleChange} required isInvalid={ formErrors.nameBool }></Form.Control>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                            { formErrors.name }
                            </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                    <div class="input-group mb-3 input-group-md">
                    <span class="input-group-text" id="name" style={{ width: "100%" }}>
                        <Col>
                            {/* Game Rating */}
                            <span class="input-group-text" id="name" style={{ borderStyle: "hidden" }}>Game Rating:</span>
                        </Col>
                        <Col>
                            {/* Game Rating */}
                            <span class="input-group-text" id="name" style={{ borderStyle: "hidden" }}>
                                <div className="slider-parent">
                                    <input type="range" min="10" max="50" value={value}
                                        onChange={({ target: { value: radius } }) => {
                                                    onChange(radius);
                                                }}
                                    />
                                    <div className="buble"> 
                                    {value/10}
                                    </div>
                                </div>
                            </span>
                        </Col>
                        </span>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <br></br>
                    {/* Your Comments */}
                    <p type="invalid" style = {{fontWeight: 'bold', color: '#D93545', fontSize: '15px'}}>
                    { formErrors.comment }
                    </p>
                    <span class="input-group-text" id="name" style={{ borderStyle: "hidden" }}>Your Comments: </span>
                    {/*<input classname="input1" type="text" name="name" class="form-control" placeholder="I really like this game because..." aria-label="Username" aria-describedby="basic-addon1" required
                    style={{ height: "140%" }}></input>*/}
                    <textarea classname="input1" style={{ height: "70%", width: "100%" }} placeholder="I really like this game because..."
                    name="comment" class="form-control" aria-label="Username" aria-describedby="basic-addon1" type="text"
                    value={ formValues.comment } onChange={handleChange} required isInvalid={ formErrors.commentBool }></textarea>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row style={{ textAlign: "right", color: '#cbe2f7' }}><br></br></Row>
              </div>
          </Col>
        </Row>
      </form>
      </Container>

    </div>
  );
}

export default MakeReview;
