import { useEffect, useState } from 'react'
import { Toystory } from '../Data/Toystory'
import ToystoryCard from '../componentes/ToystoryCard/ToystoryCard'
import './Home.css'

function Home() {
  const [listaToys, setListaToys] = useState([])

  useEffect(() => {
    setListaToys(Toystory)
  }, [])

  return (
    <div className="home-container">
      <h1 className="titulo-toystory">Toy Story</h1>
      <h2 className="subtitulo">Total de brinquedos: {listaToys.length}</h2>
      
      <section id="cards">
        {listaToys.map((toy) => (
          <ToystoryCard key={toy.id} {...toy} />
        ))}
      </section>
    </div>
  )
}

export default Home