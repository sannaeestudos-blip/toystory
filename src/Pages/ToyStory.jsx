import { useParams, useNavigate } from 'react-router-dom'
import { Toystory } from '../Data/Toystory'
import { Helmet } from 'react-helmet-async'
import './ToyStory.css'


function ToyStory() {
  const { toyId } = useParams()
  const navigate = useNavigate()
  
  const toy = Toystory.find((t) => 
    t.nome.toLowerCase().replaceAll(' ', '-') === toyId
  )

  if (!toy) {
    return (
      <>
        <Helmet>
          <title>Brinquedo não encontrado - Toy Story</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="pagina-toystory">
          <h1>Brinquedo não encontrado</h1>
          <button className="botao-voltar" onClick={() => navigate('/toystory')}>
            Voltar pra Home
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{toy.nome} - Toy Story | Dono: {toy.dono}</title>
        <meta name="description" content={`Você escolheu ${toy.nome}! O dono atual é ${toy.dono}. Escolha se ${toy.nome} vai ficar com Andy ou Bonnie no universo Toy Story.`} />
        <meta name="keywords" content={`${toy.nome.toLowerCase()}, toy story, ${toy.dono.toLowerCase()}, andy, bonnie`} />
        <meta property="og:title" content={`${toy.nome} - Toy Story`} />
        <meta property="og:description" content={`Decida o novo dono de ${toy.nome}!`} />
        <meta property="og:image" content={toy.imagem} />
      </Helmet>

      <div className="pagina-toystory">
        <h1 className="titulo-escolhido">Você escolheu: {toy.nome}</h1>
        <img src={toy.imagem} alt={toy.nome} className="imagem-boneco" />
        <h2 className="dono-atual">Dono atual: {toy.dono}</h2>
        <p className="texto-dono">Escolha o novo dono:</p>
        
        <div className="botoes-dono">
          <button className="botao-andy">Andy</button>
          <button className="botao-bonnie">Bonnie</button>
        </div>

        <button className="botao-voltar" onClick={() => navigate('/toystory')}>
          Voltar pra Home
        </button>
      </div>
    </>
  )
}
export default ToyStory