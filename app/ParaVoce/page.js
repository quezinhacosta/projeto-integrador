import Image from "next/image";
import Link from "next/link";
import "./page.css";
import ThemeToggle from "../components/ThemeToggle";

export default function ParaVoce() {
  return (
    <main className="personalContainer">

      {/* HERO */}
      <section className="personalHero">

        <Image
          src="/seguro-pessoal-banner.jpg"
          alt="Seguro para você"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay"></div>

        <header className="heroHeader">
          <Link href="/" className="backButton">← Voltar</Link>
          <div className="headerRightHero">
            <ThemeToggle className="themeToggleHero" />
          </div>
        </header>

        <div className="heroContent">
          <span className="tag">PROTEÇÃO PESSOAL</span>

          <h1>
            Segurança e tranquilidade
            para cada momento da sua vida
          </h1>

          <p>
            Conheça nossos planos personalizados para proteger
            você, sua família, sua saúde e seu futuro.
          </p>

          <button className="heroButton">Solicitar Cotação</button>
        </div>

      </section>

      {/* SERVIÇOS */}
      <section className="servicesSection">

        <div className="sectionTitle">
          <h2>Seguros para Você</h2>
        </div>

        <div className="servicesGrid">

          <div className="serviceCard">
            <h3>Seguro Automotivo</h3>
            <p>Proteção completa para o seu veículo com assistência 24h em todo o Brasil.</p>
          </div>

          <div className="serviceCard">
            <h3>Seguro de Viagem</h3>
            <p>Viaje com tranquilidade e assistência completa em qualquer lugar do mundo.</p>
          </div>

          <div className="serviceCard">
            <h3>Plano de Saúde</h3>
            <p>Atendimento médico de qualidade com cobertura completa para seu bem-estar.</p>
          </div>

        </div>

      </section>

      {/* DIFERENCIAIS */}
      <section className="benefitsSection">

        <div className="benefitsText">
          <h2>Atendimento humanizado e soluções inteligentes</h2>

          <p>
            Nossa equipe oferece suporte especializado para encontrar
            o plano ideal para cada perfil.
          </p>

          <ul>
            <li>✔ Atendimento rápido e personalizado</li>
            <li>✔ Coberturas flexíveis</li>
            <li>✔ Assistência completa 24h</li>
            <li>✔ Segurança e confiança há 28 anos</li>
          </ul>
        </div>


      </section>

      {/* ESTATÍSTICAS */}
      <section className="statsSection">

        <div className="statsCard">
          <h3>25k+</h3>
          <p>Clientes Atendidos</p>
        </div>

        <div className="statsCard">
          <h3>80%</h3>
          <p>Taxa de Satisfação</p>
        </div>

        <div className="statsCard">
          <h3>28</h3>
          <p>Anos no Mercado</p>
        </div>

      </section>

      {/* CTA */}
      <section className="ctaSection">

        <div className="ctaBox">
          <h2>Proteja o que realmente importa</h2>
          <p>Fale com nossa equipe e encontre o seguro ideal para você.</p>
          <a
            href="https://wa.me/5581984885266"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <button>Entrar em Contato</button>
          </a>
        </div>

      </section>

    </main>
  );
}
