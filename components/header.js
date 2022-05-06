import Head from 'next/head';
import Image from 'next/image';
import headerStyle from '../public/css/header.module.css';
import { Container, Nav, Navbar, NavDropdown,Button, fluid } from 'react-bootstrap';


export default function Header() {
  return (
    //<div className={`d-flex justify-content-center ${headerStyle.container}`}></div>  // bootstrap and custom class
    //<div className={`${headerStyle.container} ${headerStyle.table}`} // multiple classes
    
    <div className="containerCustom">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      

      

      <Navbar fixed="top" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home"><Image src="/images/logo-strax-header.png" height={35} // Desired size with correct aspect ratio
      width={150} // Desired size with correct aspect ratio
      alt="Your Name"
      /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
            <NavDropdown title="Mobile Accessories" id="basic-nav-dropdown"className={`${headerStyle.NavLinks}`}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#" className={`${headerStyle.NavLinks}`}>Health & Wellness</Nav.Link>
                <NavDropdown title="Distribution" id="basic-nav-dropdown" className={`${headerStyle.NavLinks}`}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"className={`${headerStyle.NavLinks}`}>Separated link</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="About" id="basic-nav-dropdown"className={`${headerStyle.NavLinks}`}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#link"className={`${headerStyle.NavLinks}`}>News</Nav.Link>
            </Nav>
            </Navbar.Collapse>

            <button type="submit" className={`${headerStyle.searchButton}`}><i class="fa fa-search"></i></button>

            <button type="submit" className={`btn btn-light rounded-pill   ${headerStyle.ReachButton}`}>Reach out</button>

        </Container>
        </Navbar>
    </div>
  )
}
