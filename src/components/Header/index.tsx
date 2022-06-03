export function Header() {
  return (
    <header className="flex h-20 bg-[#333333] justify-between">
      <img src="/images/logo.svg" alt="" className="h-24 w-44 relative pb-4 pl-4" />
      <div className="flex items-center">
        <nav className="">
          <a href="" className="pl-28 pr-8 text-gray-400 hover:text-gray-200 transition-colors">Início</a>
          <a href="" className="pr-8 text-gray-400 hover:text-gray-200 transition-colors">Quem somos</a>
          <a href="" className="pr-8 text-gray-400 hover:text-gray-200 transition-colors">Onde estamos</a>
          <a href="" className="pr-8 text-gray-400 hover:text-gray-200 transition-colors">Contato</a>
        </nav>
      </div>
      <div className="pr-16 pt-[1.5rem]">
        <a className="border-solid border border-zinc-400 rounded-[3rem] justify-items-center py-2.5 px-7 text-zinc-300 font-bold text-lg">
        Fazer Orçamento
        </a>
      </div>
      
    </header>
  )
}