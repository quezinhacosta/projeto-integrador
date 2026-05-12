import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function ParaCasa() {
  return (
    <main className="homeContainer">

      {/* HERO */}

      <section className="homeHero">

        <Image
          src="/casa-banner.jpg"
          alt="Seguro residencial"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay"></div>

        {/* HEADER */}

        <header className="heroHeader">

          <Link href="/" className="backButton">
            ← Voltar
          </Link>

          <div className="logo">
            Viva Mais
          </div>

        </header>

        {/* HERO CONTENT */}

        <div className="heroContent">

          <span className="tag">
            PROTEÇÃO RESIDENCIAL
          </span>

          <h1>
            Segurança e tranquilidade
            para o seu lar
          </h1>

          <p>
            Proteja sua casa, seus bens e sua família com soluções
            modernas e coberturas completas para qualquer situação.
          </p>

          <button className="heroButton">
            Solicitar Cotação
          </button>

        </div>

      </section>

      {/* SERVIÇOS */}

      <section className="servicesSection">

        <div className="sectionTitle">

          <span>NOSSAS SOLUÇÕES</span>

          <h2>
            Seguros Residenciais
          </h2>

        </div>

        <div className="servicesGrid">

          <div className="serviceCard">

            <Image
              src="/casa.png"
              alt="Seguro residencial"
              width={80}
              height={80}
            />

            <h3>Seguro Residencial</h3>

            <p>
              Cobertura completa contra incêndios, roubos e danos elétricos.
            </p>

          </div>

          <div className="serviceCard">

            <Image
              src="/familia.png"
              alt="Proteção familiar"
              width={80}
              height={80}
            />

            <h3>Proteção Familiar</h3>

            <p>
              Segurança para sua família com assistência e suporte contínuo.
            </p>

          </div>

          <div className="serviceCard">

            <Image
              src="/assistencia.png"
              alt="Assistência residencial"
              width={80}
              height={80}
            />

            <h3>Assistência 24h</h3>

            <p>
              Atendimento rápido para emergências residenciais a qualquer hora.
            </p>

          </div>

        </div>

      </section>

      {/* DIFERENCIAIS */}

      <section className="benefitsSection">

        <div className="benefitsText">

          <span className="tag">
            DIFERENCIAIS
          </span>

          <h2>
            Seu patrimônio protegido
            com máxima confiança
          </h2>

          <p>
            Nossa missão é oferecer segurança para que você
            viva com tranquilidade e conforto em todos os momentos.
          </p>

          <ul>
            <li>✔ Cobertura personalizada</li>
            <li>✔ Atendimento humanizado</li>
            <li>✔ Assistência residencial 24h</li>
            <li>✔ Planos acessíveis e flexíveis</li>
          </ul>

        </div>

        <div className="benefitsImage">

          <Image
            src="/familia-casa.jpg"
            alt="Família feliz em casa"
            width={550}
            height={550}
          />

        </div>

      </section>

      {/* ESTATÍSTICAS */}

      <section className="statsSection">

        <div className="statsCard">

          <h3>+1.200</h3>
          <p>Residências Protegidas</p>

        </div>

        <div className="statsCard">

          <h3>24h</h3>
          <p>Assistência Residencial</p>

        </div>

        <div className="statsCard">

          <h3>98%</h3>
          <p>Clientes Satisfeitos</p>

        </div>

      </section>

      {/* CTA */}

      <section className="ctaSection">

        <div className="ctaBox">

          <h2>
            Proteja o lugar mais importante da sua vida
          </h2>

          <p>
            Solicite agora uma consultoria personalizada
            para encontrar o seguro ideal para sua casa.
          </p>

          <button>
            Falar com Especialista
          </button>

        </div>

      </section>

    </main>
  );
}