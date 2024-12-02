import "./Componente.css"
 
const Componente = () => {
    const diferente = true;

  return (
    <div>
        <h1 className="titulo">
            Titulo h1, só que do componente
        </h1>
    
        <h2 className={
            diferente

            ? "titulo-diferente"
            : "titulo-normal"
        }>
           Texto louco com personalidade 
        </h2>
    
    </div>
  )
}

export default Componente
