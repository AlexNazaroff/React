import React, {Component} from "react";
import  {Navbar, Nav, FormControl, Container, Form, Button} from "react-bootstrap";
import logo from "./logo192.png"

export default class Header extends Component {
	render(){
		return(
			
			<Navbar collapseOnSelect expand='md' bg='dark' variant ='dark'>
				<Container>
			        <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height='30'
                            width='30'
                            className='d-inline-blick align-top'
                            alt='Logo'
                        />
			        </Navbar.Brand>
			        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
			        <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.link href='/'>Home </Nav.link>
                            <Nav.link href='/about'>About us </Nav.link>
                            <Nav.link href='/contacts'>Contacts   </Nav.link>
                            <Nav.link href='/blog'>Blog </Nav.link>
                        </Nav>
                        <Form inline>
                            <FormControl
                            type='text'
                            placeholder='Search'
                            className='mr-sm-2'
                            />
                            <Button variant='outline-info'> Search</Button>
                        </Form>
			        </Navbar.Collapse>

				</Container>
			</Navbar>
		)
	}
}