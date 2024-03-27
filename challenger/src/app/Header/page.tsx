import { VscAccount } from "react-icons/vsc";
import { VscServer } from "react-icons/vsc";
import { TiZoomOutline } from "react-icons/ti";
import "./css/Header.css"

const Header = () =>{
    return(
        <>
            <header>
                <div className="titulo1-header">
                    <div className="navegacao-header">
                        <a className="lupa-buscar-header"><VscAccount /></a>
                        <div className="estilo-input-header">
                            <input className="input-buscar-header" placeholder="O que você procura?"/>
                            <a className="lupa-header"><TiZoomOutline /></a>
                        </div>
                        <a className="menu-buscar-header"><VscServer /></a>
                    </div>
                 
                </div>
                <div className="menu-inicial-header">
                        <p>PRODUTOS</p>
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