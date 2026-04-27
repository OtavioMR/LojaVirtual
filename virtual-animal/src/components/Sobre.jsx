import '../css/Sobre.css'

function Sobre() {
    return (
        <div className="container py-5 sobre">
            {/* Seção 1: Cabeçalho com impacto */}
            <div className="row mb-5 text-center">
                <div className="col-12">
                    <h1 className="display-4 fw-bold mb-4" style={{ color: 'rgb(43, 43, 135)' }}>
                        Paixão por Pets, <br className="d-none d-md-block" /> Compromisso com a Vida.
                    </h1>
                    <div className="mx-auto" style={{ width: '80px', height: '4px', backgroundColor: 'yellow' }}></div>
                </div>
            </div>

            {/* Seção 2: História e Missão */}
            <div className="row align-items-center mb-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h2 className="fw-bold mb-3">Nossa História</h2>
                    <p className="lead text-muted">
                        A Petz Virtual nasceu de um sonho simples: transformar a rotina de cuidados com os animais em uma experiência de pura alegria e bem-estar.
                    </p>
                    <p>
                        Fundada em 2024, nossa jornada começou quando percebemos que o mercado pet precisava de algo mais do que apenas produtos; precisava de <strong>empatia</strong>. O que começou como uma pequena curadoria de acessórios selecionados, hoje se tornou um ecossistema completo para quem não vê o pet apenas como um animal de estimação, mas como um membro essencial da família.
                    </p>
                    <p>
                        Nossa missão é democratizar o acesso a produtos de alta qualidade, desde nutrição premium até os brinquedos mais inovadores do mercado mundial, tudo com a facilidade de um clique.
                    </p>
                </div>
                <div className="col-lg-6">
                    <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#fdfdfd', borderLeft: '10px solid yellow' }}>
                        <h4 className="fw-bold">Por que existimos?</h4>
                        <p className="mb-0">
                            Acreditamos que a conexão entre humanos e animais tem o poder de curar e transformar ambientes. Nossa existência é pautada na busca incansável por soluções que aumentem a longevidade e a felicidade dos seus companheiros de quatro patas.
                        </p>
                    </div>
                </div>
            </div>

            {/* Seção 3: Diferenciais (Ícones ou Cards) */}
            <div className="row g-4 mb-5">
                <div className="col-md-4 text-center">
                    <div className="p-4 h-100 bg-white shadow-sm rounded-3">
                        <i className="bi bi-heart-pulse fs-1 text-danger mb-3"></i>
                        <h5 className="fw-bold">Cuidado Animal</h5>
                        <p className="small text-muted">Todos os nossos produtos passam por uma rigorosa análise de segurança veterinária antes de chegarem à sua casa.</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="p-4 h-100 bg-white shadow-sm rounded-3">
                        <i className="bi bi-truck fs-1 text-primary mb-3"></i>
                        <h5 className="fw-bold">Entrega Ágil</h5>
                        <p className="small text-muted">Logística inteligente para garantir que a ração ou o remédio do seu pet nunca cheguem com atraso.</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="p-4 h-100 bg-white shadow-sm rounded-3">
                        <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
                        <h5 className="fw-bold">Ética e Sustentabilidade</h5>
                        <p className="small text-muted">Priorizamos parceiros que respeitam o meio ambiente e não realizam testes cruéis em animais.</p>
                    </div>
                </div>
            </div>

            {/* Seção 4: Visão e Futuro */}
            <div className="row text-center pt-5 border-top">
                <div className="col-12">
                    <h3 className="fw-bold mb-4">Onde queremos chegar?</h3>
                    <p className="mx-auto" style={{ maxWidth: '800px' }}>
                        Nossa visão para o futuro é ser a maior plataforma de bem-estar animal da América Latina. Não apenas como uma loja, mas como um centro de conhecimento, suporte e comunidade para tutores. Investimos constantemente em tecnologia para que a sua experiência na <strong>Petz Virtual</strong> seja tão acolhedora quanto um abraço no seu pet.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;