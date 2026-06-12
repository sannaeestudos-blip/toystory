import { useNavigate } from 'react-router-dom'
import './ToystoryCard.css'

function ToystoryCard({ nome, dono, imagem, id }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/${nome.toLowerCase().replaceAll(' ', '-')}`)
  }

  return (
    <div className="toy-card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      
      <button 
        className="botao-dono"
        onClick={handleClick}
      >
        Escolher Dono
      </button>
    </div>
  )
}

export default ToystoryCard