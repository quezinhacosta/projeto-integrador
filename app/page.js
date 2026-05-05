
export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🛡️</span>
          Viva Mais
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#aboutText">Quem somos</a>
          <a href="#simulation">Simulação</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>
        <a href="#contact" className="nav-cta">Fale conosco</a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Protegemos o que é seu</h1>
          <p>Soluções de seguro para você, sua família e sua empresa com confiança e atendimento personalizado.</p>
          <div className="hero-buttons">
            <a href="#simulation" className="btn-primary">Ver simulação</a>
            <a href="#contact" className="btn-secondary">Fale conosco</a>
          </div>
        </div>
      </section>

      <section id="aboutText" className="about">
        <div className="aboutText">
          <span className="section-label">Sobre nós</span>
          <h2>QUEM SOMOS</h2>
          <p>
            Somos uma corretora de seguros que une experiência, confiança e
            atendimento personalizado para cada cliente.
          </p>
          <p>
            Nossa missão é proteger sua vida, seu patrimônio e sua família com
            soluções completas e acessíveis.
          </p>
          <a href="#contact" className="btn-primary about-btn">Entre em contato</a>
        </div>
        <div className="aboutImg">
          <div className="about-badge">
            <span className="about-icon">🛡️</span>
            <p>10+ anos<br />de experiência</p>
          </div>
        </div>
      </section>

      <section id="simulation" className="simulation">
        <div className="simText">
          <span className="section-label">Aprenda mais</span>
          <h2>VEJA UMA SIMULAÇÃO</h2>
          <p>Entenda como funciona nosso processo de cotação e como podemos te ajudar a escolher o melhor plano.</p>
        </div>
        <div className="video">
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Simulação Viva Mais"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="services" className="services">
        <span className="section-label">O que oferecemos</span>
        <h2>CONHEÇA NOSSOS SERVIÇOS</h2>
        <div className="cards">
          <div className="card">
            <span className="card-icon">👤</span>
            <h3>Para você</h3>
            <p>Seguro de vida, saúde e acidentes pessoais com cobertura completa.</p>
          </div>
          <div className="card">
            <span className="card-icon">🏠</span>
            <h3>Para sua casa</h3>
            <p>Proteção residencial contra incêndio, roubo e danos elétricos.</p>
          </div>
          <div className="card">
            <span className="card-icon">🏢</span>
            <h3>Para empresas</h3>
            <p>Seguros empresariais sob medida para proteger seu negócio.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>FALE CONOSCO</h2>
        <p className="contact-subtitle">Estamos prontos para te atender</p>
        <div className="contactGrid">
          <div className="contact-card">
            <span className="contact-icon">🕐</span>
            <h3>Horário</h3>
            <p>Seg–Sex: 08h às 18h</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📱</span>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/5581999999999">(81) 99999-9999</a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <h3>E-mail</h3>
            <a href="mailto:contato@vivamais.com">contato@vivamais.com</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Viva Mais Seguros. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
