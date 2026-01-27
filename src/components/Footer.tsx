import { Link } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";

const footerLinks = [
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2137] border-t border-[#2d3748]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              to="/"
              className="text-xl font-bold text-[#00d4ff] tracking-tight"
            >
              Outliers.<span className="text-[#e2e8f0]">Lab</span>
            </Link>
            <p className="mt-3 text-[#94a3b8] text-sm max-w-xs">
              Mentoria em dados. Transforme números em decisões.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#e2e8f0] mb-4">Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#94a3b8] hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#e2e8f0] mb-4">Contato</h4>
            <div className="flex gap-4">
              <a
                href="mailto:contato@outlierslab.com"
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                aria-label="E-mail"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#2d3748]/60 text-center text-[#64748b] text-sm">
          © {new Date().getFullYear()} Outliers.Lab. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
