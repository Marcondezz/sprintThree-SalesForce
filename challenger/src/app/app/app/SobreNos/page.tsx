'use client'
import React, { useEffect } from 'react';
import "./css/style.css"

const SobreNos = () => {
    useEffect(() => {
        console.log(" --- Componente renderizado com sucesso!!! --- ");
    }, []);


    return(
        <>
            <div className="div1-SobreNos">
                <div className="quadrado">
                    <h1 className="titulo_sobrenos">Sobre Nós</h1>
                    <p className="texto_sobrenos">O grupo FOCVS é um exemplo de dedicação e excelência. Nossa equipe se empenhou incansavelmente para oferecer 
                        produtos de qualidade superior. Os elogios não param de chegar, reconhecendo nossas lojas como referência em todo o país. 
                        Este é apenas o começo de uma jornada de sucesso, 
                        onde nosso compromisso com a qualidade e o serviço excepcional continuará a nos destacar no mercado.</p>
                    <br />
                    <ul className="integrantes_grupo">
                        <li>Igor Gabriel - RM553544</li>
                        <li>Sabrina Café - RM553568</li>
                        <li>João Pedro - RM553698</li>
                        <li>Enzo - RM553643</li>
                    </ul>
                    <br />
                </div>
            </div>

        </>
    )
}
export default SobreNos;