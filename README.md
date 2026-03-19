# Tech Tools Hub 🚀

**O seu guia interativo e prático de comandos essenciais para o dia a dia.**

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-green)
![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)

## 🎯 Objetivo

O **Tech Tools Hub** é um portal centralizado para desenvolvedores que desejam acesso rápido a comandos de diversas ferramentas (Docker, Git, Kubernetes, etc.). O foco é na clareza, rapidez e utilidade prática, eliminando a necessidade de navegar por documentações extensas para tarefas simples.

Aqui a informação é **direta**, **clara** e **em português**.

---

## ✨ Funcionalidades

- 📚 **Catálogo Organizado**: Ferramentas separadas por categorias (DevOps, Frontend, Database, etc.).
- ⚡ **Busca Poderosa**: Encontre qualquer comando instantaneamente (Atalho: `/`).
- ⭐ **Favoritos**: Salve seus comandos mais utilizados para acesso rápido no seu perfil.
- 🛠️ **Gerador de Comandos**: Customiza comandos complexos com parâmetros dinâmicos.
- 👁️ **Visualizador de Comandos**: Entenda a estrutura dos comandos com realce visual.
- 💡 **Dica Diária**: Aprenda algo novo todos os dias com o card de dicas na home.
- 🤖 **Explicação Inteligente**: Botão especializado que detalha o funcionamento de cada parte do comando.
- 🔐 **Autenticação Segura**: Login via GitHub ou Google para persistir seus favoritos e preferências.
- 📝 **Sugestão de Ferramentas**: Envie sugestões de novos comandos diretamente pela plataforma.
- 🌙 **Dark Mode**: Experiência visual confortável para qualquer horário.
- 📋 **Copy & Paste**: Copie comandos com um único clique.

---

## 📁 Estrutura de Pastas

Abaixo está a organização principal do projeto:

```text
tech-tools-hub/
├── public/                 # Arquivos estáticos (ícones, imagens, logo)
├── src/
│   ├── app/                # Rotas do Next.js (App Router)
│   │   ├── api/            # Endpoints da API (Ex: Auth)
│   │   ├── profile/        # Página de perfil do usuário (Favoritos)
│   │   └── tool/           # Rotas dinâmicas para detalhes de cada ferramenta
│   ├── components/         # Componentes React reutilizáveis e modulares
│   │   └── auth/           # UI relacionada à autenticação (Botões de login, perfil)
│   ├── context/            # Gerenciamento de estado global (Context API)
│   ├── data/               # "Banco de dados" local (Dicas e Ferramentas)
│   ├── hooks/              # Hooks customizados (Ex: useFavorites)
│   ├── types/              # Definições de interfaces TypeScript
│   ├── auth.ts             # Configuração central do NextAuth.js
│   ├── globals.css         # Estilos globais e configurações do Tailwind v4
│   └── layout.tsx          # Layout principal da aplicação
├── .env                    # Variáveis de ambiente (Chaves de API, Secret)
├── next.config.ts          # Configurações do framework Next.js
├── package.json            # Scripts e dependências do projeto
└── tailwind.config.ts      # Tokens e temas do Tailwind CSS
```

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js 15+](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)**
- **[NextAuth.js v5](https://authjs.dev/)** (Autenticação)
- **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização de alta performance)
- **[Framer Motion](https://www.framer.com/motion/)** (Animações fluidas)
- **[Lucide React](https://lucide.dev/)** (Iconografia moderna)

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lazaaro01/Tech-Tools-Hub
   cd Tech-Tools-Hub
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` baseado no `.env.example` e preencha as credenciais do GitHub/Google Auth.

4. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse:** `http://localhost:3000`

---

## 🤝 Como Contribuir

Sinta-se à vontade para abrir Issues ou Pull Requests adicionando novas ferramentas ou comandos. Sua contribuição ajuda a manter a comunidade atualizada!

---
Feito com 💜 para facilitar a vida do desenvolvedor.