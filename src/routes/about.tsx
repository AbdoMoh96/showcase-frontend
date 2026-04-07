import { createFileRoute } from '@tanstack/react-router'
import MediaBar from '../components/MediaBar'

export const Route = createFileRoute('/about')({ component: AboutPage })

const aboutImage =
  'https://www.figma.com/api/mcp/asset/7d3db05e-b306-422b-a8c2-7b63b329af3c'

const factLines = [
  "I like winter more than summer",
  "I often bike with my friends",
  "I like pizza and pasta",
  "I was in Egypt, Poland and Turkey",
  "My favorite movie is The Green Mile",
  "I am still in school",
  "I don't have any siblings",
]

const skillBlocks = [
  { title: 'Languages', lines: ['TypeScript Lua', 'Python JavaScript'] },
  { title: 'Other', lines: ['HTML CSS EJS SCSS', 'REST Jinja'] },
  {
    title: 'Tools',
    lines: ['VSCode Neovim Linux', 'Figma XFCE Arch', 'Git Font Awesome', 'KDE fish'],
  },
  { title: 'Databases', lines: ['SQLite PostgreSQL', 'Mongo'] },
  { title: 'Frameworks', lines: ['React Vue', 'Disnake Discord.js', 'Flask Express.js'] },
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
        <p className="mt-2 text-sm text-white">Who am i?</p>

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
          </div>
          <div className="relative">
            <img src={aboutImage} alt="" className="relative z-10 h-auto w-full" />
            <div className="dots-grid absolute right-4 top-6 h-20 w-20" />
            <div className="card-border absolute right-14 bottom-10 h-14 w-14" />
            <div className="h-px w-64 bg-[var(--primary)]" />
          </div>
        </div>
      </section>

      <section className="page-wrap mt-20">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">skills</span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
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
          <span className="text-white">my-fun-facts</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {factLines.map((fact) => (
            <div key={fact} className="card-border px-3 py-2 text-sm text-[var(--text)]">
              {fact}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
