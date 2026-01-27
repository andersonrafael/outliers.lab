import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#00d4ff] font-semibold uppercase tracking-wider text-sm mb-4">
              Mentoria de Dados
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e2e8f0] leading-tight mb-6">
              Transforme dados em{" "}
              <span className="text-[#00d4ff]">decisões estratégicas</span>
            </h1>
            <p className="text-[#94a3b8] text-lg mb-10">
              Desenvolva habilidades em análise de dados, ciência de dados e
              inteligência de negócios com mentoria hands-on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button variant="primary" size="lg">
                  Começar agora
                </Button>
              </Link>
              <Link to="/sobre">
                <Button variant="outline" size="lg">
                  Conheça o Lab
                </Button>
              </Link>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: BarChart3,
              title: "Análise de Dados",
              description:
                "Domine ferramentas e métodos para extrair insights acionáveis.",
            },
            {
              icon: Target,
              title: "Foco em Carreira",
              description:
                "Mentoria alinhada aos seus objetivos profissionais.",
            },
            {
              icon: Zap,
              title: "Prática Contínua",
              description:
                "Projetos reais e desafios para consolidar o aprendizado.",
            },
          ].map((item, i) => (
            <FadeInSection key={item.title} delay={150 * (i + 1)}>
              <Card>
                <item.icon
                  className="text-[#00d4ff] mb-4"
                  size={32}
                  strokeWidth={1.5}
                />
                <h3 className="text-[#e2e8f0] font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#94a3b8] text-sm">{item.description}</p>
              </Card>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={500}>
          <div className="mt-20 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-[#00d4ff] font-semibold hover:text-[#22d3ee] transition-colors"
            >
              Ver todos os serviços
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
