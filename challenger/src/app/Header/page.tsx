import barras from "./imgs/barras.png"
import perfil from "./imgs/perfil.png"
import { TiZoomOutline } from "react-icons/ti";
import "./css/Header.css"
import Link from "next/link";
import "../Pagina_Inicial/page"
import dados from "./links.json"

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
                        <a><img src={ perfil.src } className="perfil-header"/></a>
                        <div className="estilo-input-header">
                            <input className="input-buscar-header" placeholder="O que você procura?"/>
                            <a className="lupa-header"><TiZoomOutline /></a>
                        </div>
                        <a><img src={ barras.src }  className="barras-header"/></a>
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