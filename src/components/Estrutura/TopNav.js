import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseFlag, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const TopNav = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(`Search Text: ${searchText}`);
    };

    return (
        <Navbar expand="lg" fixed="top" id='topNav'>
            <Navbar.Toggle aria-controls="navbarDiv" />
            <Navbar.Collapse id="navbarDiv">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <FontAwesomeIcon icon={faHouseFlag} size="2x" color="#444444" />
                    </Nav.Item>
                    <Nav.Link href="/login-salao" id="loginS">Login Salão</Nav.Link>
                    <Nav.Link href="/cadastro-cliente" id="cadastro">Cadastro</Nav.Link>
                    <Nav.Link href="/sobre" id="sobre">Sobre</Nav.Link>
                    <Nav.Link href="/contato" id="contato">Contato</Nav.Link>
                    <Nav.Link href="https://jeanmaxskrebs.github.io/#page-top">Desenvolvedor</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="text" placeholder="Pesquisa" className="no-margin" />
                    <Button variant="dark" className="w-auto flex-shrink-0" style={{ backgroundColor: '#444444', marginLeft: '10px' }}>                      
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-beat" style={{ color: '#FFF34D' }} />
                    </Button>
                </Form>


            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;
