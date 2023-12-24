import React from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink } from 'react-router-hash-link';
import { Container, Col, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <>

     <Container>
       <Nav className="nav">
       <HashLink to="/" className="logo">Linked in</HashLink>
       <Button variant="light"  className="joinnow" >join now</Button>{' '}  
       <Button variant="primary" className="signin">sign in</Button>{' '}  
       </Nav>
     </Container>


<section>
<Container>
  <Row>
  <Col lg={6} md={6} sm={12}>
  <div className="div1">
  <h1 className="h1" >Welcome to your professional community</h1>
<Form className="form">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="or">Email or phone</Form.Label>
      <Form.Control  className="email" type="email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="Password1"  >Password</Form.Label>
      <Form.Control  className="Password2"   type="password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <HashLink to="/" className="Forgot"> Forgot password?</HashLink>
    </Form.Group>
    <Button variant="primary" type="sign in" className="signin2" >
    sign in
    </Button>
<hr className="hr1" />

    <p className="p1"  >By clicking Continue, you agree to LinkedIn’s
    
    <HashLink to="/" className="hashLink">User Agreement,</HashLink>
    <HashLink to="/" className="hashLink"> Privacy Policy,</HashLink>
    and
    <HashLink to="/" className="hashLink"> Cookie Policy.</HashLink>
    </p>
    <Button variant="primary"   className="Google" >
    Continue with Google
    </Button>

    <Button variant="primary"  className="Linkedin" >
    New to Linkedin? join now
    </Button>
  </Form>
  </div>
  </Col>
  <Col lg={6} md={6} sm={12}>
  <div>
    <img src="linked-learning.jpg" className="img"/>
  </div>
  </Col>
  </Row>
</Container>












</section>








  
    </>
  )
}

export default Home
