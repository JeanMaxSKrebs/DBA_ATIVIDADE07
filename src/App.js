import './App.css';
// import { useState, useEffect } from 'react'
import FormSalao from './components/Saloes/FormSalao';
import FormFesta from './components/Festas/FormFesta';
import MostraSaloes from './components/Saloes/MostraSaloes';
import MostraFestas from './components/Festas/MostraFestas';
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
  export const Saloes = () =>
    <>
      <div className="saloes-header">
        <h1>Salões</h1>
      </div>
      <MostraSaloes />
    </>
  export const Festas = () =>
    <>
      <div className="saloes-header">
        <h1>Festas</h1>
      </div>
      <MostraFestas /> 
    </>
  export const CadastroSalao = () =>
  <>
      <div className="saloes-header">
        <h1>Cadastre Salão</h1>
      </div>
    <FormSalao /> 
  </>
  export const CadastroFesta = () =>
    <>
        <div className="saloes-header">
          <h1>Cadastre Festas</h1>
        </div>
      <FormFesta /> 
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
              <Route path="/" element={<Home />} />        
              <Route path="/home" element={<Home />} />
              <Route path="/saloes" element={<Saloes />} />
              <Route path="/festas" element={<Festas />} />
              <Route path="/cadastro-festa" element={<CadastroFesta />} />
              <Route path="/cadastro-salao" element={<CadastroSalao />} />
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