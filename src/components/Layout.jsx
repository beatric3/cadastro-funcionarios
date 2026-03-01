export default function Layout({ children}) {
    return (
        <div className="page">
            <div className="container">
            
            <div className="left">
                <p className="subtitle">RECURSOS HUMANOS</p>
                
                <h1>
                    Cadastro de <br />
                    <span>Funcionários</span>
                </h1>

                <p className="description">Preencha os dado solicitados ao lado para cadastro no sistema</p>
                
                <div className="contact">
                    <p> contato@empresa.com</p>
                    <p>(61) 99999-9999</p>
                </div>
            </div>

            <div className="right">
                {children}
            </div>

        </div>
    </div>
    );
}