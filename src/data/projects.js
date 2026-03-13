export const projectFilters = ['All', 'Web', 'Backend', 'ML/AI', 'Open Source']

export const projects = [
  {
    id: 'MindBridge',
    title: 'MindBridge',
    category: 'Web',
    description:
      'MindBridge AI is a full-stack mental wellness platform that connects patients with licensed therapists for secure chat and video consultations, backed by an intelligent assessment engine and real-time notifications.',
    highlight: 'Features sophisticated real-time architecture, which seamlessly integrates secure WebRTC video calls, live chat, and AI-powered features to deliver a comprehensive teletherapy experience',
    techStack: ['React', 'Vite', 'Tailwind', 'Framer Motion','Node.js','Express','MongoDB'],
    githubLink: 'https://github.com/Shreyanshp0/Ai-Wellness-platform',
    detailedDescription: {
      problem: [
        'Social stigma around mental health stops many users from asking for help early.',
        'Finding licensed therapists is difficult for people in remote or underserved areas.',
        'Traditional in-person appointments are hard to fit around work and personal schedules.',
        'Patients need private, secure communication for highly sensitive conversations.',
      ],
      solution: [
        'Secure communication platform for therapist consultations from any location.',
        'Anonymous access to mental health support for privacy-conscious users.',
        'Real-time chat and video sessions for continuous remote care.',
        'Smart therapist matching powered by an AI wellness assessment.',
        'Appointment scheduling with automated notifications and reminders.',
      ],
      architecture: [
        {
          label: 'Frontend',
          items: ['React (Vite)', 'Tailwind CSS', 'Zustand state management'],
        },
        {
          label: 'Backend',
          items: ['Node.js + Express', 'MongoDB + Mongoose', 'JWT-based authentication'],
        },
        {
          label: 'Realtime Communication',
          items: ['Socket.io signaling', 'WebRTC video calls', 'Live chat session sync'],
        },
        {
          label: 'External Services',
          items: ['Google Gemini AI', 'Nodemailer SMTP'],
        },
      ],
      features: [
        'Dual dashboards for Patients and Therapists.',
        'AI-powered therapist recommendation workflow.',
        'Real-time appointment booking and status updates.',
        'Secure video consultations via WebRTC.',
        'AI-generated session summaries after consultations.',
      ],
      challenges: [
        'Implementing WebRTC peer connections with NAT traversal and signaling flow.',
        'Handling real-time chat synchronization across active consultation sessions.',
        'Managing session state, reconnection behavior, and persistence reliably.',
        'Designing secure JWT authentication with role-based access control.',
        'Maintaining patient privacy across messaging, calls, and stored summaries.',
      ],
    },
    images: ['/assets/projects/devlaunchpad-1.png', '/assets/projects/devlaunchpad-2.png'],
    video: '',
  },
  {
    id: 'api-performance-lab',
    title: 'API Performance Lab',
    category: 'Backend',
    description:
      'Express + Mongo observability playground with rate limits, caching, and k6 load test baselines.',
    highlight: 'Tracks p95 latency with dashboards and exports to CSV.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Redis (optional)'],
    githubLink: 'https://github.com/Shreyanshp0/api-performance-lab',
    liveDemo: 'https://api-performance.example.com',
    detailedDescription: {
      problem: [
        'Teams needed a quick way to validate API performance budgets.',
        'Lack of visibility into p95 latency during development.',
      ],
      solution: [
        'Exposed testable endpoints with rate limits.',
        'Implemented caching strategies with Redis.',
        'Scripts to run k6 baselines.',
      ],
      architecture: [
        'Core: Express API for core logic.',
        'Database: MongoDB for persistence.',
        'Cache: Redis for caching layer.',
        'Monitoring: Grafana dashboards for metrics.',
      ],
      features: ['Automated k6 scripts and reports.', 'Rate-limit middleware implementation.', 'Scenario-based load profiles.'],
      challenges: ['Balancing caching behavior with accurate load-test results.', 'Configuring accurate rate limits for stress testing.'],
    },
    images: ['/assets/projects/api-lab-1.png', '/assets/projects/api-lab-2.png'],
    video: '',
  },
  {
    id: 'vision-quest',
    title: 'Vision Quest',
    category: 'ML/AI',
    description:
      'Lightweight computer-vision playground with model switcher and promptable pipelines.',
    highlight: 'Ships with starter notebooks and API docs.',
    techStack: ['Python', 'FastAPI', 'React', 'Tailwind'],
    githubLink: 'https://github.com/Shreyanshp0/vision-quest',
    liveDemo: 'https://vision-quest.example.com',
    detailedDescription: {
      problem: [
        'Students needed a visual way to try multiple CV models.',
        'Deep DevOps knowledge required for deployment was a barrier.',
      ],
      solution: [
        'UI to swap models dynamically.',
        'Interface to send prompts and visualize outputs.',
        'Simplified deployment process.',
      ],
      architecture: [
        'Backend: FastAPI backend serving models.',
        'Frontend: React client with streaming responses.',
        'AI: Python-based model integration.',
      ],
      features: ['Interactive Model switcher.', 'Pre-built Prompt templates.', 'Downloadable image outputs.'],
      challenges: ['Managed bundle sizes by lazy-loading components.', 'Handling long-running model inference requests.'],
    },
    images: ['/assets/projects/vision-1.png', '/assets/projects/vision-2.png'],
    video: '',
  },
  {
    id: 'brutal-cli',
    title: 'Open Source CLI',
    category: 'Open Source',
    description:
      'CLI that scaffolds brutalist React landing pages with linting, testing, and CI templates.',
    highlight: 'Supports custom themes and headless UI presets.',
    techStack: ['Node.js', 'pnpm', 'Inquirer', 'Chalk'],
    githubLink: 'https://github.com/Shreyanshp0/brutal-cli',
    liveDemo: 'https://www.npmjs.com/package/brutal-cli',
    detailedDescription: {
      problem: [
        'Teams needed consistent landing pages.',
        'Batteries-included tooling was missing for specific stack.',
      ],
      solution: [
        'CLI scaffolding tool for React.',
        'Complete brutalist stack setup out-of-the-box.',
      ],
      architecture: [
        'Core: Node CLI templates.',
        'Generation: Plop-like generators.',
        'Distribution: Published to npm registry.',
      ],
      features: ['Prettier/ESLint automated setup.', 'Tailwind + Framer templates included.', 'CI workflow templates for GitHub Actions.'],
      challenges: ['Ensured templates stayed up to date.', 'Managing dependency checks and postinstall scripts.'],
    },
    images: ['/assets/projects/cli-1.png', '/assets/projects/cli-2.png'],
    video: '',
  },
  {
    id: 'capstone-placeholder',
    title: 'TODO: Add your capstone',
    category: 'Web',
    description: 'Add your flagship project for placements with metrics and outcomes.',
    highlight: 'Mention impact: users, performance, or revenue.',
    techStack: ['TODO: Tech stack'],
    githubLink: 'https://github.com/Shreyanshp0/todo-project',
    liveDemo: 'https://todo-project.example.com',
    detailedDescription: {
      problem: ['Describe the problem space and user pain points.'],
      solution: ['Describe your unique solution, architecture, and iteration path.'],
      architecture: ['Add diagram or short summary.'],
      features: ['Key feature 1', 'Key feature 2'],
      challenges: ['List technical or product challenges and how you solved them.'],
    },
    images: ['/assets/projects/capstone-1.png'],
    video: '',
  },
]

export const getProjectById = (id) => projects.find((p) => p.id === id)
