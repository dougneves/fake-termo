'use client'

import { useState } from "react"

import Palavra from "./palavra"
import words from "./words"
import utils from "./utils"

console.log(utils)

function tentativaChanger(event, setTentativa) {
    setTentativa(utils.normalizeString(event.target.value))
}

export default function Gameplay({palavras}) {
    const {palavra1, palavra2, palavra3, palavra4} = palavras;
    const [tentativa, setTentativa] = useState("CALVO");
    const [burrice, setBurrice] = useState(false);
    const [tentativas, setTentativas] = useState([]);

    const tentarAction = () => {
        if(tentativa.length == palavra1.length && 
            (words.includes(tentativa) || tentativa == palavra1 || tentativa == palavra2 || tentativa == palavra3 || tentativa == palavra4)) {
            setBurrice(false);
            setTentativas([...tentativas, tentativa])
            setTentativa("")
        } else {
            setBurrice(true);
        }
    }

    return <>
        <div className="tentativa">
            <h1>T E N T A T I V A</h1>
            <p>
                <input className="tentativa" type="text" size="50%" maxLength={palavra1.length} value={tentativa} onChange={(e) => tentativaChanger(e, setTentativa)} />
            </p>
            <p>
                {tentativa.length}/{palavra1.length}
            </p>
            <p>
                <button onClick={tentarAction}>TENTAR!</button>
                {!!burrice && <span className="burrice">X</span> }
            </p>
        </div>
        <div className="blocosTentativa">
            <div><Palavra palavra={palavra1} tentativas={tentativas} /></div>
            <div><Palavra palavra={palavra2} tentativas={tentativas} /></div>
            <div><Palavra palavra={palavra3} tentativas={tentativas} /></div>
            <div><Palavra palavra={palavra4} tentativas={tentativas} /></div>
        </div>
    </>
}