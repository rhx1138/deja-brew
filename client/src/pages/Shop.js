import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Shop = () => {
    return (
        <Container className="home-section" id="home">
          <Row>
            <Col md={3} classname="card-section">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="blank" />
                <Card.Body>
                  <Card.Title>Coffee 1
                    {/* change this using component, do coffee.name and use coffee.length */}
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} classname="card-section">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="blank" />
                <Card.Body>
                  <Card.Title>Pro Plan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} classname="card-section">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="blank" />
                <Card.Body>
                  <Card.Title>Pro Plan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} classname="card-section">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="blank" />
                <Card.Body>
                  <Card.Title>Pro Plan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
};

export default Shop;