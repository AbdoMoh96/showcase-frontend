const iconGithub = 'https://www.figma.com/api/mcp/asset/47878ef0-000a-4603-8b86-d2f90ded4a84'
const iconDribble = 'https://www.figma.com/api/mcp/asset/3b454917-6be6-4c79-b9ff-268916ed5a0c'
const iconFigma = 'https://www.figma.com/api/mcp/asset/5f1bf715-53b2-42af-ae5e-c7fba7557f21'

export default function MediaBar() {
  return (
    <div className="absolute left-4 top-0 flex flex-col items-center gap-2">
      <div className="h-48 w-px bg-[var(--line)]" />
      <div className="flex flex-col gap-2">
        <img src={iconGithub} alt="Github" className="h-8 w-8" />
        <img src={iconDribble} alt="Dribble" className="h-8 w-8" />
        <img src={iconFigma} alt="Figma" className="h-8 w-8" />
      </div>
    </div>
  )
}
