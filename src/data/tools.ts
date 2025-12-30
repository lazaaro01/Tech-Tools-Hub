import { Tool } from "@/types/Tool";

export const tools: Tool[] = [
  {
    slug: "docker",
    name: "Docker",
    description: "Plataforma para criar, distribuir e rodar containers.",
    category: "DevOps",
    commands: [
      { title: "Listar containers", cmd: "docker ps" },
      { title: "Listar todos containers", cmd: "docker ps -a" },
      { title: "Build da imagem", cmd: "docker build -t app ." },
      { title: "Rodar container", cmd: "docker run -p 3000:3000 app" },
      { title: "Parar container", cmd: "docker stop <id>" },
      { title: "Remover container", cmd: "docker rm <id>" },
      { title: "Remover imagem", cmd: "docker rmi <id>" },
      { title: "Logs do container", cmd: "docker logs -f <id>" }
    ],
    docs: "https://docs.docker.com"
  },
  {
    slug: "git",
    name: "Git",
    description: "Sistema de controle de versão distribuído.",
    category: "Version Control",
    commands: [
      { title: "Iniciar repositório", cmd: "git init" },
      { title: "Clonar repositório", cmd: "git clone <url>" },
      { title: "Status dos arquivos", cmd: "git status" },
      { title: "Adicionar arquivos", cmd: "git add ." },
      { title: "Commitar", cmd: "git commit -m 'mensagem'" },
      { title: "Enviar alterações", cmd: "git push origin main" },
      { title: "Baixar alterações", cmd: "git pull origin main" },
      { title: "Criar branch", cmd: "git checkout -b <nome>" },
      { title: "Mudar de branch", cmd: "git checkout <nome>" },
      { title: "Log de commits", cmd: "git log --oneline" }
    ],
    docs: "https://git-scm.com/doc"
  },
  {
    slug: "kubernetes",
    name: "Kubernetes",
    description: "Orquestrador de containers automatizado.",
    category: "DevOps",
    commands: [
      { title: "Listar pods", cmd: "kubectl get pods" },
      { title: "Listar services", cmd: "kubectl get services" },
      { title: "Logs do pod", cmd: "kubectl logs <pod-name>" },
      { title: "Aplicar manifesto", cmd: "kubectl apply -f arquivo.yaml" },
      { title: "Descrever recurso", cmd: "kubectl describe pod <pod-name>" },
      { title: "Deletar recurso", cmd: "kubectl delete -f arquivo.yaml" }
    ],
    docs: "https://kubernetes.io/docs/home/"
  },
  {
    slug: "postman",
    name: "Postman",
    description: "Ferramenta para testar APIs de forma simples e poderosa.",
    category: "Testing",
    commands: [
      { title: "Criar nova requisição", cmd: "N/A - Interface gráfica" }
    ],
    docs: "https://www.postman.com/"
  },
  {
    slug: "prisma",
    name: "Prisma ORM",
    description: "ORM moderno para Node.js com migrations automáticas.",
    category: "Database",
    commands: [
      { title: "Inicializar", cmd: "npx prisma init" },
      { title: "Gerar client", cmd: "npx prisma generate" },
      { title: "Rodar migrations (dev)", cmd: "npx prisma migrate dev" },
      { title: "Visualizar dados (Studio)", cmd: "npx prisma studio" },
      { title: "Pull do schema", cmd: "npx prisma db pull" }
    ],
    docs: "https://www.prisma.io/docs"
  },
  {
    slug: "linux",
    name: "Linux CLI",
    description: "Comandos essenciais para terminal Linux/Unix.",
    category: "OS / Terminal",
    commands: [
      { title: "Listar arquivos", cmd: "ls -la" },
      { title: "Mudar diretório", cmd: "cd <path>" },
      { title: "Copiar arquivo", cmd: "cp source dest" },
      { title: "Mover/Renomear", cmd: "mv source dest" },
      { title: "Remover arquivo", cmd: "rm -rf <path>" },
      { title: "Ver processos", cmd: "htop" },
      { title: "Permissões", cmd: "chmod +x arquivo" },
      { title: "Proprietário", cmd: "chown user:group arquivo" },
      { title: "Busca em arquivos", cmd: "grep -r 'texto' ." }
    ],
    docs: "https://linuxcommand.org/"
  },
  {
    slug: "npm",
    name: "NPM",
    description: "Gerenciador de pacotes padrão do Node.js.",
    category: "Development",
    commands: [
      { title: "Instalar dependências", cmd: "npm install" },
      { title: "Instalar pacote", cmd: "npm install <pacote>" },
      { title: "Instalar dev dep", cmd: "npm i -D <pacote>" },
      { title: "Rodar script", cmd: "npm run <script>" },
      { title: "Atualizar pacotes", cmd: "npm update" }
    ],
    docs: "https://docs.npmjs.com/"
  },
  {
    slug: "react",
    name: "React",
    description: "Biblioteca para interfaces de usuário.",
    category: "Frontend",
    commands: [
      { title: "Criar app (Vite)", cmd: "npm create vite@latest my-app -- --template react-ts" },
      { title: "Criar app (Next.js)", cmd: "npx create-next-app@latest" }
    ],
    docs: "https://react.dev/"
  },
  {
    slug: "vue",
    name: "Vue.js",
    description: "Framework progressivo para construir interfaces de usuário.",
    category: "Frontend",
    commands: [
      { title: "Criar projeto", cmd: "npm create vue@latest" },
      { title: "Instalar Vue CLI", cmd: "npm install -g @vue/cli" },
      { title: "Criar app com CLI", cmd: "vue create my-app" }
    ],
    docs: "https://vuejs.org/"
  },
  {
    slug: "angular",
    name: "Angular",
    description: "Framework para aplicações web escaláveis.",
    category: "Frontend",
    commands: [
      { title: "Instalar CLI", cmd: "npm install -g @angular/cli" },
      { title: "Criar novo projeto", cmd: "ng new my-app" },
      { title: "Servir aplicação", cmd: "ng serve" }
    ],
    docs: "https://angular.io/"
  },
  {
    slug: "svelte",
    name: "Svelte",
    description: "Framework para construir interfaces de usuário rápidas.",
    category: "Frontend",
    commands: [
      { title: "Criar projeto", cmd: "npm create svelte@latest my-app" },
      { title: "Instalar SvelteKit", cmd: "npm create svelte@latest my-app -- --template svelte-kit" }
    ],
    docs: "https://svelte.dev/"
  },
  {
    slug: "nextjs",
    name: "Next.js",
    description: "Framework React para produção com SSR e SSG.",
    category: "Frontend",
    commands: [
      { title: "Criar app", cmd: "npx create-next-app@latest" },
      { title: "Rodar em dev", cmd: "npm run dev" },
      { title: "Build para produção", cmd: "npm run build" }
    ],
    docs: "https://nextjs.org/"
  },
  {
    slug: "vite",
    name: "Vite",
    description: "Ferramenta de build rápida para projetos web modernos.",
    category: "Frontend",
    commands: [
      { title: "Criar projeto", cmd: "npm create vite@latest" },
      { title: "Rodar dev server", cmd: "npm run dev" },
      { title: "Build", cmd: "npm run build" }
    ],
    docs: "https://vitejs.dev/"
  },
  {
    slug: "tailwindcss",
    name: "Tailwind CSS",
    description: "Framework CSS utilitário para design rápido.",
    category: "Frontend",
    commands: [
      { title: "Instalar", cmd: "npm install -D tailwindcss" },
      { title: "Inicializar", cmd: "npx tailwindcss init" },
      { title: "Build CSS", cmd: "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch" }
    ],
    docs: "https://tailwindcss.com/"
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description: "Superset do JavaScript com tipagem estática.",
    category: "Frontend",
    commands: [
      { title: "Instalar global", cmd: "npm install -g typescript" },
      { title: "Compilar", cmd: "tsc arquivo.ts" },
      { title: "Inicializar projeto", cmd: "tsc --init" }
    ],
    docs: "https://www.typescriptlang.org/"
  },
  {
    slug: "nodejs",
    name: "Node.js",
    description: "Runtime JavaScript para backend.",
    category: "Backend",
    commands: [
      { title: "Ver versão", cmd: "node --version" },
      { title: "Rodar script", cmd: "node arquivo.js" },
      { title: "Iniciar REPL", cmd: "node" }
    ],
    docs: "https://nodejs.org/"
  },
  {
    slug: "express",
    name: "Express.js",
    description: "Framework minimalista para Node.js.",
    category: "Backend",
    commands: [
      { title: "Instalar", cmd: "npm install express" },
      { title: "Criar servidor básico", cmd: "node server.js" }
    ],
    docs: "https://expressjs.com/"
  },
  {
    slug: "django",
    name: "Django",
    description: "Framework web Python de alto nível.",
    category: "Backend",
    commands: [
      { title: "Instalar", cmd: "pip install django" },
      { title: "Criar projeto", cmd: "django-admin startproject myproject" },
      { title: "Rodar servidor", cmd: "python manage.py runserver" },
      { title: "Criar app", cmd: "python manage.py startapp myapp" }
    ],
    docs: "https://www.djangoproject.com/"
  },
  {
    slug: "flask",
    name: "Flask",
    description: "Framework web leve para Python.",
    category: "Backend",
    commands: [
      { title: "Instalar", cmd: "pip install flask" },
      { title: "Rodar app", cmd: "flask run" }
    ],
    docs: "https://flask.palletsprojects.com/"
  },
  {
    slug: "springboot",
    name: "Spring Boot",
    description: "Framework para aplicações Java empresariais.",
    category: "Backend",
    commands: [
      { title: "Criar projeto", cmd: "spring init --dependencies=web myproject" },
      { title: "Rodar aplicação", cmd: "mvn spring-boot:run" }
    ],
    docs: "https://spring.io/projects/spring-boot"
  },
  {
    slug: "rails",
    name: "Ruby on Rails",
    description: "Framework web full-stack para Ruby.",
    category: "Backend",
    commands: [
      { title: "Instalar Rails", cmd: "gem install rails" },
      { title: "Criar app", cmd: "rails new myapp" },
      { title: "Rodar servidor", cmd: "rails server" }
    ],
    docs: "https://rubyonrails.org/"
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    description: "Sistema de gerenciamento de banco de dados relacional.",
    category: "Database",
    commands: [
      { title: "Conectar", cmd: "psql -U username -d dbname" },
      { title: "Listar bancos", cmd: "psql -l" },
      { title: "Criar banco", cmd: "createdb mydb" }
    ],
    docs: "https://www.postgresql.org/docs/"
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    description: "Banco de dados NoSQL orientado a documentos.",
    category: "Database",
    commands: [
      { title: "Iniciar MongoDB", cmd: "mongod" },
      { title: "Conectar shell", cmd: "mongosh" },
      { title: "Listar bancos", cmd: "show dbs" }
    ],
    docs: "https://docs.mongodb.com/"
  },
  {
    slug: "redis",
    name: "Redis",
    description: "Armazenamento de dados em memória estruturado.",
    category: "Database",
    commands: [
      { title: "Iniciar Redis", cmd: "redis-server" },
      { title: "Conectar CLI", cmd: "redis-cli" },
      { title: "Set valor", cmd: "SET key value" },
      { title: "Get valor", cmd: "GET key" }
    ],
    docs: "https://redis.io/documentation"
  },
  {
    slug: "graphql",
    name: "GraphQL",
    description: "Linguagem de consulta para APIs.",
    category: "Backend",
    commands: [
      { title: "Instalar Apollo Server", cmd: "npm install apollo-server graphql" }
    ],
    docs: "https://graphql.org/"
  },
  {
    slug: "html-tips",
    name: "HTML Tips",
    description: "Dicas e tags HTML que muita gente esquece.",
    category: "Frontend",
    commands: [
      { title: "<details> e <summary>", cmd: "Cria um widget de disclosure que pode ser aberto/fechado. Ex: <details><summary>Título</summary>Conteúdo</details>" },
      { title: "<datalist>", cmd: "Fornece uma lista de opções pré-definidas para um <input>. Ex: <input list='opcoes'><datalist id='opcoes'><option value='Op1'></datalist>" },
      { title: "<progress>", cmd: "Representa o progresso de uma tarefa. Ex: <progress value='70' max='100'></progress>" },
      { title: "<meter>", cmd: "Representa uma medida escalar dentro de um intervalo conhecido. Ex: <meter value='0.8' min='0' max='1'></meter>" },
      { title: "<output>", cmd: "Representa o resultado de um cálculo. Ex: <output for='a b'>Resultado</output>" },
      { title: "<time>", cmd: "Representa uma data/hora. Ex: <time datetime='2023-12-30'>30 de dezembro</time>" },
      { title: "<mark>", cmd: "Destaca texto. Ex: <mark>texto destacado</mark>" },
      { title: "<cite>", cmd: "Cita uma fonte. Ex: <cite>Título do livro</cite>" },
      { title: "<abbr>", cmd: "Define uma abreviação. Ex: <abbr title='HyperText Markup Language'>HTML</abbr>" },
      { title: "<address>", cmd: "Define informações de contato. Ex: <address>Endereço aqui</address>" }
    ],
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    slug: "css-properties",
    name: "CSS Properties",
    description: "Propriedades CSS essenciais para tamanho, espaçamento e layout.",
    category: "Frontend",
    commands: [
      { title: "Box-sizing", cmd: "box-sizing: border-box; - Inclui padding e border na largura/altura total" },
      { title: "Flexbox - Container", cmd: "display: flex; justify-content: center; align-items: center;" },
      { title: "Grid Layout", cmd: "display: grid; grid-template-columns: 1fr 2fr; gap: 10px;" },
      { title: "Espaçamento - Margin", cmd: "margin: 10px 20px; (top/bottom right/left)" },
      { title: "Espaçamento - Padding", cmd: "padding: 15px; (todos os lados)" },
      { title: "Tamanho - Width/Height", cmd: "width: 100%; height: auto; max-width: 1200px;" },
      { title: "Positioning", cmd: "position: relative; top: 10px; left: 20px;" },
      { title: "Z-index", cmd: "z-index: 10; - Controla a ordem de empilhamento" },
      { title: "Overflow", cmd: "overflow: hidden; - Controla conteúdo que excede o container" },
      { title: "Border-radius", cmd: "border-radius: 8px; - Cantos arredondados" },
      { title: "Box-shadow", cmd: "box-shadow: 0 4px 8px rgba(0,0,0,0.1); - Sombra" },
      { title: "Transition", cmd: "transition: all 0.3s ease; - Animações suaves" },
      { title: "Media Queries", cmd: "@media (max-width: 768px) { /* estilos */ } - Design responsivo" }
    ],
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    slug: "bootstrap",
    name: "Bootstrap",
    description: "Framework CSS para desenvolvimento rápido de interfaces responsivas.",
    category: "Frontend",
    commands: [
      { title: "Instalar via CDN", cmd: "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>" },
      { title: "Container", cmd: "<div class='container'> - Centraliza e limita largura" },
      { title: "Grid System", cmd: "<div class='row'><div class='col-md-6'>Coluna</div></div> - Sistema de grid responsivo" },
      { title: "Botões", cmd: "<button class='btn btn-primary'>Botão</button> - Estilos pré-definidos" },
      { title: "Cards", cmd: "<div class='card'><div class='card-body'>Conteúdo</div></div> - Componente de cartão" },
      { title: "Navbar", cmd: "<nav class='navbar navbar-expand-lg navbar-light bg-light'> - Barra de navegação" },
      { title: "Modal", cmd: "<div class='modal'> - Janela modal" },
      { title: "Formulários", cmd: "<form><div class='mb-3'><input class='form-control'></div></form> - Estilos para forms" },
      { title: "Utilities - Espaçamento", cmd: "class='mt-3 p-2' - Margin top e padding (m- margin, p- padding, t- top, etc.)" },
      { title: "Utilities - Cores", cmd: "class='bg-primary text-white' - Background e texto" },
      { title: "Responsive Breakpoints", cmd: "d-none d-md-block - Esconde em mobile, mostra em md+" }
    ],
    docs: "https://getbootstrap.com/"
  }
];