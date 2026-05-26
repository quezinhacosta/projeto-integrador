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
          <a href="#chatbot">Chatbot</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>

  
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <Image
          src="/Gemini_Generated_Image_t6ip7xt6ip7xt6ip.png"
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
        </div>
      </section>
{/* SEÇÃO CHATBOT */}
<section className="chatbot-section" id="chatbot">
  <div className="chatbot-container">
    
    <div className="chatbot-content">
      <span className="sectionTag">ATENDIMENTO IA</span>
      <h2>Fale com o nosso Especialista Digital</h2>
      <p>
        Dúvidas sobre coberturas ou assistência? Nosso robô está pronto para 
        te ajudar agora mesmo. Clique na imagem abaixo para iniciar.
      </p>
    </div>

    <div className="chatbot-visual">
            <Link 
              href="https://canva.link/0f5h3uuhe5m8vz4"
              target="_blank"
              className="chatbot-link"
            >
              <Image
                src="/chatbot.png" // <-- Nome da imagem que você salvar na pasta public
                alt="Robô Chatbot Viva Mais"
                width={600}
                height={500}
                className="chatbot-img-float"
              />
              <div className="click-badge">Clique para falar!</div>
            </Link>
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
              Seguro Automotivo, Seguro de Viagem e Plano de Saúde.
            </p>
          </Link>

          <Link href="/ParaCasa" className="card">
            <h3>Para sua Casa</h3>

            <p>
              Seguro Residencial, Proteção Familiar e Seguro de Eletrônicos.
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
        <p className="aiNotice">
          As imagens utilizadas neste site foram geradas por inteligência artificial.
        </p>
      </footer>

    </main>
  );
}