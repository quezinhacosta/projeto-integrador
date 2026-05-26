import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="container">

      {/* HEADER FIXO */}
      <header className="header">
        <div className="logo">Viva Mais</div>

        <nav className="nav">
          <a href="#about">Quem Somos</a>
          <a href="#simulation">Simulação</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className="headerRight">
          <ThemeToggle />
          <button className="headerButton">Solicitar Cotação</button>
        </div>
      </header>

      {/* BANNER 1 — Para Empresas */}
      <section className="hero" id="home">
        <Image
          src="/empresa-reuniao.png"
          alt="Soluções para empresas"
          fill
          priority
          className="heroImg"
        />

        <div className="heroOverlay"></div>

        <div className="heroContent">
          <span className="sectionTag">SOLUÇÕES EMPRESARIAIS</span>

          <h1>
            Proteção estratégica
            para o seu negócio crescer
          </h1>

          <p>
            Seguros completos para empresas de todos os portes com
            atendimento especializado e cobertura abrangente.
          </p>

          <div className="heroButtons">
            <Link href="/ParaEmpresa" className="primaryBtn">
              Conhecer Soluções
            </Link>
            <button className="secondaryBtn">Solicitar Cotação</button>
          </div>
        </div>

        <div className="scrollIndicator">
          <span>ROLAR</span>
          <div className="scrollArrow"></div>
        </div>
      </section>

      {/* BANNER 2 — Principal */}
      <section className="hero" id="hero-principal">
        <Image
          src="/banner.png"
          alt="Viva Mais Seguros"
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
            rápido e confiável. 28 anos cuidando de quem importa.
          </p>

          <div className="heroButtons">
            <button className="primaryBtn">Fazer Simulação</button>
            <button className="secondaryBtn">Conhecer Serviços</button>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about" id="about">

        <div className="aboutText">
          <span className="sectionTag">SOBRE NÓS</span>

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


      </section>

      {/* ESTATÍSTICAS DA EMPRESA */}
      <div className="statsHome">

        <div className="statHomeCard">
          <h3>25k+</h3>
          <p>Clientes ao longo da história</p>
        </div>

        <div className="statHomeCard">
          <h3>80%</h3>
          <p>Taxa de satisfação</p>
        </div>

        <div className="statHomeCard">
          <h3>28</h3>
          <p>Anos no mercado</p>
        </div>

      </div>

      {/* SIMULAÇÃO */}
      <section className="simulation" id="simulation">

        <div className="videoContainer">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vídeo Simulação Viva Mais"
            allowFullScreen
          ></iframe>
        </div>

        <div className="simText">
          <span className="sectionTag">SIMULAÇÃO</span>

          <h2>Veja Como Funciona</h2>

          <p>
            Descubra como funciona o processo de contratação
            e conheça as vantagens de ter a Viva Mais ao seu lado.
          </p>

          <button className="primaryBtn">Simular agora</button>
        </div>

      </section>

      {/* SERVIÇOS */}
      <section className="services" id="services">

        <span className="sectionTag">SERVIÇOS</span>

        <h2>Conheça nossos seguros</h2>

        <div className="cards">

          <Link href="/ParaVoce" className="card">
            <h3>Para Você</h3>
            <p>Seguro Automotivo, Seguro de Viagem e Plano de Saúde.</p>
          </Link>

          <Link href="/ParaCasa" className="card">
            <h3>Para sua Casa</h3>
            <p>Seguro Residencial, Proteção Familiar e Seguro de Eletrônicos.</p>
          </Link>

          <Link href="/ParaEmpresa" className="card">
            <h3>Para Empresas</h3>
            <p>Saúde Empresarial, Seguro Garantia e Seguro de Frota.</p>
          </Link>

        </div>

      </section>

      {/* CONTATO */}
      <section className="contact" id="contact">

        <span className="sectionTag">CONTATO</span>

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
        <p>© 2026 Viva Mais Seguros — Todos os direitos reservados.</p>
      </footer>

    </main>
  );
}
