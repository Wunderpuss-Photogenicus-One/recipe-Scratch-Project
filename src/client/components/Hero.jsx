// const Hero = () => {
//   return (
//     <div>
//       <h1>Hero Section</h1>
//     </div>
//   );
// };

import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from "react-router";



export default function Hero () {
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




// import React from 'react';
// import {Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Hero: React.FC = () => {
//   return (
//     <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
//       <Row className="w-100 justify-content-center">
//         <Col md={6} sm={12}>
//           <Card className="text-center shadow-lg">
//             <Card.Body>
//               <Card.Title as="h1" className="mb-4">Welcome to Our Website!</Card.Title>
//               <Card.Text>
//                 We're so glad you're here. Explore our features and have a great time!
//               </Card.Text>
//               {/* Using Link component instead of Button */}
//               <Link to="/" className="btn btn-primary btn-lg" title="Home Page">
//                 Home
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Hero


// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Hero: React.FC = () => {
//   return (
//     <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
//       <Row className="w-100 justify-content-center">
//         <Col md={6} sm={12}>
//           <Card className="text-center shadow-lg">
//             <Card.Body>
//               <Card.Title as="h1" className="mb-4">
//                 Welcome to Our Website!
//               </Card.Title>
//               <Card.Text>
//                 We're so glad you're here. Explore our features and have a great time!
//               </Card.Text>
//               {/* Link styled as a Bootstrap Button */}
//               <Link to="/" className="btn btn-primary btn-lg" title="Home Page">
//                 Home
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Hero;