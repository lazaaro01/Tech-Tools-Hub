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
  }
];