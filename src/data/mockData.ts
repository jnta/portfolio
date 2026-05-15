export const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Blog", href: "#blog" },
  { label: "Experience", href: "#experience" },
  { label: "Open Source", href: "#open-source" },
];

export const heroData = {
  roleLabel: "Software Engineer",
  titlePart1: "Arquitetura de Software: ",
  titleHighlight: "Escalabilidade",
  titlePart2: ", Resiliência e Sistemas Críticos",
  description:
    "Engenheiro de software especializado em ecossistemas Java e Cloud. Atuei na construção de core banking para pagamentos instantâneos em tempo real e em integrações de sistemas de larga escala entre múltiplos países. Focado em performance, resiliência e entrega de código de missão crítica.",
  links: [
    { label: "LINKEDIN", href: "#", icon: "link" },
    { label: "GITHUB", href: "#", icon: "code" },
    { label: "EMAIL", href: "mailto:#", icon: "alternate_email" },
  ],
  primaryAction: "Consultar Projetos",
  certification: "GCP ARCHITECT CERTIFIED",
};

export const blogPosts = [
  {
    id: "LOG_042",
    date: "2024.10",
    title: "A Arte da Resiliência: Circuit Breakers além do óbvio.",
    description:
      "Uma análise profunda sobre como configurar limiares de falha em sistemas que processam 10k+ tps sem degradar a experiência do usuário final.",
    readTime: "8 MIN READ",
    icon: "description",
  },
  {
    id: "LOG_038",
    date: "2024.08",
    title: "Event-Driven Architecture na Prática.",
    description:
      "O dia que o Kafka salvou nossa Black Friday. Desafios de ordenação de mensagens e tratamento de erros em escala global.",
    readTime: "12 MIN READ",
    icon: "hub",
  },
  {
    id: "LOG_035",
    date: "2024.06",
    title: "Kubernetes for Backend Engineers.",
    description:
      "Por que você deveria se importar com probes de liveness e readiness antes de escrever sua primeira linha de código no Controller.",
    readTime: "10 MIN READ",
    icon: "architecture",
  },
];

export const experienceCases = [
  {
    id: "CASE_01",
    title: "Ecossistema PIX (Inter)",
    description:
      "Foco em alta disponibilidade e baixíssima latência para processamento de transações instantâneas. Implementação de padrões de resiliência e monitoramento crítico.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBH79d11ZoWWUVGWAbq0VbzlYxOiIiT0-GLCWtUbVkmYeaU5SbjrD_KhGxFxcs71tOMnzhWMbC29AnUNWSfgCA8puhrQzEvqxQjUTbZHGr_As9KYag3N2QKXizFgPq2fc5iYf8aBjGfeypKvBn6D4MbOoEz6fQ9XCECuvZG0gIG1UTmI0hIYYjT9tnNKAQMb5odL0G3CuswaZovQAcK6e61yaj8FAK7aB0cyvAQis5-zipSpxUuqaAIpUQwQmZjxkvhYQA8a9umMTs",
    tags: ["Latency Control", "Spring WebFlux", "Resilience4j"],
  },
  {
    id: "CASE_02",
    title: "Integrações Globais (Equifax)",
    description:
      "Arquitetura de sistemas distribuídos para sincronização de dados transcontinentais. Orquestração de mensageria complexa e conformidade com padrões globais de segurança.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBobrLVP6pGa0GtkgVvJLNnV5LshLrC8D_u-e4r55D6cNShvTpqQfkkpH3mlVNLv79YXdXElJnAlwSn5z6IYdd7FpXUlLh3qPY1Fnjr0Aqf-PciewPMkA34O-Pwky6QmVLdCQHBaTT0iE9WCcDh_OQdsVKzalUCBs3nLR2TLFVXoO8az6dYB29sb2sCxckhY01FQpbSM3r1X1S1n4QWnxWOwkulYRhnq_k0C5tAou7hoc0dOMZdkDlMEzWtYoPAYS-fc2VFxr8rdnM",
    tags: ["GCP Pub/Sub", "Multi-region", "Distributed Tracing"],
  },
];

export const githubProjects = [
  {
    id: "ARCH_PATTERNS",
    title: "Microservices Blueprint",
    description:
      "Estrutura base para serviços escaláveis com Spring Boot 3, utilizando Clean Architecture e observabilidade nativa.",
    href: "#",
  },
  {
    id: "K8S_STACK",
    title: "Kubernetes Hardening",
    description:
      "Manifestos e configurações de segurança para clusters produtivos, focando em Network Policies e Resource Quotas.",
    href: "#",
  },
];

export const footerData = {
  brand: "CORE_SYSTEMS_OPERATIONS",
  infoLine1: "JÔNATA ALBUQUERQUE // ",
  infoVersion: "BACKEND_ARCH_V1.0",
  infoLine2: `ESTABLISHED ${new Date().getFullYear()}. ALL RIGHTS RESERVED.`,
  systemStatus: "SYSTEMS_HEALTH: OPTIMAL",
  connectLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Email", href: "mailto:#" },
  ],
  navLinks: [
    { label: "About", href: "#hero" },
    { label: "Blog", href: "#blog" },
    { label: "Experience", href: "#experience" },
    { label: "Open Source", href: "#open-source" },
  ],
};
