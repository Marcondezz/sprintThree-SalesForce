'use client'
import React, { useEffect } from 'react';
import './css/Footer.css'
import Formas from '../Footer/img/Quantum.png'

const Footer = () => {
    useEffect(() => {
        console.log(" --- Componente renderizado com sucesso!!! --- ");
    }, []);
    return(
        <>
            <footer>
                <div className='rodape_div1'>
                    <h1 className='logo1'>Grupo FOCVS</h1>
                    <p>O grupo FOCVS é um exemplo de dedicação e excelência. Nossa equipe se empenhou incansavelmente para oferecer 
                        produtos de qualidade superior. Os elogios não param de chegar, reconhecendo nossas lojas como referência em todo o país. 
                        Este é apenas o começo de uma jornada de sucesso, 
                        onde nosso compromisso com a qualidade e o serviço excepcional continuará a nos destacar no mercado.</p>
                        <br />
                    <p>O time da FOCVS é composto por - João Pedro RM 553698 / Igor Gabriel RM 553544 / Sabrina Café RM 553568 / Enzo RM 553643</p>
                </div>
                <div className='rodape_div2'>
                    <a><img src= {Formas.src} alt='Formas de pagamentos'/></a>
                </div>
            </footer>
        </>
    )
}
export default Footer;