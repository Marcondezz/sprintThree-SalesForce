import "./css/style.css"
import imagem from "./imgs/crm.png"

const Questionario = () => {
    return(
        <>
            <section>
                <h1 className="titulo-questionario">TrailFinder</h1>
                <div className="alinhamento-questionario">
                    <div className="edicao-texto-questionario">
                        <div>
                        <h2 className="texto-questionario">O Trail Finder é um questionário onde o usuário responderá perguntas que descrevem suas principais características, 
                        como por exemplo, o tamanho da empresa e o ramo de atuação. Vamos coletar esses dados e como resultado desse questionário 
                        mostrar cards com as melhores ferramentas e serviços, além de sugerir uma solução para o problema apresentado.</h2>
                        </div>
                        <div className="edicao-botao-questionario">
                            <button className="botao-questionario" type="submit"><b>Questionário</b></button>
                        </div>
                    </div>
                </div>
                <div className="imagem-questionario">
                    <img src={imagem.src} alt="Imagem CRM"/>
                </div>
            </section>
        </>
    )
}
export default Questionario;