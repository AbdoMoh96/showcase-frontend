import {
  aboutImage,
  education,
  experience,
  heroImage,
  projects,
  skills,
  summary,
} from "../data/homePageData"
import MediaBar from '#/lib/components/MediaBar'
import { Link } from '@tanstack/react-router'


// TODO move to shared components
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

export default function HomePage() {
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
