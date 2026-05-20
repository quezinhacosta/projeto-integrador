import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="container">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span>Viva Mais</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">Quem Somos</a>
          <a href="#simulation">Simulação</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>

  
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <Image
          src="/banner.jpg"
          alt="Banner viva mais"
          fill
          priority
          className="heroImg"
        />

        <div className="heroOverlay"></div>

        <div className="heroContent">
          <h1>
            Proteção Inteligente para Você,
            sua Família e sua Empresa
          </h1>

          <p>
            Soluções completas em seguros com atendimento humanizado,
            rápido e confiável.
          </p>

          <div className="heroButtons">
            <a 
              href="https://vivamaisseguros.my.canva.site/dahkm4siix4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="primaryBtn"
              style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
            >
              Fale com nosso Bot
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about" id="about">

        <div className="aboutText">
          <span className="sectionTag">
            SOBRE NÓS
          </span>

          <h2>Quem Somos</h2>

          <p>
            Somos uma corretora de seguros que une experiência,
            confiança e atendimento personalizado para cada cliente.
          </p>

          <p>
            Nossa missão é proteger sua vida, seu patrimônio
            e sua família com soluções completas, acessíveis
            e eficientes.
          </p>

          <p>
            Trabalhamos com transparência e compromisso,
            oferecendo suporte em cada etapa da sua jornada.
          </p>
        </div>

        <div className="aboutImg">
          <Image
            src="/logo.png"
            alt="Logo Viva Mais"
            width={320}
            height={320}
          />
        </div>
      </section>

      {/* SIMULAÇÃO */}
      <section className="simulation" id="simulation">

        <div className="videoContainer">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vídeo Simulação"
            allowFullScreen
          ></iframe>
        </div>

        <div className="simText">

          <span className="sectionTag">
            SIMULAÇÃO
          </span>

          <h2>Veja Como Funciona</h2>

          <p>
            Descubra como funciona o processo de contratação
            e conheça as vantagens de ter a Viva Mais ao seu lado.
          </p>

          <button className="primaryBtn">
            Simular agora
          </button>
        </div>
      </section>

      <section className="services" id="services">

        <span className="sectionTag">
          SERVIÇOS
        </span>

        <h2>Conheça nossos seguros</h2>

        <div className="cards">

          <Link href="/ParaVoce" className="card">
            <h3>Para Você</h3>
            <p>
              Seguro de Vida, Seguro de Viagem e Plano de Saúde.
            </p>
          </Link>

          <Link href="/ParaCasa" className="card">
            <h3>Para sua Casa</h3>

            <p>
              Seguro Residencial, Proteção Familiar e Seguro X.
            </p>
          </Link>

          <Link href="/ParaEmpresa" className="card">
            <h3>Para Empresas</h3>
            <p>
              Seguro Saúde Empresarial, Seguro Garantia e Seguro de Frota.
            </p>
          </Link>

        </div>
      </section>
      <section className="contact" id="contact">

        <span className="sectionTag">
          CONTATO
        </span>

        <h2>Fale conosco</h2>

        <div className="contactGrid">

          <div className="contactCard">
            <h3>Horário</h3>
            <p>Segunda à Sexta</p>
            <span>08h às 17h</span>
          </div>

          <div className="contactCard">
            <h3>WhatsApp</h3>
            <p>(81) 98488-5266</p>
          </div>

          <div className="contactCard">
            <h3>Email</h3>
            <p>contato@vivamais.com</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Viva Mais Seguros — Todos os direitos reservados.
        </p>
      </footer>

    </main>
  );
}