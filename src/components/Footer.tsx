const iconGithub = 'https://www.figma.com/api/mcp/asset/ec9e58a9-a870-45b1-b2e3-c908249f4cf3'
const iconFigma = 'https://www.figma.com/api/mcp/asset/59f38d7c-a4df-45c7-a98a-e830a4b16ff1'
const iconDiscord = 'https://www.figma.com/api/mcp/asset/35cb41f3-81ae-4677-aa97-6a6e2099774f'
const logoImg = 'https://www.figma.com/api/mcp/asset/0e457d51-3248-4b8f-b8b8-c133cbbfb689'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] pb-8 pt-8">
      <div className="page-wrap flex flex-col gap-8 text-sm md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="" className="h-4 w-4" />
              <span className="text-white">Elias</span>
            </div>
            <a href="mailto:elias@elias-dev.ml" className="text-[var(--text)]">
              elias@elias-dev.ml
            </a>
          </div>
          <p className="text-white">Web designer and front-end developer</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl text-white">Media</p>
          <div className="flex items-center gap-4">
            <img src={iconGithub} alt="Github" className="h-8 w-8" />
            <img src={iconFigma} alt="Figma" className="h-8 w-8" />
            <img src={iconDiscord} alt="Discord" className="h-8 w-8" />
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-[var(--text)]">
        (c) Copyright 2022. Made by Elias
      </p>
    </footer>
  )
}
