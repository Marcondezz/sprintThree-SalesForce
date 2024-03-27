import "./css/style.css"
import "./javascript"
import { IoCaretDownCircleSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import salesforce from "./imgs/salesforce-logo.png"
import AMR from "./imgs/AMR.png"



const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-border-box">
                    <div>
                        <a><img src={salesforce.src} alt="logo Sales Force" className="logo-salesforce-footer"/></a>
                    </div>
                    <div className="nav-footer">
                        <div>
                            <p className="trailblazers-footer">TrailBlazers</p>
                            <p className="contato-footer">Contato</p>
                        </div>
                        <div className="logos-footer">
                            <p className="sustentabilidade-footer">Sustentabilidade</p>
                            <a className="instagram-footer"><FaInstagram /></a>
                            <a className="facebook-footer"><FaFacebook /></a>
                            <a className="youtube-footer"><FaYoutube /></a>
                        </div>
                    </div>
                    <nav className="dropdown-selecao">
                        <span>Selecione a linguagem</span>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">PORTUGUÊS - BR</li>
                            <li className="dropdown-item">PORTUGUÊS - PT</li>
                            <li className="dropdown-item">JAPONÊS</li>
                        </ul>
                    </nav>
                    <div>
                        <a><img src={AMR.src} className="logoAMR" alt="logo AMR"/></a>
                    </div>
                 </div>
            </footer>
        </>
    )
}
export default Footer;