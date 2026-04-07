import { createFileRoute } from '@tanstack/react-router'
import MediaBar from '../components/MediaBar'

export const Route = createFileRoute('/projects')({ component: ProjectsPage })

const imgProject1 =
  'https://www.figma.com/api/mcp/asset/6468450f-f329-4435-ae3f-bac5d42813b2'
const imgProject2 =
  'https://www.figma.com/api/mcp/asset/fc08a763-fac0-46ec-8e94-ca1595180a1a'
const imgProject3 =
  'https://www.figma.com/api/mcp/asset/70705068-b574-42fe-9891-c86859c2b985'
const imgProject4 =
  'https://www.figma.com/api/mcp/asset/50862dd3-c049-4811-855d-8d2398f72ee4'
const imgProject5 =
  'https://www.figma.com/api/mcp/asset/a5c6dd60-78c4-4301-b6d6-f8b3917466ca'

const completeApps = [
  {
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    image: imgProject1,
    actions: ['Live <~>', 'Cached >='],
  },
  {
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    tags: ['CSS', 'Express', 'Node.js'],
    image: imgProject2,
    actions: ['Live <~>'],
  },
  {
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    tags: ['React', 'Express', 'Discord.js', 'Node.js'],
    image: imgProject3,
    actions: ['Cached >='],
  },
  {
    title: 'Kotik Bot',
    description: 'Multi-functional discord bot',
    tags: ['HTML', 'CSS', 'JS'],
    image: imgProject4,
    actions: ['Live <~>'],
  },
  {
    title: 'Portfolio',
    description: "You're using it rn",
    tags: ['Vue', 'TS', 'Less'],
    image: imgProject5,
    actions: ['Github <~>'],
  },
]

const smallProjects = [
  {
    title: 'Bot boilerplate',
    description: 'Start creating scalable discord.js bot with typescript in seconds',
    tags: ['Discord.js', 'TS', 'JS'],
    action: 'Github <~>',
  },
  {
    title: 'My blog',
    description: 'Front-end of my future blog website written in vue',
    tags: ['Vue', 'CSS', 'JS'],
    action: 'Github <~>',
  },
  {
    title: 'Chess pro',
    description: 'Figma landing page about service for viewing chess tournaments',
    tags: ['Figma'],
    action: 'Figma <~>',
  },
  {
    title: 'Crash protect website',
    description: 'Figma template for website about anti-raid, anti-crash discord bot',
    tags: ['Figma'],
    action: 'Figma <~>',
  },
  {
    title: 'CSS experiments',
    description: 'Collection of my different little projects in css',
    tags: ['HTML', 'CSS'],
    action: 'Live <~>',
  },
  {
    title: 'Web Dev nvim config',
    description: 'Config for neovim perfect for web developer',
    tags: ['Lua', 'NeoVim'],
    action: 'Github <~>',
  },
  {
    title: 'Ooku',
    description: 'Simple link shortener with auth',
    tags: ['Python', 'Quart', 'HTML'],
    action: 'Live <~>',
  },
  {
    title: 'School website',
    description: 'Figma template website for my school',
    tags: ['Figma'],
    action: 'Figma <~>',
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
        <div className="flex flex-wrap gap-4">
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

function SmallProjectCard({
  title,
  description,
  tags,
  action,
}: {
  title: string
  description: string
  tags: string[]
  action: string
}) {
  return (
    <div className="card-border flex w-full flex-col sm:w-[330px]">
      <div className="flex flex-wrap gap-2 p-2 text-sm text-[var(--text)]">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="border-t border-[var(--line)] p-4">
        <p className="text-2xl text-white">{title}</p>
        <p className="mt-2 text-sm text-[var(--text)]">{description}</p>
        <button className="card-border mt-4 px-4 py-2 text-sm text-white" type="button">
          {action}
        </button>
      </div>
    </div>
  )
}

function ProjectsPage() {
  return (
    <main className="relative mx-auto max-w-[1366px] pb-20">
      <MediaBar />

      <section className="page-wrap pt-8">
        <div className="section-title">
          <span className="text-[var(--primary)]">/</span>
          <span className="text-white">projects</span>
        </div>
        <p className="mt-2 text-sm text-white">List of my projects</p>
      </section>

      <section className="page-wrap mt-16">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">complete-apps</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {completeApps.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">small-projects</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {smallProjects.map((project) => (
            <SmallProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  )
}
