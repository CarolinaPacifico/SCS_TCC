import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import QuemSomos from './pages/Home';
import Servicos from './pages/Home';
import Diferencial from './pages/Home';
import Contato from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

//import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<QuemSomos/>}/>
        <Route path="/" element={<Servicos/>}/>
        <Route path="/" element={<Diferencial/>}/>
        <Route path="/" element={<Contato/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
