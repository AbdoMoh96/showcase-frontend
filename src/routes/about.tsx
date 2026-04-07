import { createFileRoute } from '@tanstack/react-router'
import MediaBar from '../components/MediaBar'

export const Route = createFileRoute('/about')({ component: AboutPage })

const aboutImage =
  'https://www.figma.com/api/mcp/asset/7d3db05e-b306-422b-a8c2-7b63b329af3c'

const summary =
  'Senior Fullstack Developer with 7+ years of experience delivering scalable, high-performance web applications across fintech, insurance, and AI domains. Specialized in Frontend (Next.js, React.js, Angular) and Backend (Node.js, .net, NestJS, Laravel, PHP). Proven track record in building end-to-end systems, integrating complex APIs, and optimizing performance for millions of users. Experienced in DevOps, CI/CD, and cloud deployment (Linux VPS, Cloudflare, Docker). Passionate about building user-centric products and leveraging modern technologies to solve real-world problems.'

const skillBlocks = [
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
    lines: ['Problem Solving, Leadership, Communication, Agile, Team Collaboration'],
  },
]

function AboutPage() {
  return (
    <main className="relative mx-auto max-w-[1366px] pb-20">
      <MediaBar />

      <section className="page-wrap pt-8">
        <div className="section-title">
          <span className="text-[var(--primary)]">/</span>
          <span className="text-white">about-me</span>
        </div>
        <p className="mt-2 text-sm text-white">Summary</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="text-sm leading-6 text-[var(--text)]">
            <p>Hello!</p>
            <p>{summary}</p>
          </div>
          <div className="relative">
            <img src={aboutImage} alt="" className="relative z-10 h-auto w-full" />
            <div className="dots-grid absolute right-4 top-6 hidden h-20 w-20 md:block" />
            <div className="card-border absolute right-14 bottom-10 hidden h-14 w-14 md:block" />
            <div className="h-px w-64 bg-[var(--primary)]" />
          </div>
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">skills</span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skillBlocks.map((block) => (
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
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">domains</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {['Fintech', 'Insurance', 'AI'].map((domain) => (
            <div key={domain} className="card-border px-3 py-2 text-sm text-[var(--text)]">
              {domain}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
