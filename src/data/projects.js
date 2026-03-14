export const projectFilters = ['All', 'Web', 'Backend', 'ML/AI', 'Java', 'Open Source']

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
    id: 'Arv-Foundation',
    title: 'Arv Foundation Platform',
    category: 'Web',
    description:
      'Full-stack NGO management platform and CMS that powers the Arv Foundation public website while centralizing internships, volunteers, donations, and partnership inquiries in one admin system.',
    highlight: 'Combines a public-facing NGO portal with a custom CMS so non-technical admins can update drives, galleries, and outreach data without developer support.',
    techStack: ['React', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'bcryptjs'],
    githubLink: 'https://github.com/Shreyanshp0/Arv-Foundation',
    liveDemo: '',
    detailedDescription: {
      problem: [
        'NGOs often rely on developers to update simple website content like gallery images and drive details.',
        'Static websites make public information outdated and reduce trust with donors and volunteers.',
        'Volunteer, internship, donation, and partnership inquiries get scattered across email threads.',
        'Fragmented outreach data leads to missed opportunities and difficult follow-up workflows.',
      ],
      solution: [
        'Built a dual-purpose platform with a public NGO website and a secure administrative dashboard.',
        'Created a custom CMS so non-technical admins can update imagery and charitable drives directly.',
        'Centralized internships, volunteers, donations, and partnership submissions into one structured database.',
        'Enabled the foundation team to manage website content and operational workflows from a single system.',
      ],
      architecture: [
        {
          label: 'Frontend',
          items: ['React.js', 'Framer Motion animations', 'Dynamic admin gallery interface'],
        },
        {
          label: 'Backend',
          items: ['Node.js + Express.js', 'RESTful admin and public endpoints', 'Custom CMS logic'],
        },
        {
          label: 'Database',
          items: ['MongoDB', 'Mongoose ODM', 'Schema-based form and CMS data models'],
        },
        {
          label: 'Authentication',
          items: ['Custom authentication flow', 'bcryptjs password hashing'],
        },
        {
          label: 'Asset Management',
          items: ['Cloud-based image and file storage', 'Resume URL and uploaded media handling'],
        },
      ],
      features: [
        'Dynamic visual CMS for assigning images to exact website sections and layout slots.',
        'CRUD management for foundation drives with location, date, and active status controls.',
        'Centralized application portal for internships, volunteering, donations, and partnership proposals.',
        'Role-based security separating protected admin controls from public user-facing features.',
      ],
      challenges: [
        'Designed a custom slot-based CMS so specific images map to specific homepage and about-page placements.',
        'Built backend logic that binds placement fields in the database to frontend UI sections dynamically.',
        'Handled very different submission types, from simple contact forms to internship applications with resumes and academic details.',
        'Unified diverse NGO workflows into one backend without making the admin experience confusing.',
      ],
      impact: [
        'Reduced website content update time from days of developer dependency to seconds in the admin dashboard.',
        'Centralized internship and volunteer applications into a searchable database and removed manual email-based tracking.',
        'Improved turnout and material donations by keeping active drives updated in real time on the public website.',
      ],
    },
    images: ['/assets/projects/api-lab-1.png', '/assets/projects/api-lab-2.png'],
    video: '',
  },
  {
    id: 'Escape-AI',
    title: 'Escape-AI',
    category: 'ML/AI',
    description:
      'An AI-powered web application that acts as a real-time assistant for escape room players, solving both text-based riddles and visual puzzles from a camera or image upload.',
    highlight: 'Features a point-and-solve experience using a live device camera and multimodal AI to instantly analyze and provide hints for physical puzzles.',
    techStack: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'Google Gemini 1.5 Flash', 'Hugging Face Inference API', 'WebRTC', 'Canvas API'],
    githubLink: 'https://github.com/Shreyanshp0/Escape-room-assistant',
    liveDemo: '',
    detailedDescription: {
      problem: [
        'Escape room players often get stuck on difficult puzzles with no fast, intuitive way to ask for a hint.',
        'Asking a game master can break immersion and interrupt the flow of the experience.',
        'Searching online is slow, awkward during gameplay, and can easily spoil unrelated parts of the room.',
        'Players needed an on-demand assistant that could help with both written riddles and physical visual puzzles.',
      ],
      solution: [
        'Built a digital game master that provides contextual help through a single responsive web interface.',
        'Enabled users to submit text riddles and logic questions through a chat UI for concise, puzzle-aware hints.',
        'Added image upload and live camera analysis so physical puzzles, symbols, and objects can be solved with multimodal AI.',
        'Designed the prompting strategy to return compact hints first, helping players without immediately spoiling the answer.',
      ],
      architecture: [
        {
          label: 'Backend',
          items: ['Python Flask server', 'REST endpoint at /solve', 'Structured JSON responses with robust error handling'],
        },
        {
          label: 'Frontend',
          items: ['Vanilla JavaScript', 'HTML5 + CSS3', 'Responsive chat interface built with Flexbox'],
        },
        {
          label: 'AI Integrations',
          items: ['Hugging Face Inference API with google/gemma-7b-it for text puzzles', 'Google Gemini 1.5 Flash for multimodal text and image analysis'],
        },
        {
          label: 'Browser APIs',
          items: ['WebRTC getUserMedia for live camera access', 'Canvas API for frame capture and JPEG/base64 image processing'],
        },
      ],
      features: [
        'Multimodal puzzle solving for both text-based riddles and image-based escape room challenges.',
        'Live camera integration for instant capture and analysis of physical puzzles.',
        'Image upload support for solving puzzles from the device gallery.',
        'Responsive mobile-first chat interface with a clean and intuitive interaction flow.',
        'Typing indicator that shows when the AI is analyzing the puzzle.',
        'Zero-dependency frontend built entirely with vanilla JavaScript for speed and minimal overhead.',
      ],
      challenges: [
        'Built a smooth camera-to-API pipeline without a frontend framework, including permission handling, stream lifecycle management, frame capture, and encoding.',
        'Optimized AI speed and cost by choosing Gemini 1.5 Flash, constraining token output, and writing prompts for concise responses.',
        'Compressed captured images on the client using JPEG quality tuning to reduce payload size, latency, and bandwidth usage.',
        'Designed clean integration logic for two separate AI providers with different request formats, response parsing, and prompting strategies.',
      ],
      impact: [
        'Demonstrates full-stack and AI engineering skills across Python, vanilla JavaScript, browser media APIs, and third-party model integrations.',
        'Delivers a fast and polished real-time assistant experience by pushing image processing and multimodal analysis close to the user.',
        'Serves as a practical, portfolio-ready prototype that solves a clear user pain point in an immersive and intuitive way.',
      ],
    },
    images: ['/assets/projects/vision-1.png', '/assets/projects/vision-2.png'],
    video: '',
  },
  {
    id: 'TravelBuddy',
    title: 'Travel Buddy',
    category: 'Java',
    description:
      'A desktop travel planner built with Java Swing to explore Indian cities, view attractions, and get hotel suggestions with cost estimates.',
    highlight: 'An interactive Java Swing application for exploring Indian cities and planning travel itineraries with dynamic hotel suggestions.',
    techStack: ['Java', 'Java Swing', 'OOP', 'Linked List', 'HashMap', 'JFrame', 'JPanel'],
    githubLink: 'https://github.com/Shreyanshp0/Travel-Buddy',
    liveDemo: '',
    detailedDescription: {
      problem: [
        'Travelers often need a simple, consolidated tool to get quick information about a destination without navigating large travel websites.',
        'Early trip planning is often fragmented across different sources for attractions, hotels, and pricing details.',
        'Users wanted a lightweight way to compare cities, places to visit, and accommodation options in one flow.',
      ],
      solution: [
        'Built a self-contained desktop application that guides users through the first phase of travel planning step by step.',
        'Presented curated city information, popular attractions, and hotel options through a clean and easy-to-navigate interface.',
        'Enabled hotel filtering by star rating and automatically calculated total stay cost based on the selected duration.',
        'Used a custom linked list to manage city data, demonstrating practical application of core computer science principles.',
      ],
      architecture: [
        {
          label: 'Model',
          items: ['Hotel and CityNode classes', 'Custom singly linked list for city traversal', 'Hardcoded travel data organized with HashMap and List structures'],
        },
        {
          label: 'View',
          items: ['Java Swing UI', 'Custom-painted JPanels with gradients and rounded corners', 'HTML-rendered JLabels for rich formatted content'],
        },
        {
          label: 'Controller',
          items: ['TravelPlannerGUI as the main controller', 'ActionListeners for user interactions', 'Dynamic panel re-rendering based on app state'],
        },
      ],
      features: [
        'Dynamic city search with graceful handling for cities not found in the local dataset.',
        'Interactive multi-step UI flow: select a city, explore places, choose hotel rating, set stay duration, and view hotels.',
        'Rich information display using HTML styling inside Swing components for organized and readable content.',
        'Hotel filtering by 1-to-5-star rating with automatic cost calculation for the selected number of days.',
        'Custom singly linked list implementation for managing and navigating city data.',
        'Aesthetic GUI with gradient backgrounds, hoverable buttons, and rounded panel borders.',
      ],
      challenges: [
        'Managing application state for the selected city, hotel rating, and stay duration inside a monolithic Swing controller.',
        'Designing dynamic UI rendering that frequently clears and rebuilds the central panel without visual glitches.',
        'Using revalidate() and repaint() carefully to keep transitions smooth and the interface responsive.',
        'Building a modern-looking UI in Swing required custom paintComponent overrides and deeper styling than standard components provide.',
      ],
      impact: [
        'Resulted in a fully functional standalone desktop application that simulates a complete travel planning workflow.',
        'Showcases proficiency in Java, object-oriented programming, Java Swing GUI development, and foundational data structures such as linked lists and hash maps.',
        'Demonstrates attention to user experience by pairing practical utility with a polished and visually appealing interface.',
      ],
    },
    images: ['/assets/projects/cli-1.png', '/assets/projects/cli-2.png'],
    video: '',
  },
  // {
  //   id: 'capstone-placeholder',
  //   title: 'TODO: Add your capstone',
  //   category: 'Web',
  //   description: 'dd your flagship project for placements with metrics and outcomes.',
  //   highlight: 'Mention impact: users, performance, or revenue.',
  //   techStack: ['TODO: Tech stack'],
  //   githubLink: 'https://github.com/Shreyanshp0/todo-project',
  //   liveDemo: 'https://todo-project.example.com',
  //   detailedDescription: {
  //     problem: ['Describe the problem space and user pain points.'],
  //     solution: ['Describe your unique solution, architecture, and iteration path.'],
  //     architecture: ['Add diagram or short summary.'],
  //     features: ['Key feature 1', 'Key feature 2'],
  //     challenges: ['List technical or product challenges and how you solved them.'],
  //   },
  //   images: ['/assets/projects/capstone-1.png'],
  //   video: '',
  // },
]

export const getProjectById = (id) => projects.find((p) => p.id === id)
