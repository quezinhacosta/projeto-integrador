import Image from "next/image";
import Link from "next/link";
import "./page.css";

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

          <Link href="/" className="backButton">
            ← Voltar
          </Link>

          <div className="logo">
            Viva Mais
          </div>

        </header>

        <div className="heroContent">

          <span className="tag">
            PROTEÇÃO PESSOAL
          </span>

          <h1>
            Segurança e tranquilidade
            para cada momento da sua vida
          </h1>

          <p>
            Conheça nossos planos personalizados para proteger
            você, sua família, sua saúde e seu futuro.
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
          <h2>Seguros para Você</h2>
        </div>

        <div className="servicesGrid">

          <div className="serviceCard">

            <Image
              src="/vida.png"
              alt="Seguro de vida"
              width={80}
              height={80}
            />

            <h3>Seguro de Vida</h3>

            <p>
              Garanta estabilidade financeira e proteção
              para quem você ama.
            </p>

          </div>

          <div className="serviceCard">

            <Image
              src="/saude.png"
              alt="Plano de saúde"
              width={80}
              height={80}
            />

            <h3>Plano de Saúde</h3>

            <p>
              Atendimento médico de qualidade com cobertura
              completa para seu bem-estar.
            </p>

          </div>

          <div className="serviceCard">

            <Image
              src="/viagem.png"
              alt="Seguro viagem"
              width={80}
              height={80}
            />

            <h3>Seguro Viagem</h3>

            <p>
              Viaje com tranquilidade e assistência em qualquer lugar.
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
            Atendimento humanizado e soluções inteligentes
          </h2>

          <p>
            Nossa equipe oferece suporte especializado para encontrar
            o plano ideal para cada perfil.
          </p>

          <ul>
            <li>✔ Atendimento rápido e personalizado</li>
            <li>✔ Coberturas flexíveis</li>
            <li>✔ Assistência completa</li>
            <li>✔ Segurança e confiança</li>
          </ul>

        </div>

        <div className="benefitsImage">

          <Image
            src="/cliente-feliz.jpg"
            alt="Cliente feliz"
            width={500}
            height={500}
          />

        </div>

      </section>

      {/* CTA */}

      <section className="ctaSection">

        <div className="ctaBox">

          <h2>
            Proteja o que realmente importa
          </h2>

          <p>
            Fale com nossa equipe e encontre o seguro ideal para você.
          </p>

          <button>
            Entrar em Contato
          </button>

        </div>

      </section>

    </main>
  );
}