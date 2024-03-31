import Link from "next/link";
import "./css/style.css"
import opcoes from "./opcoes.json"


interface dados{
    src: String;
    text: string;
    href: String;
}

const Opcoes = () => {
    return(
        <>
            <section className="opcoes-section">
                <div>
                    <div className="layout-opcoes">
                        <h1 className="titulo-opcoes">TrailHeader</h1>
                    </div>
                    <div className="layout-opcoes">
                        <h1 className="titulo-opcoes">SalesForce</h1>
                    </div>
                    <div className="layout-opcoes">
                        <h1 className="titulo-opcoes">Marketing CLoud</h1>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="titulo-clientes">Veja os clientes da SalesForce</h1>
                <div>
                    <div className="imagens-clientes">
                        {opcoes.map ((item : dados) =>(
                            <div>
                                <ul className="imagem-lista">
                                    <Link href={item.href}><img className="imagens-opcoes" src={item.src} /></Link>
                                </ul>
                                <ul className="texto-imagens-opcoes">
                                    <li className="li-imagens">{item.text}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Opcoes;