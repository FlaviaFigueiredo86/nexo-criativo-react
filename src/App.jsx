import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const projetos = [
    {
      numero: "01",
      categoria: "IMPACTO SOCIAL",
      titulo: "Pet Conecta",
      descricao:
        "Uma ideia digital para aproximar animais abandonados de pessoas dispostas a oferecer um lar.",
      icone: "🐾",
    },
    {
      numero: "02",
      categoria: "PRODUTIVIDADE",
      titulo: "Fluxo Inteligente",
      descricao:
        "Uma proposta de solução digital para organizar tarefas e tornar a rotina mais eficiente.",
      icone: "✳",
    },
    {
      numero: "03",
      categoria: "DESENVOLVIMENTO",
      titulo: "Ideia em Código",
      descricao:
        "Experimentos com programação para transformar ideias criativas em experiências digitais.",
      icone: "⌘",
    },
  ];

  return (
    <div className="site">
      <Header />

      <main>
        <section className="hero" id="inicio">
          <span className="etiqueta">
            <span className="ponto"></span>
            LABORATÓRIO DE IDEIAS DIGITAIS
          </span>

          <h1>
            Projetos com
            <br />
            <span>propósito.</span>
          </h1>

          <p className="hero-descricao">
            Explorando tecnologia, criatividade e soluções que
            fazem a diferença no mundo real.
          </p>

          <a href="#projetos" className="botao-principal">
            Descobrir projetos <span>↘</span>
          </a>

          <div className="hero-detalhe">
            <span>CRIATIVIDADE + TECNOLOGIA</span>
            <span>ESTÚDIO DIGITAL / 2026</span>
          </div>
        </section>

        <section className="projetos" id="projetos">
          <div className="secao-topo">
            <div>
              <span className="sobrelinha">DO CONCEITO À PRÁTICA</span>
              <h2>Ideias em movimento<span>.</span></h2>
            </div>

            <p>
              Projetos que exploram possibilidades,
              resolvem problemas e estimulam novas ideias.
            </p>
          </div>

          <div className="grade-projetos">
            {projetos.map((projeto) => (
              <Card
                key={projeto.numero}
                numero={projeto.numero}
                categoria={projeto.categoria}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                icone={projeto.icone}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;