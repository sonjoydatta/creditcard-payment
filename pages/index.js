import { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import LayoutWrapper from '../components/LayoutWrapper';
import InputField from '../components/InputField';
import CardIconsList from '../components/CardIconsList';
import { handleNumbersOnly, getCardType } from '../utils';

const Homepage = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
    expiry: '',
    security: '',
    errors: {}
  });

  // Input field onChange handler
  const handleChange = ( e ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  // Input card expiry onKeyUp handler
  const handleCardExpiry = ( e ) => {
    let expiryDate = e.target.value;
  
    if (e.keyCode !== 8) {
      if (expiryDate > 1 && expiryDate.length === 1) {
        expiryDate = '0' + expiryDate + '/';
      } else if (expiryDate.length === 2) {
        expiryDate = expiryDate + '/';
      }
      
      setContact({ ...contact, expiry: expiryDate });
    } else {
      setContact({ ...contact, expiry: '' });
    }
  }

  // Input fields validation handler
  const handleValidation = () => {
    const { name, number, expiry, security, errors } = contact;
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors['name'] = 'Cardholder name is required';
    } else {
      errors['name'] = '';
    }

    if (!number) {
      formIsValid = false;
      errors['number'] = 'Card number is required';
    } else {
      errors['number'] = '';
    }

    if (!expiry) {
      formIsValid = false;
      errors['expiry'] = 'Expiry is required';
    } else {
      errors['expiry'] = '';
    }

    if (!security) {
      formIsValid = false;
      errors['security'] = 'CVV is required';
    } else {
      errors['security'] = '';
    }

    setContact({ ...contact, errors: errors });
    return formIsValid;
  } 

  // Form onSubmit handler
  const handleSubmit = ( e ) => {
    e.preventDefault();
    const { name, number, expiry, security } = contact;

    if (handleValidation()) {
      setContact({ ...contact, errors: {} });
      console.log({
        name,
        number,
        expiry,
        security
      });
    }
  }

  const { name, number, expiry, security, errors } = contact;

  return (
    <LayoutWrapper>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="CardPaymentForm">
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="CardPaymentForm-Title">Pay with Credit Card</h3>
                <CardIconsList type={getCardType(number)} />
                <Form onSubmit={handleSubmit}>
                  <InputField
                    unique="cardholderName"
                    label="Cardholder name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <InputField
                    unique="cardNumber"
                    label="Card number"
                    maxLength="16"
                    name="number"
                    value={number}
                    onKeyDown={handleNumbersOnly}
                    onChange={handleChange}
                    error={errors.number}
                  />
                  <Row>
                    <Col>
                      <InputField
                        unique="cardExpiry"
                        label="MM/YY"
                        maxLength="5"
                        name="expiry"
                        value={expiry}
                        onKeyDown={handleNumbersOnly}
                        onKeyUp={handleCardExpiry}
                        onChange={handleChange}
                        error={errors.expiry}
                      />
                    </Col>
                    <Col>
                      <InputField
                        unique="cardCvv"
                        label="CVV"
                        maxLength="4"
                        name="security"
                        value={security}
                        onKeyDown={handleNumbersOnly}
                        onChange={handleChange}
                        error={errors.security}
                      />
                    </Col>
                  </Row>
                  <Button
                    block
                    variant="primary"
                    className="text-uppercase mb-3"
                    type="submit"
                  >Pay Now</Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}

export default Homepage;