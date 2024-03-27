import "./css/Personagens.css"
import Einstein from "../Pagina_Inicial/imgs/einstein.png"

const Personagens = () => {
    return(
    <>  
        <nav className="navegacao-personagens">
            <div>
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Einstein.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1>EINSTEIN</h1>
                            <p className="test">Einstein é o cientista de dados da Salesforce. Nasceu em 2016 e foi criado com base em um dos maiores gênios da história mundial.
                                 Além de super rápido, ele é o cérebro por trás da inteligência artificial da empresa. 
                                 Tem um produto que leva seu nome: 
                                 uma plataforma unificada que identifica oportunidades de vendas, prevê resultados e 
                                 faz recomendações inteligentes. </p>
                            <p className="test">É um eterno solucionador de problemas e ajuda você a aprender mais sobre seus clientes. 
                                 Brilhante e altruísta, 
                                 Einstein está sempre pronto para ajudá-lo a se tornar mais experiente e inovador. 
                                Outros produtos que ele oferece são o Einstein Automate e Einstein Analytics.</p>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}
export default Personagens;