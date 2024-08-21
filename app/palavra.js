import Tentativa from "./tentativa"

export default function Palavra({palavra, tentativas}) {    
  let jaAcertou = false;

  return <div className="blocoTentativa">
      {tentativas.map(tentativa => {
        if(jaAcertou) return null;
        else {
          if(palavra === tentativa) {
            jaAcertou = true;
          }
        }

        return <div key={tentativa}><Tentativa palavra={palavra} tentativa={tentativa} /></div>
      })}
  </div>
}