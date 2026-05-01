import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Receitas from "./pages/Receitas";
import Despesas from "./pages/Despesas";
import Movimentacoes from "./pages/Movimentacoes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/receitas" element={<Receitas />} />
      <Route path="/despesas" element={<Despesas />} />
      <Route path="/movimentacoes" element={<Movimentacoes />} />
    </Routes>
  );
}

export default App;