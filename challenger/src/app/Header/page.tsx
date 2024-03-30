import barras from "./imgs/barras.png"
import perfil from "./imgs/perfil.png"
import { TiZoomOutline } from "react-icons/ti";
import "./css/Header.css"

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
                        <p>TRAILFINDER</p>
                        <hr></hr>
                        <p>SUPORTE</p>
                        <hr></hr>
                        <p>EMPRESA</p>
                </div>
            </header>
        </>
    )
}
export default Header;