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
    security: ''
  });

  const handleChange = ( e ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

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

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log(contact);
  }

  return (
    <LayoutWrapper>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="CardPaymentForm">
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="CardPaymentForm-Title">Pay with Credit Card</h3>
                <CardIconsList type={getCardType(contact.number)} />
                <Form onSubmit={handleSubmit}>
                  <InputField
                    unique="cardholderName"
                    label="Cardholder name"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                  />
                  <InputField
                    unique="cardNumber"
                    label="Card number"
                    maxLength="16"
                    name="number"
                    value={contact.number}
                    onKeyDown={handleNumbersOnly}
                    onChange={handleChange}
                  />
                  <Row>
                    <Col>
                      <InputField
                        unique="cardExpiry"
                        label="MM/YY"
                        maxLength="5"
                        name="expiry"
                        value={contact.expiry}
                        onKeyDown={handleNumbersOnly}
                        onKeyUp={handleCardExpiry}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col>
                      <InputField
                        unique="cardCvv"
                        label="CVV"
                        maxLength="4"
                        name="security"
                        value={contact.security}
                        onKeyDown={handleNumbersOnly}
                        onChange={handleChange}
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