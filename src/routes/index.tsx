import { Link, createFileRoute } from '@tanstack/react-router'
import MediaBar from '../lib/components/MediaBar'

export const Route = createFileRoute('/')({ component: HomePage })

const heroImage =
  'https://www.figma.com/api/mcp/asset/4a2668af-4010-4563-9af7-ef93a22a045d'
const aboutImage =
  'https://www.figma.com/api/mcp/asset/d8b70675-8c18-46ce-8df6-5f18f7b5d167'
const projectImage1 =
  'https://www.figma.com/api/mcp/asset/2f1c7759-223a-4c66-8359-af58d0d7ddcf'
const projectImage2 =
  'https://www.figma.com/api/mcp/asset/4257bb5c-74b5-4ff8-b78e-e58494abaca4'
const projectImage3 =
  'https://www.figma.com/api/mcp/asset/e1c4099f-b7ea-4655-b5e7-7218eb397a50'

const summary =
  'Senior Fullstack Developer with 7+ years of experience delivering scalable, high-performance web applications across fintech, insurance, and AI domains. Specialized in Frontend (Next.js, React.js, Angular) and Backend (Node.js, .net, NestJS, Laravel, PHP). Proven track record in building end-to-end systems, integrating complex APIs, and optimizing performance for millions of users. Experienced in DevOps, CI/CD, and cloud deployment (Linux VPS, Cloudflare, Docker). Passionate about building user-centric products and leveraging modern technologies to solve real-world problems.'

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
]

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
]

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
]

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
]

function ProjectCard({
  title,
  description,
  tags,
  image,
  actions,
}: {
  title: string
  description: string
  tags: string[]
  image: string
  actions: { label: string; href: string }[]
}) {
  return (
    <div className="card-border flex w-full flex-col sm:w-[330px]">
      <div className="h-[201px] border-b border-[var(--line)]">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-wrap gap-2 border-b border-[var(--line)] p-2 text-sm text-[var(--text)]">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-2xl text-white">{title}</p>
        <p className="text-sm text-[var(--text)]">{description}</p>
        {actions.length > 0 ? (
          <div className="flex gap-4">
            {actions.map((action) => (
              <a
                key={action.href}
                className="card-border px-4 py-2 text-sm text-white"
                href={action.href}
                rel="noreferrer"
                target="_blank"
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <main className="relative mx-auto max-w-[1366px] pb-20">
      <MediaBar />

      <section className="page-wrap relative pt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="max-w-[560px]">
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Abdelrahman Mohammed — Senior{' '}
              <span className="text-[var(--primary)]">Fullstack Developer</span>{' '}
              focused on scalable web platforms
            </h1>
            <p className="mt-4 text-sm leading-6 text-[var(--text)]">
              {summary}
            </p>
            <Link
              to="/contact"
              className="card-border mt-6 inline-flex px-4 py-2 text-sm text-white"
            >
              Contact me
            </Link>
          </div>
          <div className="relative ml-auto w-full max-w-[470px]">
            <div className="absolute left-2 top-2 h-20 w-20 border border-[var(--line)]" />
            <img
              src={heroImage}
              alt=""
              className="relative z-10 h-auto w-full"
            />
            <div className="dots-grid absolute right-0 top-20 h-20 w-20" />
          </div>
        </div>

        <div className="card-border mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm">
          <span className="h-4 w-4 bg-[var(--primary)]" />
          <span>
            <span className="font-medium text-[var(--text)]">
              Currently working on{' '}
            </span>
            <span className="font-semibold text-white">Portfolio</span>
          </span>
        </div>
      </section>

      <section className="page-wrap mt-16">
        <div className="card-border relative inline-flex items-center gap-4 px-6 py-5">
          <span className="text-xl text-white">
            Building user-centric products that scale
          </span>
          <span className="absolute -left-2 -top-3 text-2xl text-[var(--text)]">
            "
          </span>
          <span className="absolute right-3 top-10 card-border px-3 py-1 text-xl text-white">
            - Fullstack Developer
          </span>
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="flex items-center justify-between">
          <div className="section-title">
            <span className="text-[var(--primary)]">#</span>
            <span className="text-white">projects</span>
            <div className="ml-4 h-px w-40 bg-[var(--line)]" />
          </div>
          <Link to="/projects" className="text-sm text-white">
            View all ~~&gt;
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">experience</span>
          <div className="ml-4 h-px w-32 bg-[var(--line)]" />
        </div>
        <div className="mt-8 grid gap-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="card-border p-4 text-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-white">{item.company}</p>
                <span className="text-[var(--text)]">{item.period}</span>
                <span className="text-[var(--text)]">{item.location}</span>
              </div>
              <p className="mt-2 text-[var(--text)]">{item.role}</p>
              <div className="mt-3 space-y-1 text-[var(--text)]">
                {item.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">skills</span>
          <div className="ml-4 h-px w-28 bg-[var(--line)]" />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="relative hidden lg:block">
            <div className="dots-grid absolute left-0 top-8 h-16 w-16" />
            <div className="card-border absolute left-16 top-0 h-20 w-20" />
            <div className="card-border absolute left-40 top-24 h-14 w-14" />
            <div className="dots-grid absolute left-28 top-36 h-16 w-16" />
            <div className="card-border absolute left-20 top-44 h-28 w-28" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((block) => (
              <div key={block.title} className="card-border p-2 text-sm">
                <p className="text-white">{block.title}</p>
                <div className="mt-2 h-px bg-[var(--line)]" />
                <div className="mt-2 space-y-1 text-[var(--text)]">
                  {block.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">about-me</span>
          <div className="ml-4 h-px w-28 bg-[var(--line)]" />
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="text-sm leading-6 text-[var(--text)]">
            <p>Hello!</p>
            <p>{summary}</p>
            <Link
              to="/about"
              className="card-border mt-4 inline-flex px-4 py-2 text-sm text-white"
            >
              Read more -&gt;
            </Link>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt=""
              className="relative z-10 h-auto w-full"
            />
            <div className="dots-grid absolute right-2 top-4 hidden h-20 w-20 md:block" />
            <div className="card-border absolute right-10 bottom-8 hidden h-14 w-14 md:block" />
            <div className="h-px w-64 bg-[var(--primary)]" />
          </div>
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">education</span>
          <div className="ml-4 h-px w-32 bg-[var(--line)]" />
        </div>
        <div className="mt-8 grid gap-6">
          {education.map((item) => (
            <div
              key={`${item.school}-${item.degree}`}
              className="card-border p-4 text-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-white">{item.school}</p>
                {item.year ? (
                  <span className="text-[var(--text)]">{item.year}</span>
                ) : null}
                <span className="text-[var(--text)]">{item.location}</span>
              </div>
              <p className="mt-2 text-[var(--text)]">{item.degree}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">contacts</span>
          <div className="ml-4 h-px w-28 bg-[var(--line)]" />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_260px]">
          <p className="text-sm leading-6 text-[var(--text)]">
            Open to building user-centric products across fintech, insurance,
            and AI domains.
          </p>
          <div className="card-border p-4 text-sm">
            <p className="text-white">Message me here</p>
            <div className="mt-3 space-y-2">
              <p>Arabic (Native)</p>
              <p>English (Fluent)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
