import barras from "./imgs/barras.png"
import perfil from "./imgs/perfil.png"
import Link from "next/link";
import dados from "./links.json"
import { TiZoomOutline } from "react-icons/ti";
import "./css/Header.css"
import "../Pagina_Inicial/page"

//-----------------------------------------------------

interface Dados{
    id: number;
    name: string;
    href: string;
}

const Header = () =>{
    return(
        <>
            <header>
                <div className="titulo1-header">
                    <div className="navegacao-header">
                        <Link href="/Questionario"><img src={ perfil.src } className="perfil-header"/></Link>
                        <div className="estilo-input-header">
                            <input className="input-buscar-header" placeholder="O que você procura?"/>
                            <a className="lupa-header"><TiZoomOutline /></a>
                        </div>
                        <Link href="/Opcoes"><img src={ barras.src }  className="barras-header"/></Link>
                    </div>
                 
                </div>
                    <div className="menu-inicial-header">
                        <ul className="lista-header">
                            {
                                dados.map((link:Dados) =>(
                                    <li>
                                        <Link href={ link.href }>{ link.name }</Link>
                                    </li>
                                    
                                ))
                            }
                        </ul>
                </div>
            </header>
        </>
    )
}
export default Header;