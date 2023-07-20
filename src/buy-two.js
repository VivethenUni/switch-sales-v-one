import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sticky from 'react-stickynode';
import MultiStep from 'react-multistep';
import Stepper from 'react-stepper-horizontal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import './box.css';
import logo from './logo.svg';
import nintendoBigThree from './images/nintendoBigThree.jpg';
import './make-review.css';

function BuyTwo() {

    const steps = [
        { title: 'Game Choice' },
        { title: 'Your Info' },
        { title: 'Confirmation' }
    ];
  const activeStep = 1;

  {/*function validateForm() {
        let name = document.forms["booking-form"]["name"].value;
        let email = document.forms["booking-form"]["email"].value;
        let phone = document.forms["booking-form"]["phoneNumber"].value;
        let card = document.forms["booking-form"]["cardNumber"].value;
        let address = document.forms["booking-form"]["address"].value;
        let city = document.forms["booking-form"]["city"].value;
        let province = document.forms["booking-form"]["province"].value;
        let postal = document.forms["booking-form"]["postalCode"].value;
        let cvv = document.forms["booking-form"]["cvv"].value;

        if (name == "") {
          alert("Your name must be filled out");
          return false;
        }
        var emailPat = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (!emailPat.test(email)) {
          alert('Please enter a valid email address. Ex: edward.harp@gmail.com');
          return false;
        }
        if (phone == "") {
          alert("Your name must be filled out");
          return false;
        }
        if (card == "") {
          alert("Your name must be filled out");
          return false;
        }
        if (address == "") {
          alert("Your name must be filled out");
          return false;
        }
        if (city == "") {
          alert("Your name must be filled out");
          return false;
        }
        if (province == "") {
          alert("Your name must be filled out");
          return false;
        }
        if (postal == "") {
          alert("Your name must be filled out");
          return false;
        }
        if (cvv == "") {
          alert("Your name must be filled out");
          return false;
        }
      }*/}

      const initialValues = {name:"", email:"", phoneNumber:"", address:"", city:"", province:"", postalCode:"", cardNumber:"", cvv:""};
      const [formValues, setFormValues]= useState(initialValues);
      const [formErrors, setFormErrors]= useState({});
      const [isSubmit, setIsSubmit] = useState(false);

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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const numberRegex = /^[0-9]+$/;
        const addressRegex = /^[0-9]+\s[a-zA-Z]+\s[a-zA-Z]+$/i;
        const cityRegex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
        const postalRegex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$/;
        errors.nameBool = false;
        errors.emailBool = false;
        errors.phoneNumberBool = false;
        errors.addressBool = false;
        errors.cityBool = false;
        errors.provinceBool = false;
        errors.postalCodeBool = false;
        errors.cardNumberBool = false;
        errors.cvvBool = false;
        if (!values.name) {
          errors.name = "Please enter your name (ex: Edward)";
          errors.nameBool = true;
        }
        if (!values.email) {
          errors.email = "Please enter your email (ex: edward.harp@gmail.com)";
          errors.emailBool = true;
        } else if (!emailRegex.test(values.email)) {
          errors.email = "Email format must include '@' and '.' (ex: xxx@gmail.com)";
          errors.emailBool = true;
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Please enter your phone number (ex: 613-541-8690)";
          errors.phoneNumberBool = true;
        } else if (!numberRegex.test(values.phoneNumber)) {
          errors.phoneNumber = "The phone number can only contain digits 0 to 9";
          errors.phoneNumberBool = true;
        } else if (values.phoneNumber.length != 10) {
          errors.phoneNumber = "The phone number must be exactly 10 digits long";
          errors.phoneNumberBool = true;
        }
        if (!values.address) {
          errors.address = "Please enter your mailing address (ex: 75 Laurier Ave)";
          errors.addressBool = true;
        } else if (!addressRegex.test(values.address)) {
          errors.address = "Address must follow the format: 'number name type'";
          errors.addressBool = true;
        }
        if (!values.city) {
          errors.city = "Please enter your city (ex: Ottawa)";
          errors.cityBool = true;
        } else if (!cityRegex.test(values.city)) {
          errors.city = "Please enter a valid city name: (ex: Ottawa)";
          errors.cityBool = true;
        }
        if (!values.province) {
          errors.province = "Please enter your province code (ex: ON)";
          errors.provinceBool = true;
        } else if (!(values.province.toUpperCase() == "AB" || values.province.toUpperCase() == "BC" || values.province.toUpperCase() == "MB" ||
        values.province.toUpperCase() == "NB" || values.province.toUpperCase() == "NL" || values.province.toUpperCase() == "NT" || values.province.toUpperCase() == "NS" || 
        values.province.toUpperCase() == "NU" || values.province.toUpperCase() == "ON" || values.province.toUpperCase() == "PE" || values.province.toUpperCase() == "QC" || 
        values.province.toUpperCase() == "SK" || values.province.toUpperCase() == "YT")) {
          errors.province = "Please enter a valid two character province code (ex: ON)";
          errors.provinceBool = true;
        }
        if (!values.postalCode) {
          errors.postalCode = "Please enter your postal code (ex: K2K2M5)";
          errors.postalCodeBool = true;
        } else if (!postalRegex.test(values.postalCode.toUpperCase())) {
          errors.postalCode = "Please enter a valid canadian postal code: (ex: K2K2M5)";
          errors.postalCodeBool = true;
        }
        if (!values.cardNumber) {
          errors.cardNumber = "Please enter your card number (ex: 1234567890123456)";
          errors.cardNumberBool = true;
        } else if (!numberRegex.test(values.cardNumber)) {
          errors.cardNumber = "The card number can only contain digits 0 to 9";
          errors.cardNumberBool = true;
        } else if (values.cardNumber.length != 16) {
          errors.cardNumber = "The card number must be exactly 16 digits long";
          errors.cardNumberBool = true;
        }
        if (!values.cvv) {
          errors.cvv = "Please enter your card cvv (ex: 240)";
          errors.cvvBool = true;
        } else if (!numberRegex.test(values.cvv)) {
          errors.cvv = "The cvv can only contain digits 0 to 9";
          errors.cvvBool = true;
        } else if (values.cvv.length != 3) {
          errors.cvv = "The cvv must be exactly 3 digits long";
          errors.cvvBool = true;
        }

        if (errors.nameBool == false && errors.emailBool == false && errors.phoneNumberBool == false && errors.addressBool == false && errors.cityBool == false &&
          errors.provinceBool == false && errors.postalCodeBool == false && errors.cardNumberBool == false && errors.cvvBool == false) 
          {window.location.href = "./buy-three";}

        return errors;
      };

  return (
    <div className="App">
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      
      <Container fluid>
        {/*{ (Object.keys(formErrors).length === 0 && isSubmit) ? (<h6 className="h-six">Submit Info</h6>) : (<pre>{JSON.stringify(formValues,undefined, 2)}</pre>)}*/}
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
            <h1 className="h-two">Please Enter The Required Information</h1>
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
                <a href="./buy-one"><h6 className="h-six">Change Game</h6></a>
                <form>
                  <a href="./buy-three" id="submit" onClick={handleSubmit} role="submit" type="submit" value="Submit"><h6 className="h-six">Submit Info</h6></a>
                </form>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor: '#cbe2f7'}}>
              <Row>
                <Col xs={1}></Col>
                <Col>
                    <br></br>
                    <Row>
                    <h3 classname="h-three">Your Info</h3>
                    <br></br><br></br>
                    <div class="input-group mb-3 input-group-md">
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
                    </div> 
                    </Row>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Your Email */}
                            <InputGroup hasValidation>
                            <span class="input-group-text" id="name">Your Email:</span>
                            <Form.Control classname="input1" type="text" name="email" class="form-control" placeholder="edward.harp@gmail.com" aria-label="Username" aria-describedby="basic-addon1" 
                            value={ formValues.email } onChange={handleChange} required isInvalid={ formErrors.emailBool }></Form.Control>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                              { formErrors.email }
                            </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Phone # */}
                            <InputGroup hasValidation>
                            <span class="input-group-text" id="name">Phone Number:</span>
                            <Form.Control classname="input1" type="text" name="phoneNumber" class="form-control" placeholder="6135418690" aria-label="Username" aria-describedby="basic-addon1" 
                            value={ formValues.phoneNumber } onChange={handleChange} required isInvalid={ formErrors.phoneNumberBool }></Form.Control>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                            { formErrors.phoneNumber }
                            </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <br></br>
                    <Row>
                    <h3 classname="h-three">Shipping Location</h3>
                    <br></br><br></br>
                    <div class="input-group mb-3 input-group-md">
                        <div class="input-group mb-3 input-group-md">
                            {/* Address */}
                            <InputGroup hasValidation>
                            <span class="input-group-text" id="name">Address:</span>
                            <Form.Control classname="input1" type="text" name="address" class="form-control" placeholder="75 Laurier Ave" aria-label="Username" aria-describedby="basic-addon1"
                            value={ formValues.address } onChange={handleChange} required isInvalid={ formErrors.addressBool }></Form.Control>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                            { formErrors.address }
                            </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </div> 
                    </Row>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* City/Province */}
                            <InputGroup hasValidation>
                            <span class="input-group-text" id="name">City / Province:</span>
                            <Form.Control classname="input1" type="text" name="city" class="form-control" placeholder="Ottawa" aria-label="Username" aria-describedby="basic-addon1"
                            value={ formValues.city } onChange={handleChange} required isInvalid={ formErrors.cityBool }></Form.Control>
                            <div style={{backgroundColor: 'lightgrey', padding: "5px"}}>/</div>
                            <Form.Control classname="input1" type="text" name="province" class="form-control" placeholder="ON" aria-label="Username" aria-describedby="basic-addon1"
                            value={ formValues.province } onChange={handleChange} required isInvalid={ formErrors.provinceBool }></Form.Control>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                            { formErrors.city }
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                            { formErrors.province }
                            </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Postal Code */}
                            <InputGroup hasValidation>
                            <span class="input-group-text" id="name">Postal Code:</span>
                            <Form.Control classname="input1" type="text" name="postalCode" class="form-control" placeholder="K2K2M5" aria-label="Username" aria-describedby="basic-addon1"
                            value={ formValues.postalCode } onChange={handleChange} required isInvalid={ formErrors.postalCodeBool }></Form.Control>
                            <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                              { formErrors.postalCode }
                            </Form.Control.Feedback>
                            </InputGroup>
                        </div>
                    </Row>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row style={{ textAlign: "center", color: '#cbe2f7' }}><hr></hr>
                <Col xs={1}></Col>
                <Col>
                  <div class="input-group mb-3 input-group-md">
                      {/* Card Number */}
                      <InputGroup hasValidation>
                      <span class="input-group-text" id="name">Card Number:</span>
                      <Form.Control classname="input1" type="text" name="cardNumber" class="form-control" placeholder="1234567890123456" aria-label="Username" aria-describedby="basic-addon1"
                      value={ formValues.cardNumber } onChange={handleChange} required isInvalid={ formErrors.cardNumberBool }></Form.Control>
                      <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                      { formErrors.cardNumber }
                      </Form.Control.Feedback>
                      </InputGroup>
                  </div>
                </Col>
                <Col>
                  <div class="input-group mb-3 input-group-md">
                      {/* CVV */}
                      <InputGroup hasValidation>
                      <span class="input-group-text" id="name">CVV:</span>
                      <Form.Control classname="input1" type="text" name="cvv" class="form-control" placeholder="240" aria-label="Username" aria-describedby="basic-addon1"
                      value={ formValues.cvv } onChange={handleChange} required isInvalid={ formErrors.cvvBool }></Form.Control>
                      <Form.Control.Feedback type="invalid" style = {{fontWeight: 'bold' }}>
                      { formErrors.cvv }
                      </Form.Control.Feedback>
                      </InputGroup>
                  </div>
                </Col>
                <Col xs={1}></Col>
              </Row>
              </div>
          </Col>
        </Row>
      </form>
      </Container>

    </div>
  );
}

export default BuyTwo;
