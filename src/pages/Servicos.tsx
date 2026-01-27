import { Link } from "react-router-dom";
import {
  Database,
  LineChart,
  Code2,
  MessageCircle,
  Briefcase,
  BookOpen,
} from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import FadeInSection from "../components/FadeInSection";

interface ServicoItem {
  icon: typeof Database;
  title: string;
  description: string;
}

const servicos: ServicoItem[] = [
  {
    icon: Database,
    title: "Fundamentos de Dados",
    description:
      "SQL, modelagem e engenharia de dados para bases sólidas.",
  },
  {
    icon: LineChart,
    title: "Análise e BI",
    description:
      "Excel, Power BI, Looker e dashboards para decisão.",
  },
  {
    icon: Code2,
    title: "Python para Dados",
    description:
      "Pandas, estatística e visualização com código.",
  },
  {
    icon: MessageCircle,
    title: "Mentoria 1:1",
    description:
      "Sessões individuais para carreira e projetos.",
  },
  {
    icon: Briefcase,
    title: "Projetos Práticos",
    description:
      "Cases reais para montar portfólio e GitHub.",
  },
  {
    icon: BookOpen,
    title: "Material Exclusivo",
    description:
      "Playlists, notas e roteiros de estudo.",
  },
];

export default function Servicos() {
  return (
    <main className="min-h-screen pt-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#00d4ff] font-semibold uppercase tracking-wider text-sm mb-4">
              O que oferecemos
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] mb-6">
              Serviços
            </h1>
            <p className="text-[#94a3b8] text-lg">
              Programa completo de mentoria em dados, do básico ao avançado, com
              foco em carreira e portfólio.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((item, i) => (
            <FadeInSection key={item.title} delay={80 * (i + 1)}>
              <Card>
                <item.icon
                  className="text-[#00d4ff] mb-4"
                  size={28}
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

        <FadeInSection delay={600}>
          <div className="mt-16 text-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                Saber mais e começar
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
