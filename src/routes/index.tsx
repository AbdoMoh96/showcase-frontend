import { Link, createFileRoute } from '@tanstack/react-router'
import MediaBar from '../components/MediaBar'

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

const projects = [
  {
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    image: projectImage1,
    actions: ['Live <~>', 'Cached >='],
  },
  {
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    tags: ['React', 'Express', 'Discord.js', 'Node.js'],
    image: projectImage2,
    actions: ['Live <~>'],
  },
  {
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    tags: ['CSS', 'Express', 'Node.js'],
    image: projectImage3,
    actions: ['Live <~>'],
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
  actions: string[]
}) {
  return (
    <div className="card-border flex w-[330px] flex-col">
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
        <div className="flex gap-4">
          {actions.map((action) => (
            <button
              key={action}
              className="card-border px-4 py-2 text-sm text-white"
              type="button"
            >
              {action}
            </button>
          ))}
        </div>
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
              Elias is a <span className="text-[var(--primary)]">web designer</span> and{' '}
              <span className="text-[var(--primary)]">front-end developer</span>
            </h1>
            <p className="mt-4 text-sm leading-6 text-[var(--text)]">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Link
              to="/contact"
              className="card-border mt-6 inline-flex px-4 py-2 text-sm text-white"
            >
              Contact me!!
            </Link>
          </div>
          <div className="relative ml-auto w-full max-w-[470px]">
            <div className="absolute left-2 top-2 h-20 w-20 border border-[var(--line)]" />
            <img src={heroImage} alt="" className="relative z-10 h-auto w-full" />
            <div className="dots-grid absolute right-0 top-20 h-20 w-20" />
          </div>
        </div>

        <div className="card-border mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm">
          <span className="h-4 w-4 bg-[var(--primary)]" />
          <span>
            <span className="font-medium text-[var(--text)]">Currently working on </span>
            <span className="font-semibold text-white">Portfolio</span>
          </span>
        </div>
      </section>

      <section className="page-wrap mt-16">
        <div className="card-border relative inline-flex items-center gap-4 px-6 py-5">
          <span className="text-xl text-white">
            With great power comes great electricity bill
          </span>
          <span className="absolute -left-2 -top-3 text-2xl text-[var(--text)]">"</span>
          <span className="absolute right-3 top-10 card-border px-3 py-1 text-xl text-white">
            - Dr. Who
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
          <span className="text-white">skills</span>
          <div className="ml-4 h-px w-28 bg-[var(--line)]" />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="relative">
            <div className="dots-grid absolute left-0 top-8 h-16 w-16" />
            <div className="card-border absolute left-16 top-0 h-20 w-20" />
            <div className="card-border absolute left-40 top-24 h-14 w-14" />
            <div className="dots-grid absolute left-28 top-36 h-16 w-16" />
            <div className="card-border absolute left-20 top-44 h-28 w-28" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Languages',
                lines: [
                  'TypeScript Lua',
                  'Python JavaScript',
                ],
              },
              {
                title: 'Databases',
                lines: ['SQLite PostgreSQL', 'Mongo'],
              },
              {
                title: 'Tools',
                lines: ['VSCode Neovim Linux', 'Figma XFCE Arch', 'Git Font Awesome'],
              },
              {
                title: 'Other',
                lines: ['HTML CSS EJS SCSS', 'REST Jinja'],
              },
              {
                title: 'Frameworks',
                lines: ['React Vue', 'Disnake Discord.js', 'Flask Express.js'],
              },
            ].map((block) => (
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
            <p>Hello, i'm Elias!</p>
            <p>
              I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop
              responsive websites from scratch and raise them into modern user-friendly web
              experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been my passion for
              over a year. I have been helping various clients to establish their presence
              online. I always strive to learn about the newest technologies and frameworks.
            </p>
            <Link to="/about" className="card-border mt-4 inline-flex px-4 py-2 text-sm text-white">
              Read more -&gt;
            </Link>
          </div>
          <div className="relative">
            <img src={aboutImage} alt="" className="relative z-10 h-auto w-full" />
            <div className="dots-grid absolute right-2 top-4 h-20 w-20" />
            <div className="card-border absolute right-10 bottom-8 h-14 w-14" />
            <div className="h-px w-64 bg-[var(--primary)]" />
          </div>
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
            I'm interested in freelance opportunities. However, if you have other request or
            question, don't hesitate to contact me
          </p>
          <div className="card-border p-4 text-sm">
            <p className="text-white">Message me here</p>
            <div className="mt-3 space-y-2">
              <p>@Elias#1234</p>
              <p>elias@elias-dev.ml</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
