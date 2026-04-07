const heroImage =
  'https://www.figma.com/api/mcp/asset/4a2668af-4010-4563-9af7-ef93a22a045d';
const aboutImage =
  'https://www.figma.com/api/mcp/asset/d8b70675-8c18-46ce-8df6-5f18f7b5d167';
const projectImage1 =
  'https://www.figma.com/api/mcp/asset/2f1c7759-223a-4c66-8359-af58d0d7ddcf';
const projectImage2 =
  'https://www.figma.com/api/mcp/asset/4257bb5c-74b5-4ff8-b78e-e58494abaca4';
const projectImage3 =
  'https://www.figma.com/api/mcp/asset/e1c4099f-b7ea-4655-b5e7-7218eb397a50';

const summary =
  'Senior Fullstack Developer with 7+ years of experience delivering scalable, high-performance web applications across fintech, insurance, and AI domains. Specialized in Frontend (Next.js, React.js, Angular) and Backend (Node.js, .net, NestJS, Laravel, PHP). Proven track record in building end-to-end systems, integrating complex APIs, and optimizing performance for millions of users. Experienced in DevOps, CI/CD, and cloud deployment (Linux VPS, Cloudflare, Docker). Passionate about building user-centric products and leveraging modern technologies to solve real-world problems.';

const skills = [
  {
    title: 'Frontend Development',
    lines: ['Angular, React.js, Next.js, Redux, Tailwind, Sass'],
  },
  {
    title: 'Backend Development',
    lines: ['Node.js, .net, NestJS, Laravel, Lumen, PHP'],
  },
  {
    title: 'Web Technologies',
    lines: ['HTML, CSS, JavaScript, TypeScript'],
  },
  {
    title: 'DevOps & Tools',
    lines: ['Git, GitHub Workflows, Docker, CI/CD, Cloudflare, Linux VPS'],
  },
  {
    title: 'Other',
    lines: ['Chrome/Firefox Extensions, REST APIs, Microservices'],
  },
  {
    title: 'Languages',
    lines: ['Arabic (Native), English (Fluent)'],
  },
  {
    title: 'Soft Skills',
    lines: [
      'Problem Solving, Leadership, Communication, Agile, Team Collaboration',
    ],
  },
];

const experience = [
  {
    company: 'Wittify.ai',
    period: 'Jan 2026 — Present',
    role: 'Senior Fullstack Developer (Next.js, Node.js, TypeScript)',
    location: 'Remote',
    highlights: [
      'Leading development of AI-powered web applications using Next.js 14 and Node.js.',
      'Architected scalable frontend systems and integrated backend APIs for real-time AI services.',
      'Improved performance, SEO, and scalability using SSR, caching, and optimized API handling.',
      'Collaborated with AI engineers and backend teams to build end-to-end solutions.',
      'Enhanced CI/CD pipelines and code quality in Agile workflows.',
    ],
  },
  {
    company: 'First.Tech',
    period: 'Jan 2025 — Dec 2025',
    role: 'Senior Fullstack Developer (Next.js, Node.js, .net)',
    location: 'Hybrid',
    highlights: [
      'Developed Health and Car Insurance platforms using Next.js 14 serving 1M+ users.',
      'Built Node.js middleware and backend services for Aber Insurance system.',
      'Optimized frontend performance and implemented scalable state management solutions.',
      'Maintained React Native mobile app improving performance by 40%.',
    ],
  },
  {
    company: 'PaySky',
    period: 'Jun 2024 — Jan 2025',
    role: 'Fullstack Developer (Laravel, Angular, React.js, Node.js, TypeScript)',
    location: 'Hybrid',
    highlights: [
      'Developed POS Management System using Angular and Laravel.',
      'Built QR Payment App using React.js, Node.js, and TypeScript.',
      'Handled backend integrations for secure payment systems across MENA.',
      'Improved performance and reduced load times by 35%.',
    ],
  },
  {
    company: 'Beltone',
    period: 'Feb 2022 — Jun 2024',
    role: 'Fullstack Developer (React.js, Next.js, Node.js, NestJS, Laravel)',
    location: 'Onsite',
    highlights: [
      'Developed MiddleLayer Laravel API integrating multiple enterprise services.',
      'Built HR Appraisal System using React.js and Node.js.',
      'Created Employee QR Business Card Generator using Next.js.',
      'Developed Sales Dashboard with Next.js and Laravel.',
      'Built API proxy services using Node.js and NestJS.',
      'Implemented complex onboarding systems with React.js and Redux.',
      'Created Docker environments for fullstack applications.',
    ],
  },
  {
    company: 'Be Group',
    period: 'Feb 2018 — Feb 2022',
    role: 'Fullstack Developer (PHP, Laravel, React, JavaScript)',
    location: 'Onsite',
    highlights: [
      'Developed dashboards, landing pages, and CMS systems using Laravel and React.',
      'Collaborated with cross-functional teams to deliver 30+ projects.',
      'Designed and maintained scalable frontend and backend systems.',
    ],
  },
];

const projects = [
  {
    title: 'Beltone MiddleLayer Laravel API',
    description: 'MiddleLayer Laravel API',
    tags: ['Laravel', 'API'],
    image: projectImage1,
    actions: [],
  },
  {
    title: 'Beltone Website',
    description: 'Corporate website',
    tags: ['Web', 'Frontend'],
    image: projectImage2,
    actions: [{ label: 'Live', href: 'https://www.beltoneholding.com/' }],
  },
  {
    title: '7EVEN Web App',
    description: 'Customer web application',
    tags: ['Web App'],
    image: projectImage3,
    actions: [{ label: 'Live', href: 'https://www.seven.eg/' }],
  },
  {
    title: 'Yalla Super Mall',
    description: 'E-commerce platform',
    tags: ['E-commerce'],
    image: projectImage1,
    actions: [{ label: 'Live', href: 'https://yallasupermall.com/' }],
  },
  {
    title: 'Shory Insurance',
    description: 'Insurance platform',
    tags: ['Insurance'],
    image: projectImage2,
    actions: [{ label: 'Live', href: 'https://www.shory.com/' }],
  },
  {
    title: 'Aber Insurance',
    description: 'Insurance platform',
    tags: ['Insurance'],
    image: projectImage3,
    actions: [{ label: 'Live', href: 'https://uaeaber.com/en' }],
  },
  {
    title: 'Wittify Landing',
    description: 'Product landing page',
    tags: ['AI', 'Landing'],
    image: projectImage1,
    actions: [{ label: 'Live', href: 'https://wittify.ai/' }],
  },
  {
    title: 'Wittify Dashboard',
    description: 'Product dashboard',
    tags: ['AI', 'Dashboard'],
    image: projectImage2,
    actions: [{ label: 'Live', href: 'https://app.wittify.ai/' }],
  },
];

const education = [
  {
    school: 'Modern Academy',
    year: '2018',
    degree: 'Bachelor of Management Information Systems (MIS)',
    location: 'Cairo, Egypt',
  },
  {
    school: 'CLS Training Center',
    year: '',
    degree: 'Web Master Certificate: HTML, CSS, JavaScript, php, .net',
    location: 'Cairo, Egypt',
  },
];

export {
  heroImage,
  aboutImage,
  projectImage1,
  projectImage2,
  projectImage3,
  summary,
  skills,
  experience,
  projects,
  education,
};
