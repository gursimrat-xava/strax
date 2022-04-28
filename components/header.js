import Head from 'next/head';
import Image from 'next/image';
import headerStyle from '../public/css/header.module.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function Header() {
  return (
    //<div className={`d-flex justify-content-center ${headerStyle.container}`}></div>  // bootstrap and custom class
    //<div className={`${headerStyle.container} ${headerStyle.table}`} // multiple classes
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Image src="/images/logo.png" 
      height={45} // Desired size with correct aspect ratio
      width={150} // Desired size with correct aspect ratio
      alt="Your Name"
      />

        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
