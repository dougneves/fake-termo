export default function Tentativa({palavra, tentativa}) {
  const letrasPalavra = Array.from(palavra);
  const letrasTentativa = Array.from(tentativa)
  let jaAcertou = false;
    
    return <>
        {letrasTentativa.map((letra, i) => {
          if (letra == letrasPalavra[i]) {
            return <span className="green">{letra}</span>
          }
          if (letrasPalavra.includes(letra)) {
            return <span className="yellow">{letra}</span>
          }
          return <span className="gray">{letra}</span>
        })}
    </>
}