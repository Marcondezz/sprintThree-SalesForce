import "./css/Personagens.css"
import Einstein from "../Pagina_Inicial/imgs/einstein.png"
import Appy from "../../../public/assets/Personagens_PI/appy.png"
import Astro from "/public/assets/Personagens_PI/astro.png"
import Cloudy from "/public/assets/Personagens_PI/cloudy.png"
import Codey from "/public/assets/Personagens_PI/codey.png"
import Hootie from "/public/assets/Personagens_PI/hootie.png"

const Personagens = () => {
    return(
    <>  
        <nav className="navegacao-personagens">
            <section>
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Einstein.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">EINSTEIN</h1>
                            <p className="texto-esquerda">Einstein é o cientista de dados da Salesforce. Nasceu em 2016 e foi criado com base em um dos maiores gênios da história mundial.
                                 Além de super rápido, ele é o cérebro por trás da inteligência artificial da empresa. 
                                 Tem um produto que leva seu nome: 
                                 uma plataforma unificada que identifica oportunidades de vendas, prevê resultados e 
                                 faz recomendações inteligentes. </p>
                            <p className="texto-esquerda">É um eterno solucionador de problemas e ajuda você a aprender mais sobre seus clientes. 
                                 Brilhante e altruísta, 
                                 Einstein está sempre pronto para ajudá-lo a se tornar mais experiente e inovador. 
                                Outros produtos que ele oferece são o Einstein Automate e Einstein Analytics.</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">APPY</h1>
                        <p className="texto-direita">A Appy representa ISVs, parceiros e AppExchange. Ela surgiu em 2017, sabe muito sobre todas as coisas da
                         Salesforce e é a mascote certa para ajudar na navegação do ecossistema do AppExchange para resolver desafios de negócios </p>
                        <p className="texto-direita">Ela também é considerada um conector, pois se não souber a resposta, ela usa sua extensa rede para conectar 
                        as pessoas certas e resolver seus problemas. 
                        A Appy acredita nas pessoas e inspira empreendedores do mundo todo a viver os sonhos e transformar os negócios.</p>
                    </div>
                    <a><img src={ Appy.src } className="personagem-direita-personagens"/></a> 
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Astro.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">ASTRO</h1>
                            <p className="texto-esquerda">Astro é o seu guia amigável para tudo na Salesforce e ajuda você a se tornar o melhor em tudo o que deseja fazer. 
                            Nasceu em 2014 e representa comunidade e inclusão, incentivando a todos a atingirem seus objetivos sem medo de experimentar coisas novas</p>
                            <p className="texto-esquerda">É curioso e adora viajar, aprender e fazer novas amizades. 
                            Sua identidade de gênero é não-binária para representar os valores de diversidade e inclusão de nossa empresa.</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">CLOUDY</h1>
                        <p className="texto-direita">Inteligente e cheia de experiência em tecnologia, Cloudy nasceu em 2015 e é responsável por criar aplicativos inovadores na nuvem. Fiel ao seu nome, 
                        ela está sempre no centro da ação e tem um imenso conhecimento de tudo relacionado ao armazenamento de dados na nuvem.</p>
                        <p className="texto-direita">Cloudy representa os administradores da Salesforce, 
                        traz à tona o melhor de todos e incentiva você a explorar seu próprio potencial ilimitado</p>
                    </div>
                    <a><img src={ Cloudy.src } className="personagem-direita-personagens"/></a> 
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Hootie.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">HOOTIE</h1>
                            <p className="texto-esquerda">Hootie é uma coruja que representa Trailhead Academy. Ele ajuda você a conquistar novas habilidades, g
                            anhar credenciais e buscar sucesso na sua carreira da melhor forma</p>
                            <p className="texto-esquerda">Embora pareça grande e destemido, Codey é muito carismático e adora dar abraços de urso. 
                            Ele é o mascote que vai trazer diversão aos seus projetos criativos.</p>
                    </div>
                </div>
            </section>
        </nav>
    </>
    )
}
export default Personagens;