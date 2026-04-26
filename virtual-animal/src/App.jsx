import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardProduto from './components/CardProduto';
import Sobre from './components/Sobre';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/sobre' element={<Sobre />} />
      {/* O :id funciona como uma variável na URL */}
      <Route path="/produto/:id" element={<CardProduto />} />
    </Routes>
  );
}

export default App;