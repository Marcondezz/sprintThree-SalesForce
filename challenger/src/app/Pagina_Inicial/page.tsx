import "./css/style.css";
import product_family from "./imgs/product-family.png";
import dados1 from "./imgs-paginaInicial1.json"
import dados2 from "./imgs-paginaInicial2.json"
import Link from "next/link";

interface dados{
    id: number;
    src: string;
    text: string;
}
const Pagina_Inicial = () => {
    return(
        <>
                 <div className="paginaInicial-main">
                    <h1 className="titulo-main">Quem é a SalesForce?</h1>
                    <div className="divOne-paginaInicial">
                        <p className="texto-paginaInicial">A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. 
                            É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.</p>
                        <a><img src={product_family.src} className="imagem-div1-main"/></a>
                    </div>
                    </div>
                    <section className="secao-imagens">
                        <div className="layout-paginaInicial">
                        {dados1.map ((item1 : dados) =>(

                            <div className="imagens-paginaInicial">
                                <div className="teste">
                                    <a className="layout-imagem-paginaInicial"><img className="formatacao-imagem-paginaInicial" src={item1.src} /></a>
                                    <ul className="texto-imagem-paginaInicial">
                                        <Link href='https://www.youtube.com/'><li className="texto-imagem">{item1.text}</li></Link>
                                    </ul>
                                </div>
                            </div> ))}
                        </div>
                    </section>
                    <section className="secao-imagens">
                        <div className="layout-paginaInicial" >
                        {dados2.map ((item2 : dados) =>(

                            <div className="imagens-paginaInicial">
                                <div className="teste">
                                    <a className="layout-imagem-paginaInicial"><img className="formatacao-imagem-paginaInicial" src={item2.src} /></a>
                                    <ul className="texto-imagem-paginaInicial">
                                        <Link href='challenger/src/app/Personagens/page.tsx'><li className="texto-imagem">{item2.text}</li></Link>
                                    </ul>
                                </div>
                            </div>
                        ))}
                        </div>
                    </section>


        </>
    )
}
export default Pagina_Inicial;