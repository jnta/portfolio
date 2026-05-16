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

export const careerTimeline = [
  {
    id: "EXP_04",
    company: "Equifax",
    role: "Software Engineer",
    period: "dezembro de 2025 - Present (6 meses)",
    description:
      "Otimização de sistemas de integração utilizando Java 21/17 e Spring Boot, garantindo o fluxo contínuo de dados entre serviços distribuídos.\n- Melhorei a confiabilidade do sistema através da implementação de padrões avançados de tratamento de erros e estratégias de retry, reduzindo significativamente as intervenções manuais e a perda de dados.\n- Sustentei ferramentas internas e dashboards utilizando React, fornecendo visibilidade ponta a ponta (end-to-end) da saúde das integrações e métricas de dados.",
    techStack: ["Java 21/17", "JavaScript", "Spring Boot", "React", "JUnit", "Mockito", "PostgreSQL", "BigQuery", "GCP", "Splunk", "Docker", "Git", "GitLab CI/CD", "JPA/Hibernate"],
  },
  {
    id: "EXP_03",
    company: "Inter",
    role: "Software Engineer",
    period: "maio de 2024 - dezembro de 2025 (1 ano 8 meses)",
    description:
      "Atuei em projetos relacionados a plataforma PIX. Fui responsável pelo desenvolvimento de novos produtos e serviços, além da manutenção e evolução de microserviços em um ambiente cloud-native, com foco na entrega de soluções de backend escaláveis, confiáveis e de alta performance que suportam operações financeiras críticas.\n- Desenvolvi RESTful APIs utilizando Micronaut, permitindo a comunicação eficiente entre serviços.\n- Implementei arquiteturas robustas orientadas a eventos (event-driven) utilizando Kafka.\n- Apliquei princípios arquiteturais incluindo SOLID, Clean Architecture e DDD.\n- Trabalhei em um ambiente cloud-native utilizando AWS, Docker e Kubernetes.\n- Gerenciei infraestrutura utilizando IaC com Terraform.",
    techStack: ["Java 21/17", "TypeScript", "Micronaut", "Spring Boot", "React", "Kafka", "PostgreSQL", "AWS (EKS, MSK, RDS, S3)", "OpenTelemetry", "Docker", "Kubernetes", "Terraform", "GitOps", "ArgoCD", "Micronaut Data"],
  },
  {
    id: "EXP_02",
    company: "Sea Solutions",
    role: "Software Engineer",
    period: "outubro de 2023 - maio de 2024 (8 meses)",
    location: "Brasília, Distrito Federal, Brasil",
    description:
      "Liderei o desenvolvimento ponta a ponta de uma plataforma SaaS proprietária no setor de saúde, supervisionando a arquitetura da solução, documentação e implementação para entregar um produto escalável e robusto.\n- Desenvolvi e mantive RESTful APIs robustas utilizando Java e Spring Boot.\n- Implementei novas funcionalidades e otimizei serviços existentes.\n- Realizei o deploy e a operação de serviços no GCP utilizando Cloud Run e Pub/Sub.\n- Trabalhei extensivamente com sistemas de mensageria (Kafka, RabbitMQ).",
    techStack: ["Java 17/8", "Python", "Spring Boot", "JUnit", "Testcontainers", "Kafka", "RabbitMQ", "Google Pub/Sub", "PostgreSQL", "SQL Server", "GCP", "Cloud Run", "Grafana", "Docker"],
  },
  {
    id: "EXP_01",
    company: "Sea Solutions",
    role: "Junior Software Engineer",
    period: "outubro de 2022 - outubro de 2023 (1 ano 1 mês)",
    description:
      "Atuei no ciclo de vida completo de projetos, desde a concepção até o deploy em produção, colaborando ativamente com clientes para garantir o alinhamento com os requisitos de negócio.\n- Desenvolvi e mantive RESTful APIs robustas utilizando Java e Spring Boot.\n- Integrei múltiplos serviços por meio de comunicação síncrona e assíncrona com Kafka.\n- Implementei e mantive pipelines de CI/CD utilizando GitLab.\n- Utilizei Spring Data, Hibernate e PostgreSQL para persistência de dados.",
    techStack: ["Java 17/11/8", "Spring Boot", "Kafka", "PostgreSQL", "Azure", "Grafana", "Prometheus", "GitLab CI/CD", "Docker", "Hibernate"],
  },
];

export const academicTimeline = [
  {
    id: "ACAD_02",
    institution: "UniAmérica Descomplica",
    course: "Higher Technology Course, Analysis and systems development",
    period: "julho de 2022 - dezembro de 2024"
  },
  {
    id: "ACAD_01",
    institution: "IFB - Instituto Federal de Brasília",
    course: "License, Mathematics",
    period: "fevereiro de 2019 - fevereiro de 2022"
  }
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
