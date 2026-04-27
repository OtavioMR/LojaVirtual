import '../css/Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <span></span>
      <nav className="navbar navbar-expand-sm">
        <div id='home' className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#banner">
            <span className="logo-text"><Link to="/" className='logo-text text-decoration-none'>Petz</Link></span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className='nav-link'>Início</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#produtos">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#contato'>Contato</a>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className='nav-link'>Sobre</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Produtos..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Pesquisar</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;