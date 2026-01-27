# Outliers.Lab — Landing Page

Landing page da **Outliers.Lab**, mentoria de dados. Projeto moderno com Vite, React, TypeScript, Tailwind CSS, React Router e Context API.

## Identidade visual

- **Estilo:** moderno, tecnológico, premium  
- **Cores:** azul marinho profundo (`#0a1628`), cinza grafite (`#2d3748`) e detalhes em ciano neon (`#00d4ff`)  
- **Tipografia:** Inter (sans-serif)

## Pré-requisitos

- Node.js 18+
- npm ou yarn

## Instalação

```bash
# Clonar ou acessar o repositório
cd testeCursor

# Instalar dependências
npm install

# Desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando        | Descrição                |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build`| Build para produção      |
| `npm run preview` | Preview do build     |
| `npm run lint` | Executar ESLint         |

## Arquitetura

### Estrutura de diretórios (`src/`)

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Button.tsx    # Botão com variantes (primary, secondary, outline, ghost)
│   ├── Card.tsx      # Card com hover opcional
│   ├── FadeInSection.tsx  # Wrapper para animação fade-in (useEffect)
│   ├── Footer.tsx    # Rodapé com links e contato
│   └── Navbar.tsx    # Navegação fixa + menu mobile (Context)
├── contexts/
│   └── AppContext.tsx    # Estado global: menu mobile, tema
├── pages/
│   ├── Home.tsx      # Página inicial
│   ├── Sobre.tsx     # Sobre o Lab
│   ├── Servicos.tsx  # Serviços da mentoria
│   ├── Projetos.tsx  # Projetos/portfólio
│   └── Contato.tsx   # Formulário de contato
├── routes/
│   └── AppRoutes.tsx # Configuração do React Router
├── App.tsx           # Layout: Navbar + Routes + Footer
├── main.tsx          # Entry point
└── index.css         # Tailwind + variáveis CSS
```

### Stack

- **Vite** — build e dev server  
- **React 19** + **TypeScript** — UI e tipagem  
- **Tailwind CSS v4** — estilos (plugin `@tailwindcss/vite`)  
- **React Router v7** — rotas SPA  
- **Lucide React** — ícones  
- **Context API** — estado do menu mobile e tema  

### Fluxo de estado

- `AppContext` gerencia `isMenuOpen` (menu mobile) e `theme`.  
- `Navbar` usa `useApp()` para abrir/fechar o menu em telas pequenas.  
- Rotas em `AppRoutes`: `/`, `/sobre`, `/servicos`, `/projetos`, `/contato`.

### Animações

- `FadeInSection`: usa `useEffect` para aplicar fade-in + leve translate ao montar.  
- `delay` opcional (ms) para escalonar a entrada das seções.  
- Transição via classes Tailwind (`opacity`, `translate-y`, `duration-700`).

## Build para produção

```bash
npm run build
```

Saída em `dist/`. Para preview:

```bash
npm run preview
```

## Deploy no GitHub Pages

O projeto está configurado para fazer deploy automático no GitHub Pages usando GitHub Actions.

### Passos para fazer o deploy:

1. **Criar o repositório no GitHub:**
   - Acesse [GitHub](https://github.com) e crie um novo repositório
   - **Importante:** Se o nome do repositório for diferente de `testeCursor`, edite o arquivo `vite.config.ts` e altere a variável `repositoryName`

2. **Subir o código para o GitHub:**
   ```bash
   # Se ainda não inicializou o git
   git init
   git add .
   git commit -m "Initial commit"
   
   # Adicione o repositório remoto (substitua SEU-USUARIO pelo seu usuário do GitHub)
   git remote add origin https://github.com/SEU-USUARIO/testeCursor.git
   git branch -M main
   git push -u origin main
   ```

3. **Habilitar GitHub Pages:**
   - Vá em **Settings** > **Pages** no seu repositório
   - Em **Source**, selecione **GitHub Actions**
   - Salve as configurações

4. **Deploy automático:**
   - Toda vez que você fizer `git push` para a branch `main` ou `master`, o GitHub Actions fará o deploy automaticamente
   - O site estará disponível em: `https://SEU-USUARIO.github.io/testeCursor/`
   - O deploy leva alguns minutos na primeira vez

### Deploy manual (alternativa):

Se preferir fazer deploy manual:

```bash
npm run build
# Depois, faça upload da pasta dist/ para o GitHub Pages
```

### Nota importante:

- O arquivo `vite.config.ts` está configurado para usar `/testeCursor/` como base path
- Se você mudar o nome do repositório, atualize a variável `repositoryName` no `vite.config.ts`
- O arquivo `public/404.html` garante que o React Router funcione corretamente no GitHub Pages

## Licença

Projeto de uso interno / demonstração.
