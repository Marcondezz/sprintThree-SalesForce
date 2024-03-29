import "./css/style.css"
import Instagram from "./imgs/instagram.png"
import Facebook from "./imgs/facebook.png"
import Youtube from "./imgs/youtube.png"
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
                            <div className="todas-redesSociais-footer">
                                <a className="instagram-footer"><img src={ Instagram.src } className="redes-sociais-icone"/></a>
                                <a className="facebook-footer"><img src={ Facebook.src } className="redes-sociais-icone"/></a>
                                <a className="youtube-footer"><img src={ Youtube.src } className="youtube-icone"/></a>
                            </div>
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