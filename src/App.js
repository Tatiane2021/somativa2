import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login';
import Principal from './Paginas/Principal'

function App() {
  return (
    <main class="Main">
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
