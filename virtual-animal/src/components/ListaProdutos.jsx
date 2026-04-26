import '../css/ListaProdutos.css'
import { useNavigate } from 'react-router-dom';
import { meusProdutos } from '../data/produtos';

function ListaProdutos() {
    const navigate = useNavigate();

    const irParaDetalhes = (id) => {
        navigate(`/produto/${id}`);
    }

    return (
        <div id='produtos' className="container-fluid py-5 produtos">
            <h1 className="text-center mb-5" style={{fontFamily: 'Fraunces'}}>Nossos produtos</h1>
            <div className="row g-4 justify-content-center">
                {meusProdutos.map((produto) => (
                    <div className="col-6 col-md-4 col-lg-2" key={produto.id}>
                        <div className="card-produto d-flex flex-column align-items-center text-center p-3"
                             onClick={() => irParaDetalhes(produto.id)}
                             style={{ cursor: 'pointer' }} >
                            
                            <div className="container-imagem">
                                <img src={produto.img} className="img-fluid imagem-produto" alt={produto.nome} />
                                <i className="bi bi-plus-circle-fill ver-mais"></i>
                            </div>

                            <div className="descricao-produto mt-4">
                                <h4>{produto.nome}</h4>
                            </div>

                            <div className="preco-produto mt-auto">
                                <span className="simbolo-moeda">R$</span>
                                <span className="valor">{produto.preco}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaProdutos;