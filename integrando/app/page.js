
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Viva Mais</div>
        <nav className="nav">
          <a>Home</a>
          <a>Quem somos</a>
          <a>Simulação</a>
          <a>Serviços</a>
          <a>Contato</a>
        </nav>
      </header>

      <section className="hero">
        <Image src="/banner.jpg" alt="" fill className="heroImg" />
      </section>

      <section className="about">
        <div className="aboutText">
          <h2>QUEM SOMOS</h2>
          <p>
            Somos uma corretora de seguros que une experiência, confiança e
            atendimento personalizado para cada cliente.
          </p>
          <p>
            Nossa missão é proteger sua vida, seu patrimônio e sua família com
            soluções completas e acessíveis.
          </p>
        </div>
        <div className="aboutImg">
          <Image src="/logo.png" alt="" width={250} height={250} />
        </div>
      </section>

      <section className="simulation">
        <div className="video">
          <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title=""
          ></iframe>
        </div>
        <div className="simText">
          <h2>VEJA UMA SIMULAÇÃO</h2>
        </div>
      </section>

      <section className="services">
        <h2>CONHEÇA NOSSOS SERVIÇOS</h2>
        <div className="cards">
          <div className="card">
            <Image src="/vida.png" alt="" width={80} height={80} />
            <p>Para você</p>
          </div>
          <div className="card">
            <Image src="/casa.png" alt="" width={80} height={80} />
            <p>Para sua casa</p>
          </div>
          <div className="card">
            <Image src="/empresa.png" alt="" width={80} height={80} />
            <p>Para Empresas</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>NOSSOS CONTATOS</h2>
        <div className="contactGrid">
          <p>Horário de Funcionamento</p>
          <p>Seg-Sex: 08h às 18h</p>
          <p>WhatsApp</p>
          <p>(81) 99999-9999</p>
          <p>Email</p>
          <p>contato@vivamais.com</p>
        </div>
      </section>
    </div>
  );
}