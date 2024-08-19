function normalizeString(str) {
    // Remove accents using the normalize() method
    const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
    // Keep only letters and convert to uppercase
    return normalizedStr.replace(/[^a-zA-Z]/g, '').toUpperCase();
}
  
function palavraChanger (event, setPalavra) {
    setPalavra(normalizeString(event.target.value))
}

export default function GetWords({palavras, onStart}) {
    const {palavra1, setPalavra1,
        palavra2, setPalavra2,
        palavra3, setPalavra3,
        palavra4, setPalavra4
    } = palavras;

    const ready = palavra1.length === palavra2.length &&
                  palavra1.length === palavra3.length &&
                  palavra1.length === palavra4.length

    console.log(onStart)
    
    return <div>
        <h1>defina 4 palavras</h1>
        <p><input type="text" value={palavra1} onChange={(e) => palavraChanger(e, setPalavra1)} /> {palavra1.length}</p>
        <p><input type="text" value={palavra2} onChange={(e) => palavraChanger(e, setPalavra2)} /> {palavra2.length}</p>
        <p><input type="text" value={palavra3} onChange={(e) => palavraChanger(e, setPalavra3)} /> {palavra3.length}</p>
        <p><input type="text" value={palavra4} onChange={(e) => palavraChanger(e, setPalavra4)} /> {palavra4.length}</p>
        
        <p>{ready 
            ?
            <button onClick={() => onStart()}>Start!</button>
            :
            <span style={{color: "red"}}>TODAS AS PALAVRAS PRECISAM TER O MESMO TAMANHO INFERNO</span>}
        </p>
    </div>
}