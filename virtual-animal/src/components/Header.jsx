import '../css/Header.css'

function Header(){
    return (
        <>
        <nav className="container-fluid">
            <div className="row d-flex flex-row justify-content-between align-items-center">
                <div className="col-md-2"><h1>Virtual Animal</h1></div>
                <div className="col-md-6">
                    <ul className="d-flex flex-row justify-content-between">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="col-md-4 d-flex align-items-center text-center justify-content-center"><p>Pesquisar</p></div>
            </div>
        </nav>
        </>
    );
}

export default Header;