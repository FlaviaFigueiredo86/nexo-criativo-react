function Card({ numero, categoria, titulo, descricao, icone }) {
  return (
    <article className="card">
      <div className="card-topo">
        <span className="card-numero">{numero}</span>
        <span className="card-icone">{icone}</span>
      </div>

      <span className="card-categoria">{categoria}</span>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <a href="#sobre" className="card-link">
        Conhecer projeto <span>↗</span>
      </a>
    </article>
  );
}

export default Card;