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
    title: 'Beltone MiddleLayer Laravel API',
    description: 'MiddleLayer Laravel API',
    tags: ['Laravel', 'API'],
    image: imgProject1,
    actions: [],
  },
  {
    title: 'Beltone Website',
    description: 'Corporate website',
    tags: ['Web', 'Frontend'],
    image: imgProject2,
    actions: [{ label: 'Live', href: 'https://www.beltoneholding.com/' }],
  },
  {
    title: '7EVEN Web App',
    description: 'Customer web application',
    tags: ['Web App'],
    image: imgProject3,
    actions: [{ label: 'Live', href: 'https://www.seven.eg/' }],
  },
  {
    title: 'Yalla Super Mall',
    description: 'E-commerce platform',
    tags: ['E-commerce'],
    image: imgProject4,
    actions: [{ label: 'Live', href: 'https://yallasupermall.com/' }],
  },
  {
    title: 'Shory Insurance',
    description: 'Insurance platform',
    tags: ['Insurance'],
    image: imgProject5,
    actions: [{ label: 'Live', href: 'https://www.shory.com/' }],
  },
  {
    title: 'Aber Insurance',
    description: 'Insurance platform',
    tags: ['Insurance'],
    image: imgProject1,
    actions: [{ label: 'Live', href: 'https://uaeaber.com/en' }],
  },
  {
    title: 'Wittify Landing',
    description: 'Product landing page',
    tags: ['AI', 'Landing'],
    image: imgProject2,
    actions: [{ label: 'Live', href: 'https://wittify.ai/' }],
  },
  {
    title: 'Wittify Dashboard',
    description: 'Product dashboard',
    tags: ['AI', 'Dashboard'],
    image: imgProject3,
    actions: [{ label: 'Live', href: 'https://app.wittify.ai/' }],
  },
]

const smallProjects: {
  title: string
  description: string
  tags: string[]
  action: { label: string; href: string }
}[] = []

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
          <div className="flex flex-wrap gap-4">
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

function SmallProjectCard({
  title,
  description,
  tags,
  action,
}: {
  title: string
  description: string
  tags: string[]
  action: { label: string; href: string }
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
        <a
          className="card-border mt-4 inline-flex px-4 py-2 text-sm text-white"
          href={action.href}
          rel="noreferrer"
          target="_blank"
        >
          {action.label}
        </a>
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

      {smallProjects.length > 0 ? (
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
      ) : null}
    </main>
  )
}
