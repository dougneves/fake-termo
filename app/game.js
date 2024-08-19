'use client'

import { useState } from "react"

import GetWords from "./getwords"
import Gameplay from "./gameplay"

export default function Home() {
  const [gameRunning, setGameRunning] = useState(false);
  const [palavra1, setPalavra1] = useState("LILLY");
  const [palavra2, setPalavra2] = useState("TIAGO");
  const [palavra3, setPalavra3] = useState("VASCO");
  const [palavra4, setPalavra4] = useState("LUNAA");

  const onStart = () => setGameRunning(true);


  return (
    <>
      <div>Termo Fake!</div>
      {gameRunning 
       ? 
       <Gameplay palavras={{palavra1, palavra2, palavra3, palavra4}} />
       :
       <GetWords palavras={{palavra1, palavra2, palavra3, palavra4, setPalavra1, setPalavra2, setPalavra3, setPalavra4}} onStart={onStart} />
       }
    </>
  );
}
