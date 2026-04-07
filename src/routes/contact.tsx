import { createFileRoute } from '@tanstack/react-router'
import MediaBar from '../components/MediaBar'

export const Route = createFileRoute('/contact')({ component: ContactPage })

const iconEmail = 'https://www.figma.com/api/mcp/asset/9476ae69-51ab-43c5-bff7-56e04c2b20dc'

function ContactPage() {
  return (
    <main className="relative mx-auto max-w-[1366px] pb-20">
      <MediaBar />

      <section className="page-wrap pt-8">
        <div className="section-title">
          <span className="text-[var(--primary)]">/</span>
          <span className="text-white">contacts</span>
        </div>
        <p className="mt-2 text-sm text-white">Let’s talk</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <p className="text-sm leading-6 text-[var(--text)]">
            Open to building scalable, high-performance products across fintech, insurance, and
            AI domains. Reach out to discuss fullstack development, performance optimization,
            and end-to-end delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="card-border p-4 text-sm">
              <p className="text-white">Contact</p>
              <div className="mt-3 space-y-2 text-[var(--text)]">
                <p>+2 011 212 26689</p>
                <a href="mailto:abdo.moh96@outlook.com" className="underline">
                  abdo.moh96@outlook.com
                </a>
              </div>
            </div>
            <div className="card-border p-4 text-sm">
              <p className="text-white">Social</p>
              <div className="mt-3 space-y-2 text-[var(--text)]">
                <a href="https://www.linkedin.com/in/abdo-moh96/" className="underline">
                  linkedin.com/in/abdo-moh96
                </a>
                <a href="https://github.com/AbdoMoh96" className="underline">
                  github.com/AbdoMoh96
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="mt-12 max-w-[880px]" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="card-border w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--text)] outline-none"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="card-border w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--text)] outline-none"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <input
            className="card-border mt-4 w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--text)] outline-none"
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            className="card-border mt-4 min-h-[180px] w-full resize-none bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--text)] outline-none"
            name="message"
            placeholder="Message"
          />
          <button
            className="mt-4 inline-flex border border-[var(--primary)] px-5 py-2 text-sm text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>

      <section className="page-wrap mt-16">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">availability</span>
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-[var(--text)]">
          <img src={iconEmail} alt="Email" className="h-6 w-6" />
          <span>Available for collaboration and product delivery.</span>
        </div>
      </section>
    </main>
  )
}
