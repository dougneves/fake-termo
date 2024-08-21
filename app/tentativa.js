export default function Tentativa({palavra, tentativa}) {
  const letrasPalavra = Array.from(palavra);
  const letrasTentativa = Array.from(tentativa)
  let jaAcertou = false;
    
    return <>
        {letrasTentativa.map((letra, i) => {
          if (letra == letrasPalavra[i]) {
            return <span className="green" key={i}>{letra}</span>
          }
          if (letrasPalavra.includes(letra)) {
            return <span className="yellow"  key={i}>{letra}</span>
          }
          return <span className="gray"  key={i}>{letra}</span>
        })}
    </>
}