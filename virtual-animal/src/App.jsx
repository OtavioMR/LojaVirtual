import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CardProduto from './components/CardProduto';
import Sobre from './components/Sobre';
import Footer from './components/Footer'; // Importe seu Footer aqui
import Header from './components/Header';
import { Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    /* d-flex flex-column min-vh-100: A "mágica" para o footer ficar embaixo */
    <div className="d-flex flex-column min-vh-100">

      <ScrollToTop />

      <header className="sticky-top bg-light shadow-sm">
        <Header />
      </header>

      {/* O conteúdo principal fica dentro de uma tag que cresce (flex-grow-1) */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path="/produto/:id" element={<CardProduto />} />
        </Routes>
      </main>

      {/* O Footer aqui fora garante que ele apareça em todas as páginas */}
      <Footer />
    </div>
  );
}

export default App;