function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="logo">
        NEXO<span>.</span>
      </a>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
      </nav>

      <a href="#projetos" className="header-button">
        Explorar projetos ↗
      </a>
    </header>
  );
}

export default Header;