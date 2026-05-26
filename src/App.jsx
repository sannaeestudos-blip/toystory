import { useState } from "react";
import "./App.css";
import ToystoryCard from "./componentes/ToystoryCard/ToystoryCard";
import toys from "./Data/Toystory";
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const audio = new Audio('/youve-got-a-friend.mp3') 
    audio.volume = 0.5
    audio.loop = true
    audio.play().catch(() => {}) 
  }, [])

  const [listaToys] = useState(toys);
  

  return (
    <>
      <h1 className="titulo-toystory">Toy Story</h1>
      

      <h2 className="titulo-toystory subtitulo">Total de brinquedos: {listaToys.length}</h2>

      <section id="cards">
        {listaToys.map((toy, index) => (
          
          <ToystoryCard
            key={index}
            nome={toy.nome}
            dono={toy.dono}
            caminhoImagem={toy.imagem}
            
             />
             
        ))}
             </section>
    </>
  )
}

export default App;