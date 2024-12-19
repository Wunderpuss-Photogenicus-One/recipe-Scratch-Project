// const Hero = () => {
//   return (
//     <div>
//       <h1>Hero Section</h1>
//     </div>
//   );
// };
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100 justify-content-center">
        <Col md={6} sm={12}>
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title as="h1" className="mb-4">Let's Start Cooking!</Card.Title>
              <Card.Text>
                Give us the ingredients & we'll figure out the rest! 
              </Card.Text>
              <Button variant="primary" size="lg" href="Create your own recipe">
                Explore
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
// export default Hero