import './ToystoryCard.css'
import { useState } from 'react'


function ToystoryCard({ nome, dono, caminhoImagem }) {
  const [mostrarDono, setMostrarDono] = useState(false) // 2. Cria o estado

  return (
    <div className="toy-card">
      <img src={caminhoImagem} alt={nome} />
      <h2>{nome}</h2>
      
   
      {mostrarDono && <p>Dono: {dono}</p>} 
      
     <button 
  className={`botao-dono ${mostrarDono ? 'ativo' : ''}`}
  onClick={() => setMostrarDono(!mostrarDono)}
>
  {mostrarDono ? 'Esconder dono' : 'Quem é meu dono?'}
</button>
    </div>
  )
}

export default ToystoryCard