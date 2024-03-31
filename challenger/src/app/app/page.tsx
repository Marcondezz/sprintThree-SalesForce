import Link from 'next/link'
import tenisFeb from './img/FEB.png'
import tenisMar from './img/MAR.png'
import nike from './img/image 7.png'
import adidas from './img/image 8.png'
import newBalance from './img/image 9.png'
import fila from './img/image 10.png'
import jordan from './img/image 11.png'
import puma from './img/image 12.png'
import stance from './img/image 13.png'
import vans from './img/image 14.png'
import camisaPUMA from './img/camisaPUMA.png'
import camisaNB from './img/camisaNB.png'
import meia from './img/meia.png'
import fotoCorrendo from './img/image 19.png'
import "./css/style.css"

interface Imags {
  src : string;
  alt : string;
  href : string;
}


export default function Home() {
  return (
    <main>
      <div className="navegacao_tenis">
          <h1 className="titulo_div1">COOMING SOON</h1>
            <div className='Calendario'>
              <img src={tenisFeb.src} alt="Sneaker February" />
                <img src={tenisMar.src} alt="Sneaker March" />
            </div>

          <div className='navegacao_marcas'>
                   <img src={nike.src} alt="Sneaker Nike" />
                   <img src={adidas.src} alt="Sneaker Adidas" />
                   <img src={newBalance.src} alt="Sneaker NewBalance" />
                   <img src={fila.src} alt="Sneaker Fila" />
                   <img src={jordan.src} alt="Sneaker Jordan" />
                   <img src={puma.src} alt="Sneaker Puma" />
                   <img src={stance.src} alt="Sneaker Stance" />
                   <img src={vans.src} alt="Sneaker Vans" />
          </div>
      </div>

      <div className="segundo_navegacao_marcas">
        <h1 className="titulo_div1">NEW DROP</h1>

        <div className='navegacao_camisas'>
          <img src={camisaPUMA.src} alt="Camisa Puma" />
          <img src={camisaNB.src} alt="Camisa NB" />
          <img src={meia.src} alt="Meia" />
        </div>
      </div>

      <div className="div3">
         <a href='https://www.nike.com.br/sc/nike-sao-paulo-run' target='_blank'><img className='fotoCorrendo' src={fotoCorrendo.src} alt="Sneaker March" width='100%' height='100%'/></a>
      </div>
    </main>
  );
}
