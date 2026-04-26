import { useNavigate, useParams } from 'react-router-dom';
import { meusProdutos } from '../data/produtos'; // Importa a lista
import '../css/ListaProdutos.css';

function CardProduto() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    // Lógica para encontrar o produto específico pelo ID
    // Usamos Number(id) porque o ID da URL vem como texto
    const produto = meusProdutos.find(p => p.id === Number(id));

    // Caso o usuário digite um ID que não existe na URL
    if (!produto) {
        return <div className="container py-5"><h1>Produto não encontrado!</h1></div>;
    }

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate('/')}>
                <i className="bi bi-arrow-left"></i> Voltar para a Loja
            </button>

            <div className="row g-5">
                <div className="col-md-6">
                    <div className="bg-light rounded p-5 d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                        {/* Usando a imagem real do produto encontrado */}
                        <img src={produto.img} className="img-fluid" alt={produto.nome} style={{ maxHeight: '300px' }} />
                    </div>
                </div>

                <div className="col-md-6">
                    <h6 className="text-danger text-uppercase fw-bold">Novo na Loja</h6>
                    {/* Exibindo o Nome real */}
                    <h1 className="display-5 fw-bold" style={{ fontFamily: 'Fraunces' }}>{produto.nome}</h1>
                    
                    <p className="fs-4 text-warning">★★★★☆ <span className="text-muted fs-6">(42 avaliações)</span></p>

                    {/* Exibindo o Preço real */}
                    <h2 className="my-4 text-success fw-bold">R$ {produto.preco}</h2>

                    <p className="text-muted">
                        {/* Exibindo a Descrição real (ou uma padrão se não houver) */}
                        {produto.descricao || "Descrição detalhada em breve para este item perfeito para o seu pet."}
                    </p>

                    <div className="d-grid gap-2 d-md-flex mt-5">
                        <button className="btn btn-danger btn-lg px-5">Comprar Agora</button>
                        <button className="btn btn-outline-danger btn-lg">
                            <i className="bi bi-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduto;