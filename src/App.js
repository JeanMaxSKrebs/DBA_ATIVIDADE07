import './App.css';
// import { useState, useEffect } from 'react'
import FormSalao from './components/Saloes/FormSalao';
import MostraSaloes from './components/Saloes/MostraSaloes';
import LoginUsuario from './components/Login';
import TopNav from './components/Estrutura/TopNav';
import SideNav from './components/Estrutura/SideNav';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

  // Componentes das telas
  export const Home = () =>
    <>
      <h1>Página inicial</h1>
        <div className="saloes-header">
          <h1>Salões</h1>
        </div>
      <MostraSaloes /> 
    </>

  export const Sobre = () => <>
        <h1>Sobre</h1>
  </>
  export const Contato = () => <h1>Contato</h1>
  export const Cadastro = () => <h1>Cadastro</h1>
  export const Login = ()=>
  <>
    <LoginUsuario /> 
  </>


function App() {
  return (
    <>
      <div className="App">
        <Router>
          {/* <FormSalao /> */}


        {/* </div> */}
          <div>
            {/* Conteúdo compartilhado em todas as rotas */}
            <SideNav />
            <header>
              {/* Componentes do cabeçalho */}
              {/* <TopNav /> */}
            </header>

            {/* Definição das rotas */}
            <Routes>            
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>

            {/* Conteúdo compartilhado em todas as rotas */}
            <footer>
              {/* Componentes do rodapé */}
            </footer>
          </div>
        </Router>
      </div>
    </>
  );
}


export default App;