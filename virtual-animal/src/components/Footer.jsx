import '../css/Footer.css'

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id='contato' className='footer mt-auto py-4'>
            <div className="container-fluid">
                <div className="row m-3">
                    
                    {/* Coluna 1: Sobre a Loja */}
                    <div className="col-12 col-md-6 col-lg-4 text-center divisoria mb-4 mb-lg-0">
                        <h5 className="fw-bold mb-3">Petz Virtual</h5>
                        <p className="text-muted">
                            Cuidando do seu melhor amigo com amor e dedicação. 
                            Oferecemos os melhores produtos e acessórios para garantir 
                            a felicidade e saúde do seu pet.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div className="col-12 col-md-6 col-lg-4 text-center divisoria mb-4 mb-lg-0">
                        <h5 className="fw-bold mb-3">Links Úteis</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className='text-decoration-none text-muted'>Início</Link></li>
                            <li><li><Link to="/#produtos" className='text-decoration-none text-muted'>Nossos produtos</Link></li></li>
                            <li><Link to="/sobre" className='text-decoration-none text-muted'>Sobre nós</Link></li>
                            <li><a href="#" className="text-decoration-none text-muted">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato e Redes Sociais */}
                    <div className="col-12 col-md-6 col-lg-4 text-center divisoria">
                        <h5 className="fw-bold mb-3">Contato</h5>
                        <p className="text-muted mb-1">
                            <i className="bi bi-person-fill me-2"></i>
                            OTÁVIO MONTEIRO RODRIGUES
                        </p>
                        <p className="text-muted mb-1">
                            <i className="bi bi-calendar-fill me-2"></i>
                            27/02/2026
                        </p>
                        <div className="mt-3">
                            <a href="#" className="text-muted me-3 fs-4"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-muted me-3 fs-4"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-muted fs-4"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>

                </div>
                
                {/* Linha de Copyright opcional no final */}
                <div className="row mt-4">
                    <div className="col-12 text-center border-top border-dark pt-3">
                        <p className="text-muted small">&copy; 2026 Petz Virtual. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;