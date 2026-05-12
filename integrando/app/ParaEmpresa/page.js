import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function ParaEmpresa() {
  return (
    <main className="enterpriseContainer">

      {/* HERO */}

      <section className="enterpriseHero">

        <Image
          src="/empresa-banner.jpg"
          alt="Seguro empresarial"
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
            SOLUÇÕES EMPRESARIAIS
          </span>

          <h1>
            Proteção inteligente
            para empresas modernas
          </h1>

          <p>
            Segurança patrimonial, suporte estratégico e soluções
            completas para proteger o crescimento do seu negócio.
          </p>

          <button className="heroButton">
            Solicitar Consultoria
          </button>

        </div>

      </section>

      {/* SERVIÇOS */}

      <section className="servicesSection">

        <div className="sectionTitle">

          <span>NOSSAS SOLUÇÕES</span>

          <h2>
            Seguros Empresariais
          </h2>

        </div>

        <div className="servicesGrid">

          <div className="serviceCard">

            <Image
              src="/empresa.png"
              alt="Seguro empresarial"
              width={80}
              height={80}
            />

            <h3>Seguro Empresarial</h3>

            <p>
              Proteção para patrimônio, equipamentos e estrutura da empresa.
            </p>

          </div>

          <div className="serviceCard">

            <Image
              src="/funcionarios.png"
              alt="Benefícios corporativos"
              width={80}
              height={80}
            />

            <h3>Benefícios Corporativos</h3>

            <p>
              Planos personalizados para colaboradores e equipes.
            </p>

          </div>

          <div className="serviceCard">

            <Image
              src="/cyber.png"
              alt="Segurança digital"
              width={80}
              height={80}
            />

            <h3>Proteção Digital</h3>

            <p>
              Cobertura contra riscos tecnológicos e ataques cibernéticos.
            </p>

          </div>

        </div>

      </section>

      {/* DIFERENCIAIS */}

      <section className="benefitsSection">

        <div className="benefitsImage">

          <Image
            src="/empresa-reuniao.jpg"
            alt="Equipe empresarial"
            width={550}
            height={550}
          />

        </div>

        <div className="benefitsText">

          <span className="tag">
            POR QUE ESCOLHER A VIVA MAIS
          </span>

          <h2>
            Soluções estratégicas para empresas de todos os portes
          </h2>

          <p>
            Atuamos com foco em prevenção, suporte rápido
            e atendimento personalizado para garantir estabilidade
            e segurança empresarial.
          </p>

          <ul>
            <li>✔ Atendimento corporativo especializado</li>
            <li>✔ Coberturas personalizadas</li>
            <li>✔ Gestão de riscos empresariais</li>
            <li>✔ Suporte ágil e eficiente</li>
          </ul>

        </div>

      </section>

      {/* ESTATÍSTICAS */}

      <section className="statsSection">

        <div className="statsCard">

          <h3>+500</h3>
          <p>Empresas Protegidas</p>

        </div>

        <div className="statsCard">

          <h3>98%</h3>
          <p>Satisfação dos Clientes</p>

        </div>

        <div className="statsCard">

          <h3>24h</h3>
          <p>Suporte Especializado</p>

        </div>

      </section>

      {/* CTA */}

      <section className="ctaSection">

        <div className="ctaBox">

          <h2>
            Fortaleça a segurança do seu negócio
          </h2>

          <p>
            Descubra soluções empresariais modernas e eficientes
            para sua empresa crescer com tranquilidade.
          </p>

          <button>
            Falar com Especialista
          </button>

        </div>

      </section>

    </main>
  );
}