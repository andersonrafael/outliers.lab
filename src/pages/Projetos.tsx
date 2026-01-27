import { Link } from "react-router-dom";
import { FolderGit2, TrendingUp, PieChart } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import FadeInSection from "../components/FadeInSection";

interface ProjetoItem {
  icon: typeof FolderGit2;
  title: string;
  description: string;
  tag: string;
}

const projetos: ProjetoItem[] = [
  {
    icon: FolderGit2,
    title: "Análise de Vendas",
    description:
      "ETL, dashboards e insights para decisão comercial.",
    tag: "BI · SQL",
  },
  {
    icon: TrendingUp,
    title: "Previsão de Churn",
    description:
      "Modelo preditivo para retenção de clientes.",
    tag: "Python · ML",
  },
  {
    icon: PieChart,
    title: "Segmentação de Clientes",
    description:
      "Clustering e personas para marketing e produto.",
    tag: "Análise · Estatística",
  },
];

export default function Projetos() {
  return (
    <main className="min-h-screen pt-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#00d4ff] font-semibold uppercase tracking-wider text-sm mb-4">
              Portfólio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] mb-6">
              Projetos
            </h1>
            <p className="text-[#94a3b8] text-lg">
              Exemplos de projetos que você pode desenvolver na mentoria e usar
              no seu portfólio.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetos.map((item, i) => (
            <FadeInSection key={item.title} delay={120 * (i + 1)}>
              <Card>
                <span className="text-[#00d4ff]/80 text-xs font-medium">
                  {item.tag}
                </span>
                <item.icon
                  className="text-[#00d4ff] my-4"
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
          <div className="mt-16 text-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                Quero fazer projetos como estes
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
