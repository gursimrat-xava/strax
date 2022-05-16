import Head from 'next/head';
import Image from 'next/image';
import headerStyle from '../../public/css/header.module.css';
import { Container, Nav, Navbar, NavDropdown,Button, fluid } from 'react-bootstrap';


export default function Adminheader() {
  return (
    //<div className={`d-flex justify-content-center ${headerStyle.container}`}></div>  // bootstrap and custom class
    //<div className={`${headerStyle.container} ${headerStyle.table}`} // multiple classes
    
    <div className="containerCustom">
      Admin panel header
    </div>
  )
}
