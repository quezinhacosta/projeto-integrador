import Image from "next/image";
import Link from "next/link";
import "./page.css";
import ThemeToggle from "../components/ThemeToggle";

export default function ParaEmpresa() {
  return (
    <main className="enterpriseContainer">

      {/* HERO */}
      <section className="enterpriseHero">

        <Image
          src="/empresa-reuniao.png"
          alt="Seguro empresarial"
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
          <span className="tag">SOLUÇÕES EMPRESARIAIS</span>

          <h1>
            Proteção inteligente
            para empresas modernas
          </h1>

          <p>
            Segurança patrimonial, suporte estratégico e soluções
            completas para proteger o crescimento do seu negócio.
          </p>

          <button className="heroButton">Solicitar Consultoria</button>
        </div>

      </section>

      {/* SERVIÇOS */}
      <section className="servicesSection">

        <div className="sectionTitle">
          <h2>Seguros Empresariais</h2>
        </div>

        <div className="servicesGrid">

          <div className="serviceCard">
            <h3>Seguro Saúde Empresarial</h3>
            <p>Planos de saúde personalizados para colaboradores e equipes de todos os portes.</p>
          </div>

          <div className="serviceCard">
            <h3>Seguro Garantia</h3>
            <p>Proteção para contratos, licitações e obrigações contratuais da sua empresa.</p>
          </div>

          <div className="serviceCard">
            <h3>Seguro de Frota</h3>
            <p>Cobertura completa para veículos empresariais com assistência 24h em todo Brasil.</p>
          </div>

        </div>

      </section>

      {/* DIFERENCIAIS */}
      <section className="benefitsSection">

        <div className="benefitsText">
          <h2>Soluções estratégicas para empresas de todos os portes</h2>

          <p>
            Atuamos com foco em prevenção, suporte rápido
            e atendimento personalizado para garantir estabilidade
            e segurança empresarial.
          </p>

          <ul>
            <li>✔ Atendimento corporativo especializado</li>
            <li>✔ Coberturas personalizadas</li>
            <li>✔ Gestão de riscos empresariais</li>
            <li>✔ Suporte ágil e eficiente 24h</li>
          </ul>
        </div>

      </section>

      {/* ESTATÍSTICAS */}
      <section className="statsSection">

        <div className="statsCard">
          <h3>25k+</h3>
          <p>Clientes na História</p>
        </div>

        <div className="statsCard">
          <h3>80%</h3>
          <p>Satisfação dos Clientes</p>
        </div>

        <div className="statsCard">
          <h3>28</h3>
          <p>Anos no Mercado</p>
        </div>

      </section>

      {/* CTA */}
      <section className="ctaSection">

        <div className="ctaBox">
          <h2>Fortaleça a segurança do seu negócio</h2>
          <p>
            Descubra soluções empresariais modernas e eficientes
            para sua empresa crescer com tranquilidade.
          </p>
          <a
            href="https://wa.me/5581984885266"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <button>Falar com Especialista</button>
          </a>
        </div>

      </section>

    </main>
  );
}
