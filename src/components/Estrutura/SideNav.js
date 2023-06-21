import React, { useState, createContext, useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseFlag, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import perfilImg from '../../assets/img/perfil.jpg';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
  
import {Home, Festas, Saloes, CadastroSalao, CadastroFesta} from '../../App';


const SideNav = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(`Search Text: ${searchText}`);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" id="sideNav">

                <Navbar.Brand href="/home" element={<Home />}>
                    <img id="perfil" className="rounded-circle img-fluid img-profile mx-auto mb-lg-5"
                        src={perfilImg} alt="Foto Perfil" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarDiv" />
                <Navbar.Collapse id="navbarDiv">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" id="home" element={<Home />}>Home</Nav.Link>
                        <Nav.Link href="/saloes" id="saloes" element={<Saloes />}>Saloes</Nav.Link>
                        <Nav.Link href="/festas" id="festas" element={<Festas />}>Festas</Nav.Link>
                        <Nav.Link href="/cadastro-salao" id="cadastro-salao"element={<CadastroSalao />}>Cadastro Salao</Nav.Link>
                        <Nav.Link href="/cadastro-festa" id="cadastro-festa"element={<CadastroFesta />}>Cadastro Festa</Nav.Link>
                        <Nav.Link href="https://jeanmaxskrebs.github.io/#page-top">Desenvolvedor</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </>
    );
};

export default SideNav;
