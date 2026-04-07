const iconGithub = 'https://www.figma.com/api/mcp/asset/ec9e58a9-a870-45b1-b2e3-c908249f4cf3'
const iconLinkedIn = 'https://www.figma.com/api/mcp/asset/59f38d7c-a4df-45c7-a98a-e830a4b16ff1'
const logoImg = 'https://www.figma.com/api/mcp/asset/0e457d51-3248-4b8f-b8b8-c133cbbfb689'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] pb-8 pt-8">
      <div className="page-wrap flex flex-col gap-8 text-sm md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="" className="h-4 w-4" />
              <span className="text-white">Abdelrahman</span>
            </div>
            <a href="mailto:abdo.moh96@outlook.com" className="text-[var(--text)]">
              abdo.moh96@outlook.com
            </a>
          </div>
          <p className="text-white">Web designer and front-end developer</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl text-white">Media</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/AbdoMoh96" aria-label="GitHub">
              <img src={iconGithub} alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/abdo-moh96/" aria-label="LinkedIn">
              <img src={iconLinkedIn} alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-[var(--text)]">
        (c) Copyright 2022. Made by Abdelrahman
      </p>
    </footer>
  )
}
