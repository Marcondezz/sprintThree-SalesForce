import "./css/style.css";
import product_family from "./imgs/product-family.png"
import einstein from "./imgs/einstein.png"

const Pagina_Inicial = () => {
    return(
        <>
            <h1 className="titulo-main">Quem é a SalesForce?</h1>
            <div className="divOne-paginaInicial">
                <p className="texto-paginaInicial">A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. 
                    É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.</p>
                <a><img src={product_family.src} className="imagem-div1-main"/></a>
            </div>
            <div className="complemento-paginaInicial">
                <h1 className="titulo2-main">O que é CUSTOMER 360?</h1>
                <p className="texto2-paginaInicial">O Customer 360, todo o nosso portfólio de produtos, ajuda você a se conectar com seus clientes de uma maneira totalmente nova. 
                    Agora todos — suas equipes de marketing, vendas, e-commerce, serviços de atendimento ao cliente, TI e dados — podem trabalhar de 
                    maneira mais inteligente e ser mais produtivos com dados conectados, IA confiável e o CRM de IA nº 1.</p>
                <p className="texto2-paginaInicial"><b>Conheça cada um dos personagens e seus propósitos</b></p>
            </div>
            <div className="imagens-paginaInicial">
                <div className="layout-imagem-paginaInicial"><img src={einstein.src} className="formatacao-imagem-paginaInicial"/>
                <p className="texto-imagem-paginaInicial">EINSTEIN</p>
                </div>
            </div>
        </>
    )
}
export default Pagina_Inicial;