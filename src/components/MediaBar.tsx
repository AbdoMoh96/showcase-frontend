const iconGithub = 'https://www.figma.com/api/mcp/asset/47878ef0-000a-4603-8b86-d2f90ded4a84'
const iconLinkedIn = 'https://www.figma.com/api/mcp/asset/5f1bf715-53b2-42af-ae5e-c7fba7557f21'

export default function MediaBar() {
  return (
    <div className="absolute left-4 top-0 hidden flex-col items-center gap-2 md:flex">
      <div className="h-48 w-px bg-[var(--line)]" />
      <div className="flex flex-col gap-2">
        <a href="https://github.com/AbdoMoh96" aria-label="GitHub">
          <img src={iconGithub} alt="GitHub" className="h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/abdo-moh96/" aria-label="LinkedIn">
          <img src={iconLinkedIn} alt="LinkedIn" className="h-8 w-8" />
        </a>
      </div>
    </div>
  )
}
