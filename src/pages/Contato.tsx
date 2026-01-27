import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import FadeInSection from "../components/FadeInSection";

export interface ContatoFormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const [form, setForm] = useState<ContatoFormData>({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contato enviado:", form);
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <main className="min-h-screen pt-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#00d4ff] font-semibold uppercase tracking-wider text-sm mb-4">
              Fale conosco
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#e2e8f0] mb-6">
              Contato
            </h1>
            <p className="text-[#94a3b8] text-lg">
              Quer saber mais sobre a mentoria? Envie sua mensagem e retornaremos
              em breve.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-xl mx-auto">
          <FadeInSection delay={150}>
            <Card hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-[#94a3b8] text-sm font-medium mb-2"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0a1628]/60 border border-[#2d3748] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#94a3b8] text-sm font-medium mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0a1628]/60 border border-[#2d3748] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-[#94a3b8] text-sm font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a1628]/60 border border-[#2d3748] text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar mensagem
                </Button>
              </form>
            </Card>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="mt-8 flex items-center justify-center gap-2 text-[#94a3b8]">
              <Mail size={18} />
              <a
                href="mailto:contato@outlierslab.com"
                className="text-[#00d4ff] hover:underline"
              >
                contato@outlierslab.com
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
