import { Link } from "react-router-dom";
import { Users, Award, Lightbulb } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import FadeInSection from "../components/FadeInSection";

export default function Sobre() {
  return (
    <main className="min-h-screen pt-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#00d4ff] font-semibold uppercase tracking-wider text-sm mb-4">
              Sobre nós
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] mb-6">
              O que é o Outliers.Lab?
            </h1>
            <p className="text-[#94a3b8] text-lg">
              Uma mentoria de dados para quem quer sair da curva: aprender com
              quem já atua no mercado e construir uma carreira baseada em dados.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Users,
              title: "Comunidade",
              description:
                "Networking com profissionais de dados e mentores experientes.",
            },
            {
              icon: Award,
              title: "Excelência",
              description:
                "Método comprovado com foco em resultados e portfólio.",
            },
            {
              icon: Lightbulb,
              title: "Inovação",
              description:
                "Conteúdo atualizado com as tendências do mercado.",
            },
          ].map((item, i) => (
            <FadeInSection key={item.title} delay={120 * (i + 1)}>
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

        <FadeInSection delay={400}>
          <div className="flex justify-center">
            <Link to="/contato">
              <Button variant="primary" size="lg">
                Quero fazer parte
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
