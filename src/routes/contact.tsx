import { createFileRoute } from '@tanstack/react-router'
import MediaBar from '../components/MediaBar'

export const Route = createFileRoute('/contact')({ component: ContactPage })

const iconTwitter = 'https://www.figma.com/api/mcp/asset/c3008e92-fb37-4000-b6a3-63b1a7a8141d'
const iconDiscord = 'https://www.figma.com/api/mcp/asset/45407468-7542-4d5d-8dc7-26c53f66c93b'
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
        <p className="mt-2 text-sm text-white">Who am i?</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <p className="text-sm leading-6 text-[var(--text)]">
            I'm interested in freelance opportunities. However, if you have other request or
            question, don't hesitate to contact me
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="card-border p-4 text-sm">
              <p className="text-white">Support me here</p>
              <p className="mt-2 text-[var(--text)]">4149500120690030</p>
            </div>
            <div className="card-border p-4 text-sm">
              <p className="text-white">Message me here</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <img src={iconDiscord} alt="Discord" className="h-6 w-6" />
                  <span>Elias#1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconEmail} alt="Email" className="h-6 w-6" />
                  <span>elias@elias-dev.ml</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap mt-16">
        <div className="section-title">
          <span className="text-[var(--primary)]">#</span>
          <span className="text-white">all-media</span>
        </div>
        <div className="mt-6 flex gap-8 text-sm">
          <div className="flex items-center gap-2">
            <img src={iconTwitter} alt="Twitter" className="h-6 w-6" />
            <span>@elias</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconTwitter} alt="Twitter" className="h-6 w-6" />
            <span>@elias</span>
          </div>
        </div>
      </section>
    </main>
  )
}
