import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import Button from "./Button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const { state, toggleMenu, closeMenu } = useApp();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-[#2d3748]/40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-[#00d4ff] tracking-tight hover:text-[#22d3ee] transition-colors"
            onClick={closeMenu}
          >
            Outliers.<span className="text-[#e2e8f0]">Lab</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[#94a3b8] hover:text-[#00d4ff] font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link to="/contato">
              <Button variant="primary" size="sm">
                Fale conosco
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#94a3b8] hover:text-[#00d4ff] rounded-lg"
            aria-label={state.isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {state.isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {state.isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2d3748]/40">
            <div className="flex flex-col gap-4">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className="text-[#94a3b8] hover:text-[#00d4ff] font-medium py-2"
                >
                  {label}
                </Link>
              ))}
              <Link to="/contato" onClick={closeMenu}>
                <Button variant="primary" fullWidth>
                  Fale conosco
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
