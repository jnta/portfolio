export type Language = "PT" | "EN";

export const translations = {
  PT: {
    navLinks: [
      { label: "Sobre", href: "#hero" },
      { label: "Blog", href: "#blog" },
      { label: "Experiência", href: "#experience" },
      { label: "Open Source", href: "#open-source" },
    ],
    topNav: {
      resume: "Currículo",
    },
    heroData: {
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
    },
    blogSection: {
      title: "Infantaria Tech",
      subtitle: "Diário de Engenharia",
      substackFeed: "Substack Feed",
    },
    blogPosts: [
      {
        id: "LOG_042",
        date: "2024.10",
        title: "A Arte da Resiliência: Circuit Breakers além do óbvio.",
        description:
          "Uma análise profunda sobre como configurar limiares de falha em sistemas que processam 10k+ tps sem degradar a experiência do usuário final.",
        readTime: "8 MIN DE LEITURA",
        icon: "description",
      },
      {
        id: "LOG_038",
        date: "2024.08",
        title: "Event-Driven Architecture na Prática.",
        description:
          "O dia que o Kafka salvou nossa Black Friday. Desafios de ordenação de mensagens e tratamento de erros em escala global.",
        readTime: "12 MIN DE LEITURA",
        icon: "hub",
      },
      {
        id: "LOG_035",
        date: "2024.06",
        title: "Kubernetes for Backend Engineers.",
        description:
          "Por que você deveria se importar com probes de liveness e readiness antes de escrever sua primeira linha de código no Controller.",
        readTime: "10 MIN DE LEITURA",
        icon: "architecture",
      },
    ],
    experienceSection: {
      careerTimeline: "Linha do Tempo da Carreira",
      experience: "Experiência",
      academic: "Formação Acadêmica",
      openSource: "Open Source",
      viewSource: "Ver Código Fonte",
    },
    careerTimeline: [
      {
        id: "EXP_04",
        company: "Equifax",
        role: "Software Engineer",
        period: "dezembro de 2025 - Presente (6 meses)",
        description:
          "Otimização de sistemas de integração utilizando Java 21/17 e Spring Boot, garantindo o fluxo contínuo de dados entre serviços distribuídos.\n- Melhorei a confiabilidade do sistema através da implementação de padrões avançados de tratamento de erros e estratégias de retry, reduzindo significativamente as intervenções manuais e a perda de dados.\n- Sustentei ferramentas internas e dashboards utilizando React, fornecendo visibilidade ponta a ponta (end-to-end) da saúde das integrações e métricas de dados.",
        techStack: ["Java 21/17", "JavaScript", "Spring Boot", "React", "JUnit", "Mockito", "PostgreSQL", "BigQuery", "GCP", "Splunk", "Docker", "Git", "GitLab CI/CD", "JPA/Hibernate"],
      },
      {
        id: "EXP_03",
        company: "Inter",
        role: "Software Engineer",
        period: "maio de 2024 - dezembro de 2025 (1 ano e 8 meses)",
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
        period: "outubro de 2022 - outubro de 2023 (1 ano e 1 mês)",
        description:
          "Atuei no ciclo de vida completo de projetos, desde a concepção até o deploy em produção, colaborando ativamente com clientes para garantir o alinhamento com os requisitos de negócio.\n- Desenvolvi e mantive RESTful APIs robustas utilizando Java e Spring Boot.\n- Integrei múltiplos serviços por meio de comunicação síncrona e assíncrona com Kafka.\n- Implementei e mantive pipelines de CI/CD utilizando GitLab.\n- Utilizei Spring Data, Hibernate e PostgreSQL para persistência de dados.",
        techStack: ["Java 17/11/8", "Spring Boot", "Kafka", "PostgreSQL", "Azure", "Grafana", "Prometheus", "GitLab CI/CD", "Docker", "Hibernate"],
      },
    ],
    academicTimeline: [
      {
        id: "ACAD_02",
        institution: "UniAmérica Descomplica",
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "julho de 2022 - dezembro de 2024",
      },
      {
        id: "ACAD_01",
        institution: "IFB - Instituto Federal de Brasília",
        course: "Licenciatura em Matemática",
        period: "fevereiro de 2019 - fevereiro de 2022",
      },
    ],
    githubProjects: [
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
    ],
    footerSection: {
      connect: "Conectar",
      navigation: "Navegação",
    },
    footerData: {
      brand: "CORE_SYSTEMS_OPERATIONS",
      infoLine1: "JÔNATA ALBUQUERQUE // ",
      infoVersion: "BACKEND_ARCH_V1.0",
      infoLine2: `CRIADO EM ${new Date().getFullYear()}. TODOS OS DIREITOS RESERVADOS.`,
      systemStatus: "SYSTEMS_HEALTH: OPTIMAL",
      connectLinks: [
        { label: "LinkedIn", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "Email", href: "mailto:#" },
      ],
      navLinks: [
        { label: "Sobre", href: "#hero" },
        { label: "Blog", href: "#blog" },
        { label: "Experiência", href: "#experience" },
        { label: "Open Source", href: "#open-source" },
      ],
    },
  },
  EN: {
    navLinks: [
      { label: "About", href: "#hero" },
      { label: "Blog", href: "#blog" },
      { label: "Experience", href: "#experience" },
      { label: "Open Source", href: "#open-source" },
    ],
    topNav: {
      resume: "Resume",
    },
    heroData: {
      roleLabel: "Software Engineer",
      titlePart1: "Software Architecture: ",
      titleHighlight: "Scalability",
      titlePart2: ", Resilience and Critical Systems",
      description:
        "Software engineer specializing in Java and Cloud ecosystems. I have worked on building core banking for real-time instant payments and large-scale system integrations across multiple countries. Focused on performance, resilience, and delivering mission-critical code.",
      links: [
        { label: "LINKEDIN", href: "#", icon: "link" },
        { label: "GITHUB", href: "#", icon: "code" },
        { label: "EMAIL", href: "mailto:#", icon: "alternate_email" },
      ],
      primaryAction: "View Projects",
      certification: "GCP ARCHITECT CERTIFIED",
    },
    blogSection: {
      title: "Infantaria Tech",
      subtitle: "Engineering Diary",
      substackFeed: "Substack Feed",
    },
    blogPosts: [
      {
        id: "LOG_042",
        date: "2024.10",
        title: "The Art of Resilience: Circuit Breakers beyond the obvious.",
        description:
          "A deep dive into configuring failure thresholds in systems processing 10k+ tps without degrading the end-user experience.",
        readTime: "8 MIN READ",
        icon: "description",
      },
      {
        id: "LOG_038",
        date: "2024.08",
        title: "Event-Driven Architecture in Practice.",
        description:
          "The day Kafka saved our Black Friday. Challenges of message ordering and error handling at global scale.",
        readTime: "12 MIN READ",
        icon: "hub",
      },
      {
        id: "LOG_035",
        date: "2024.06",
        title: "Kubernetes for Backend Engineers.",
        description:
          "Why you should care about liveness and readiness probes before writing your first line of code in the Controller.",
        readTime: "10 MIN READ",
        icon: "architecture",
      },
    ],
    experienceSection: {
      careerTimeline: "Career Timeline",
      experience: "Experience",
      academic: "Academic",
      openSource: "Open Source",
      viewSource: "View Source",
    },
    careerTimeline: [
      {
        id: "EXP_04",
        company: "Equifax",
        role: "Software Engineer",
        period: "December 2025 - Present (6 months)",
        description:
          "Optimization of integration systems using Java 21/17 and Spring Boot, ensuring seamless data flow across distributed services.\n- Improved system reliability by implementing advanced error handling patterns and retry strategies, significantly reducing manual interventions and data loss.\n- Maintained internal tools and dashboards using React, providing end-to-end visibility into integration health and data metrics.",
        techStack: ["Java 21/17", "JavaScript", "Spring Boot", "React", "JUnit", "Mockito", "PostgreSQL", "BigQuery", "GCP", "Splunk", "Docker", "Git", "GitLab CI/CD", "JPA/Hibernate"],
      },
      {
        id: "EXP_03",
        company: "Inter",
        role: "Software Engineer",
        period: "May 2024 - December 2025 (1 year 8 months)",
        description:
          "Worked on projects related to the PIX platform. Responsible for developing new products and services, as well as maintaining and evolving microservices in a cloud-native environment, focusing on delivering scalable, reliable, and high-performance backend solutions that support critical financial operations.\n- Developed RESTful APIs using Micronaut, enabling efficient communication between services.\n- Implemented robust event-driven architectures using Kafka.\n- Applied architectural principles including SOLID, Clean Architecture, and DDD.\n- Worked in a cloud-native environment using AWS, Docker, and Kubernetes.\n- Managed infrastructure using IaC with Terraform.",
        techStack: ["Java 21/17", "TypeScript", "Micronaut", "Spring Boot", "React", "Kafka", "PostgreSQL", "AWS (EKS, MSK, RDS, S3)", "OpenTelemetry", "Docker", "Kubernetes", "Terraform", "GitOps", "ArgoCD", "Micronaut Data"],
      },
      {
        id: "EXP_02",
        company: "Sea Solutions",
        role: "Software Engineer",
        period: "October 2023 - May 2024 (8 months)",
        location: "Brasília, Federal District, Brazil",
        description:
          "Led the end-to-end development of a proprietary SaaS platform in the healthcare sector, overseeing solution architecture, documentation, and implementation to deliver a scalable and robust product.\n- Developed and maintained robust RESTful APIs using Java and Spring Boot.\n- Implemented new features and optimized existing services.\n- Deployed and operated services on GCP using Cloud Run and Pub/Sub.\n- Worked extensively with messaging systems (Kafka, RabbitMQ).",
        techStack: ["Java 17/8", "Python", "Spring Boot", "JUnit", "Testcontainers", "Kafka", "RabbitMQ", "Google Pub/Sub", "PostgreSQL", "SQL Server", "GCP", "Cloud Run", "Grafana", "Docker"],
      },
      {
        id: "EXP_01",
        company: "Sea Solutions",
        role: "Junior Software Engineer",
        period: "October 2022 - October 2023 (1 year 1 month)",
        description:
          "Participated in the full project lifecycle, from conception to production deploy, actively collaborating with clients to ensure alignment with business requirements.\n- Developed and maintained robust RESTful APIs using Java and Spring Boot.\n- Integrated multiple services through synchronous and asynchronous communication with Kafka.\n- Implemented and maintained CI/CD pipelines using GitLab.\n- Utilized Spring Data, Hibernate, and PostgreSQL for data persistence.",
        techStack: ["Java 17/11/8", "Spring Boot", "Kafka", "PostgreSQL", "Azure", "Grafana", "Prometheus", "GitLab CI/CD", "Docker", "Hibernate"],
      },
    ],
    academicTimeline: [
      {
        id: "ACAD_02",
        institution: "UniAmérica Descomplica",
        course: "Higher Technology Course, Analysis and Systems Development",
        period: "July 2022 - December 2024",
      },
      {
        id: "ACAD_01",
        institution: "IFB - Instituto Federal de Brasília",
        course: "Bachelor's Degree in Mathematics",
        period: "February 2019 - February 2022",
      },
    ],
    githubProjects: [
      {
        id: "ARCH_PATTERNS",
        title: "Microservices Blueprint",
        description:
          "Base structure for scalable services with Spring Boot 3, using Clean Architecture and native observability.",
        href: "#",
      },
      {
        id: "K8S_STACK",
        title: "Kubernetes Hardening",
        description:
          "Security manifests and configurations for production clusters, focusing on Network Policies and Resource Quotas.",
        href: "#",
      },
    ],
    footerSection: {
      connect: "Connect",
      navigation: "Navigation",
    },
    footerData: {
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
    },
  },
};
