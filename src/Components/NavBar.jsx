import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  const [search, setsearch] = useState(573201);
  return (
    <div className="NavBar">
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Public Free API's</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link >
              Link
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setsearch(e.target.value)}}
            />
            <Link to={`/pinapi${search}`}><Button variant="outline-success"  >Search</Button></Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Link id="pincodeapi" to={`/pinapi${search}`} > <p>PinCode API (Click To Try ) </p> </Link>
    </div>
  );
}

export default NavBar;