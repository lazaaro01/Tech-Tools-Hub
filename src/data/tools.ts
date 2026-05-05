import { Tool } from "@/types/Tool";

export const tools: Tool[] = [
  {
    slug: "docker",
    name: "Docker",
    description: "Plataforma para criar, distribuir e rodar containers.",
    category: "DevOps",
    commands: [
      { title: "Listar containers", cmd: "docker ps", difficulty: "iniciante" },
      { title: "Listar todos containers", cmd: "docker ps -a", difficulty: "iniciante" },
      { title: "Build da imagem", cmd: "docker build -t app .", difficulty: "intermediario" },
      { title: "Rodar container", cmd: "docker run -p 3000:3000 app", difficulty: "iniciante" },
      { title: "Parar container", cmd: "docker stop <id>", difficulty: "iniciante" },
      { title: "Remover container", cmd: "docker rm <id>", difficulty: "iniciante" },
      { title: "Remover imagem", cmd: "docker rmi <id>", difficulty: "iniciante" },
      { title: "Logs do container", cmd: "docker logs -f <id>", difficulty: "intermediario" }
    ],
    docs: "https://docs.docker.com"
  },
  {
    slug: "git",
    name: "Git",
    description: "Sistema de controle de versão distribuído.",
    category: "Version Control",
    commands: [
      { title: "Iniciar repositório", cmd: "git init", difficulty: "iniciante" },
      { title: "Clonar repositório", cmd: "git clone <url>", difficulty: "iniciante" },
      { title: "Status dos arquivos", cmd: "git status", difficulty: "iniciante" },
      { title: "Adicionar arquivos", cmd: "git add .", difficulty: "iniciante" },
      { title: "Commitar", cmd: "git commit -m 'mensagem'", difficulty: "iniciante" },
      { title: "Enviar alterações", cmd: "git push origin main", difficulty: "iniciante" },
      { title: "Baixar alterações", cmd: "git pull origin main", difficulty: "iniciante" },
      { title: "Criar branch", cmd: "git checkout -b <nome>", difficulty: "intermediario" },
      { title: "Mudar de branch", cmd: "git checkout <nome>", difficulty: "iniciante" },
      { title: "Log de commits", cmd: "git log --oneline", difficulty: "intermediario" }
    ],
    docs: "https://git-scm.com/doc"
  },
  {
    slug: "kubernetes",
    name: "Kubernetes",
    description: "Orquestrador de containers automatizado.",
    category: "DevOps",
    commands: [
      { title: "Listar pods", cmd: "kubectl get pods", difficulty: "iniciante" },
      { title: "Listar services", cmd: "kubectl get services", difficulty: "iniciante" },
      { title: "Logs do pod", cmd: "kubectl logs <pod-name>", difficulty: "intermediario" },
      { title: "Aplicar manifesto", cmd: "kubectl apply -f arquivo.yaml", difficulty: "intermediario" },
      { title: "Descrever recurso", cmd: "kubectl describe pod <pod-name>", difficulty: "avancado" },
      { title: "Deletar recurso", cmd: "kubectl delete -f arquivo.yaml", difficulty: "avancado" }
    ],
    docs: "https://kubernetes.io/docs/home/"
  },
  {
    slug: "postman",
    name: "Postman",
    description: "Ferramenta para testar APIs de forma simples e poderosa.",
    category: "Testing",
    commands: [
      { title: "Criar nova requisição", cmd: "N/A - Interface gráfica", difficulty: "iniciante" }
    ],
    docs: "https://www.postman.com/"
  },
  {
    slug: "prisma",
    name: "Prisma ORM",
    description: "ORM moderno para Node.js com migrations automáticas.",
    category: "Database",
    commands: [
      { title: "Inicializar", cmd: "npx prisma init", difficulty: "iniciante" },
      { title: "Gerar client", cmd: "npx prisma generate", difficulty: "intermediario" },
      { title: "Rodar migrations (dev)", cmd: "npx prisma migrate dev", difficulty: "intermediario" },
      { title: "Visualizar dados (Studio)", cmd: "npx prisma studio", difficulty: "iniciante" },
      { title: "Pull do schema", cmd: "npx prisma db pull", difficulty: "avancado" }
    ],
    docs: "https://www.prisma.io/docs"
  },
  {
    slug: "linux",
    name: "Linux CLI",
    description: "Comandos essenciais para terminal Linux/Unix.",
    category: "OS / Terminal",
    commands: [
      { title: "Listar arquivos", cmd: "ls -la", difficulty: "iniciante" },
      { title: "Mudar diretório", cmd: "cd <path>", difficulty: "iniciante" },
      { title: "Copiar arquivo", cmd: "cp source dest", difficulty: "iniciante" },
      { title: "Mover/Renomear", cmd: "mv source dest", difficulty: "iniciante" },
      { title: "Remover arquivo", cmd: "rm -rf <path>", difficulty: "iniciante" },
      { title: "Ver processos", cmd: "htop", difficulty: "intermediario" },
      { title: "Permissões", cmd: "chmod +x arquivo", difficulty: "intermediario" },
      { title: "Proprietário", cmd: "chown user:group arquivo", difficulty: "avancado" },
      { title: "Busca em arquivos", cmd: "grep -r 'texto' .", difficulty: "intermediario" }
    ],
    docs: "https://linuxcommand.org/"
  },
  {
    slug: "npm",
    name: "NPM",
    description: "Gerenciador de pacotes padrão do Node.js.",
    category: "Development",
    commands: [
      { title: "Instalar dependências", cmd: "npm install", difficulty: "iniciante" },
      { title: "Instalar pacote", cmd: "npm install <pacote>", difficulty: "iniciante" },
      { title: "Instalar dev dep", cmd: "npm i -D <pacote>", difficulty: "intermediario" },
      { title: "Rodar script", cmd: "npm run <script>", difficulty: "iniciante" },
      { title: "Atualizar pacotes", cmd: "npm update", difficulty: "iniciante" }
    ],
    docs: "https://docs.npmjs.com/"
  },
  {
    slug: "react",
    name: "React",
    description: "Biblioteca para interfaces de usuário.",
    category: "Frontend",
    commands: [
      { title: "Criar app (Vite)", cmd: "npm create vite@latest my-app -- --template react-ts", difficulty: "iniciante" },
      { title: "Criar app (Next.js)", cmd: "npx create-next-app@latest", difficulty: "iniciante" }
    ],
    docs: "https://react.dev/"
  },
  {
    slug: "vue",
    name: "Vue.js",
    description: "Framework progressivo para construir interfaces de usuário.",
    category: "Frontend",
    commands: [
      { title: "Criar projeto", cmd: "npm create vue@latest", difficulty: "iniciante" },
      { title: "Instalar Vue CLI", cmd: "npm install -g @vue/cli", difficulty: "intermediario" },
      { title: "Criar app com CLI", cmd: "vue create my-app", difficulty: "intermediario" }
    ],
    docs: "https://vuejs.org/"
  },
  {
    slug: "angular",
    name: "Angular",
    description: "Framework para aplicações web escaláveis.",
    category: "Frontend",
    commands: [
      { title: "Instalar CLI", cmd: "npm install -g @angular/cli", difficulty: "iniciante" },
      { title: "Criar novo projeto", cmd: "ng new my-app", difficulty: "intermediario" },
      { title: "Servir aplicação", cmd: "ng serve", difficulty: "iniciante" }
    ],
    docs: "https://angular.io/"
  },
  {
    slug: "svelte",
    name: "Svelte",
    description: "Framework para construir interfaces de usuário rápidas.",
    category: "Frontend",
    commands: [
      { title: "Criar projeto", cmd: "npm create svelte@latest my-app", difficulty: "iniciante" },
      { title: "Instalar SvelteKit", cmd: "npm create svelte@latest my-app -- --template svelte-kit", difficulty: "intermediario" }
    ],
    docs: "https://svelte.dev/"
  },
  {
    slug: "nextjs",
    name: "Next.js",
    description: "Framework React para produção com SSR e SSG.",
    category: "Frontend",
    commands: [
      { title: "Criar app", cmd: "npx create-next-app@latest", difficulty: "iniciante" },
      { title: "Rodar em dev", cmd: "npm run dev", difficulty: "iniciante" },
      { title: "Build para produção", cmd: "npm run build", difficulty: "intermediario" }
    ],
    docs: "https://nextjs.org/"
  },
  {
    slug: "vite",
    name: "Vite",
    description: "Ferramenta de build rápida para projetos web modernos.",
    category: "Frontend",
    commands: [
      { title: "Criar projeto", cmd: "npm create vite@latest", difficulty: "iniciante" },
      { title: "Rodar dev server", cmd: "npm run dev", difficulty: "iniciante" },
      { title: "Build", cmd: "npm run build", difficulty: "intermediario" }
    ],
    docs: "https://vitejs.dev/"
  },
  {
    slug: "tailwindcss",
    name: "Tailwind CSS",
    description: "Framework CSS utilitário para design rápido.",
    category: "Frontend",
    commands: [
      { title: "Instalar", cmd: "npm install -D tailwindcss", difficulty: "iniciante" },
      { title: "Inicializar", cmd: "npx tailwindcss init", difficulty: "intermediario" },
      { title: "Build CSS", cmd: "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch", difficulty: "avancado" }
    ],
    docs: "https://tailwindcss.com/"
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description: "Superset do JavaScript com tipagem estática.",
    category: "Frontend",
    commands: [
      { title: "Instalar global", cmd: "npm install -g typescript", difficulty: "iniciante" },
      { title: "Compilar", cmd: "tsc arquivo.ts", difficulty: "iniciante" },
      { title: "Inicializar projeto", cmd: "tsc --init", difficulty: "intermediario" }
    ],
    docs: "https://www.typescriptlang.org/"
  },
  {
    slug: "nodejs",
    name: "Node.js",
    description: "Runtime JavaScript para backend.",
    category: "Backend",
    commands: [
      { title: "Ver versão", cmd: "node --version", difficulty: "iniciante" },
      { title: "Rodar script", cmd: "node arquivo.js", difficulty: "iniciante" },
      { title: "Iniciar REPL", cmd: "node", difficulty: "iniciante" }
    ],
    docs: "https://nodejs.org/"
  },
  {
    slug: "express",
    name: "Express.js",
    description: "Framework minimalista para Node.js.",
    category: "Backend",
    commands: [
      { title: "Instalar", cmd: "npm install express", difficulty: "iniciante" },
      { title: "Criar servidor básico", cmd: "node server.js", difficulty: "intermediario" }
    ],
    docs: "https://expressjs.com/"
  },
  {
    slug: "django",
    name: "Django",
    description: "Framework web Python de alto nível.",
    category: "Backend",
    commands: [
      { title: "Instalar", cmd: "pip install django", difficulty: "iniciante" },
      { title: "Criar projeto", cmd: "django-admin startproject myproject", difficulty: "intermediario" },
      { title: "Rodar servidor", cmd: "python manage.py runserver", difficulty: "intermediario" },
      { title: "Criar app", cmd: "python manage.py startapp myapp", difficulty: "intermediario" }
    ],
    docs: "https://www.djangoproject.com/"
  },
  {
    slug: "flask",
    name: "Flask",
    description: "Framework web leve para Python.",
    category: "Backend",
    commands: [
      { title: "Instalar", cmd: "pip install flask", difficulty: "iniciante" },
      { title: "Rodar app", cmd: "flask run", difficulty: "intermediario" }
    ],
    docs: "https://flask.palletsprojects.com/"
  },
  {
    slug: "springboot",
    name: "Spring Boot",
    description: "Framework para aplicações Java empresariais.",
    category: "Backend",
    commands: [
      { title: "Criar projeto", cmd: "spring init --dependencies=web myproject", difficulty: "avancado" },
      { title: "Rodar aplicação", cmd: "mvn spring-boot:run", difficulty: "avancado" }
    ],
    docs: "https://spring.io/projects/spring-boot"
  },
  {
    slug: "rails",
    name: "Ruby on Rails",
    description: "Framework web full-stack para Ruby.",
    category: "Backend",
    commands: [
      { title: "Instalar Rails", cmd: "gem install rails", difficulty: "iniciante" },
      { title: "Criar app", cmd: "rails new myapp", difficulty: "intermediario" },
      { title: "Rodar servidor", cmd: "rails server", difficulty: "intermediario" }
    ],
    docs: "https://rubyonrails.org/"
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    description: "Sistema de gerenciamento de banco de dados relacional.",
    category: "Database",
    commands: [
      { title: "Conectar", cmd: "psql -U username -d dbname", difficulty: "intermediario" },
      { title: "Listar bancos", cmd: "psql -l", difficulty: "iniciante" },
      { title: "Criar banco", cmd: "createdb mydb", difficulty: "intermediario" }
    ],
    docs: "https://www.postgresql.org/docs/"
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    description: "Banco de dados NoSQL orientado a documentos.",
    category: "Database",
    commands: [
      { title: "Iniciar MongoDB", cmd: "mongod", difficulty: "iniciante" },
      { title: "Conectar shell", cmd: "mongosh", difficulty: "iniciante" },
      { title: "Listar bancos", cmd: "show dbs", difficulty: "iniciante" }
    ],
    docs: "https://docs.mongodb.com/"
  },
  {
    slug: "redis",
    name: "Redis",
    description: "Armazenamento de dados em memória estruturado.",
    category: "Database",
    commands: [
      { title: "Iniciar Redis", cmd: "redis-server", difficulty: "iniciante" },
      { title: "Conectar CLI", cmd: "redis-cli", difficulty: "iniciante" },
      { title: "Set valor", cmd: "SET key value", difficulty: "iniciante" },
      { title: "Get valor", cmd: "GET key", difficulty: "iniciante" }
    ],
    docs: "https://redis.io/documentation"
  },
  {
    slug: "graphql",
    name: "GraphQL",
    description: "Linguagem de consulta para APIs.",
    category: "Backend",
    commands: [
      { title: "Instalar Apollo Server", cmd: "npm install apollo-server graphql", difficulty: "avancado" }
    ],
    docs: "https://graphql.org/"
  },
  {
    slug: "html-tips",
    name: "HTML Tips",
    description: "Dicas e tags HTML que muita gente esquece.",
    category: "Frontend",
    commands: [
      { title: "<details> e <summary>", cmd: "Cria um widget de disclosure que pode ser aberto/fechado. Ex: <details><summary>Título</summary>Conteúdo</details>", difficulty: "iniciante" },
      { title: "<datalist>", cmd: "Fornece uma lista de opções pré-definidas para um <input>. Ex: <input list='opcoes'><datalist id='opcoes'><option value='Op1'></datalist>", difficulty: "iniciante" },
      { title: "<progress>", cmd: "Representa o progresso de uma tarefa. Ex: <progress value='70' max='100'></progress>", difficulty: "iniciante" },
      { title: "<meter>", cmd: "Representa uma medida escalar dentro de um intervalo conhecido. Ex: <meter value='0.8' min='0' max='1'></meter>", difficulty: "intermediario" },
      { title: "<output>", cmd: "Representa o resultado de um cálculo. Ex: <output for='a b'>Resultado</output>", difficulty: "intermediario" },
      { title: "<time>", cmd: "Representa uma data/hora. Ex: <time datetime='2023-12-30'>30 de dezembro</time>", difficulty: "iniciante" },
      { title: "<mark>", cmd: "Destaca texto. Ex: <mark>texto destacado</mark>", difficulty: "iniciante" },
      { title: "<cite>", cmd: "Cita uma fonte. Ex: <cite>Título do livro</cite>", difficulty: "iniciante" },
      { title: "<abbr>", cmd: "Define uma abreviação. Ex: <abbr title='HyperText Markup Language'>HTML</abbr>", difficulty: "intermediario" },
      { title: "<address>", cmd: "Define informações de contato. Ex: <address>Endereço aqui</address>", difficulty: "intermediario" }
    ],
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    slug: "css-properties",
    name: "CSS Properties",
    description: "Propriedades CSS essenciais para tamanho, espaçamento e layout.",
    category: "Frontend",
    commands: [
      { title: "Box-sizing", cmd: "box-sizing: border-box; - Inclui padding e border na largura/altura total", difficulty: "iniciante" },
      { title: "Flexbox - Container", cmd: "display: flex; justify-content: center; align-items: center;", difficulty: "iniciante" },
      { title: "Grid Layout", cmd: "display: grid; grid-template-columns: 1fr 2fr; gap: 10px;", difficulty: "intermediario" },
      { title: "Espaçamento - Margin", cmd: "margin: 10px 20px; (top/bottom right/left)", difficulty: "iniciante" },
      { title: "Espaçamento - Padding", cmd: "padding: 15px; (todos os lados)", difficulty: "iniciante" },
      { title: "Tamanho - Width/Height", cmd: "width: 100%; height: auto; max-width: 1200px;", difficulty: "iniciante" },
      { title: "Positioning", cmd: "position: relative; top: 10px; left: 20px;", difficulty: "intermediario" },
      { title: "Z-index", cmd: "z-index: 10; - Controla a ordem de empilhamento", difficulty: "intermediario" },
      { title: "Overflow", cmd: "overflow: hidden; - Controla conteúdo que excede o container", difficulty: "intermediario" },
      { title: "Border-radius", cmd: "border-radius: 8px; - Cantos arredondados", difficulty: "iniciante" },
      { title: "Box-shadow", cmd: "box-shadow: 0 4px 8px rgba(0,0,0,0.1); - Sombra", difficulty: "intermediario" },
      { title: "Transition", cmd: "transition: all 0.3s ease; - Animações suaves", difficulty: "intermediario" },
      { title: "Media Queries", cmd: "@media (max-width: 768px) { /* estilos */ } - Design responsivo", difficulty: "avancado" }
    ],
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    slug: "bootstrap",
    name: "Bootstrap",
    description: "Framework CSS para desenvolvimento rápido de interfaces responsivas.",
    category: "Frontend",
    commands: [
      { title: "Instalar via CDN", cmd: "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>", difficulty: "iniciante" },
      { title: "Container", cmd: "<div class='container'> - Centraliza e limita largura", difficulty: "iniciante" },
      { title: "Grid System", cmd: "<div class='row'><div class='col-md-6'>Coluna</div></div> - Sistema de grid responsivo", difficulty: "intermediario" },
      { title: "Botões", cmd: "<button class='btn btn-primary'>Botão</button> - Estilos pré-definidos", difficulty: "iniciante" },
      { title: "Cards", cmd: "<div class='card'><div class='card-body'>Conteúdo</div></div> - Componente de cartão", difficulty: "intermediario" },
      { title: "Navbar", cmd: "<nav class='navbar navbar-expand-lg navbar-light bg-light'> - Barra de navegação", difficulty: "intermediario" },
      { title: "Modal", cmd: "<div class='modal'> - Janela modal", difficulty: "avancado" },
      { title: "Formulários", cmd: "<form><div class='mb-3'><input class='form-control'></div></form> - Estilos para forms", difficulty: "intermediario" },
      { title: "Utilities - Espaçamento", cmd: "class='mt-3 p-2' - Margin top e padding (m- margin, p- padding, t- top, etc.)", difficulty: "iniciante" },
      { title: "Utilities - Cores", cmd: "class='bg-primary text-white' - Background e texto", difficulty: "iniciante" },
      { title: "Responsive Breakpoints", cmd: "d-none d-md-block - Esconde em mobile, mostra em md+", difficulty: "avancado" }
    ],
    docs: "https://getbootstrap.com/"
  },
  {
    slug: "git-commit-standards",
    name: "Padrões de Commit",
    description: "Padrões convencionais para mensagens de commit com tags para melhor organização do histórico.",
    category: "Version Control",
    commands: [
      { title: "New Feature", cmd: "feat: Para novas funcionalidades ou melhorias significativas.", difficulty: "iniciante" },
      { title: "Fix", cmd: "fix: Para correções de bugs ou problemas críticos.", difficulty: "iniciante" },
      { title: "Refactor", cmd: " refactor: Para alterações no código que melhoram a estrutura ou legibilidade, mas não alteram o comportamento.", difficulty: "intermediario" },
      { title: "Improvement", cmd: "improvement: Para melhorias gerais que não necessariamente são refatorações.", difficulty: "intermediario" },
      { title: "Docs", cmd: "docs: Para alterações na documentação do projeto.", difficulty: "iniciante" },
      { title: "Remove", cmd: "remove: Quando você remove código, arquivos ou funcionalidades obsoletas.", difficulty: "intermediario" },
      { title: "Style", cmd: "style: Para alterações de estilo (ex: formatação de código), sem mudar o comportamento do software.", difficulty: "iniciante" },
      { title: "Test", cmd: "test: Para adição ou modificação de testes.", difficulty: "intermediario" },
      { title: "Quality", cmd: "chore: Qualidade do código / refatoração", difficulty: "intermediario" }
    ],
    docs: "https://github.com/iuricode/padroes-de-commits"
  },
  {
    slug: "laravel",
    name: "Laravel (PHP)",
    description: "Framework PHP para desenvolvimento web rápido e elegante, com ferramentas para autenticação, roteamento e bancos de dados.",
    category: "Backend",
    commands: [
      { title: "Instalar Laravel", cmd: "composer create-project laravel/laravel my-app", difficulty: "iniciante" },
      { title: "Rodar servidor", cmd: "php artisan serve", difficulty: "iniciante" },
      { title: "Criar migration", cmd: "php artisan make:migration create_users_table", difficulty: "intermediario" },
      { title: "Executar migrations", cmd: "php artisan migrate", difficulty: "intermediario" },
      { title: "Criar model", cmd: "php artisan make:model User", difficulty: "intermediario" },
      { title: "Criar controller", cmd: "php artisan make:controller UserController", difficulty: "avancado" },
      { title: "Gerar chave da app", cmd: "php artisan key:generate", difficulty: "iniciante" },
      { title: "Limpar cache", cmd: "php artisan cache:clear", difficulty: "intermediario" },
      { title: "Criar seeder", cmd: "php artisan make:seeder UsersTableSeeder", difficulty: "avancado" }
    ],
    docs: "https://laravel.com/docs/"
  },
  {
    slug: "python",
    name: "Python",
    description: "Linguagem de programação de alto nível, interpretada e orientada a objetos.",
    category: "Programming Languages",
    commands: [
      { title: "Verificar versão", cmd: "python --version", difficulty: "iniciante" },
      { title: "Executar script", cmd: "python script.py", difficulty: "iniciante" },
      { title: "Instalar pacote", cmd: "pip install <pacote>", difficulty: "iniciante" },
      { title: "Criar ambiente virtual", cmd: "python -m venv env", difficulty: "intermediario" },
      { title: "Ativar ambiente virtual (Windows)", cmd: "env\\Scripts\\activate", difficulty: "intermediario" },
      { title: "Ativar ambiente virtual (Linux/Mac)", cmd: "source env/bin/activate", difficulty: "intermediario" },
      { title: "Desativar ambiente virtual", cmd: "deactivate", difficulty: "intermediario" },
      { title: "Listar pacotes instalados", cmd: "pip list", difficulty: "iniciante" },
      { title: "Criar arquivo Python", cmd: "touch script.py", difficulty: "iniciante" },
      { title: "Executar em modo interativo", cmd: "python -i", difficulty: "iniciante" }
    ],
    docs: "https://docs.python.org/"
  }
];