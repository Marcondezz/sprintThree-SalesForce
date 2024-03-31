'use client'
import React, { useEffect } from 'react';
import Link from 'next/link'
import dados from "../Header/link_nav.json"
import imagem from './img/logo.png'
import './css/Header.css'

interface dados{
    href : string;
    name : string;
}
const Header = () => {
    useEffect(() => {
        console.log(" --- Componente renderizado com sucesso!!! --- ");
    }, []);
    return(
        <>
             <header className="cabecalho_global">
                <div>
                    <img className='focvs_logotipo' src={imagem.src} alt="Focvs" />
                </div>
                <nav >
                    <ul>
                        {
                            dados.map((link:dados) =>(
                                <li className='catalogo'><Link href={ link.href }>{ link.name }</Link></li>
                            ))
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;