import { FaInstagram } from 'react-icons/fa'

export function Header() {
  return (
    <header className="flex h-20 bg-[#333333] justify-between">
      <img src="/images/logo.svg" alt="" className="h-24 w-44 relative mb-4 ml-4" />
      <div className="flex items-center">
        <nav className="">
          <a href="" className="ml-28 mr-8 text-gray-400 hover:text-gray-200 transition-colors duration-500">Início</a>
          <a href="" className="mr-8 text-gray-400 hover:text-gray-200 transition-colors duration-500">Serviços</a>
          <a href="" className="mr-8 text-gray-400 hover:text-gray-200 transition-colors duration-500">Sobre nós</a>
          <a href="" className="mr-8 text-gray-400 hover:text-gray-200 transition-colors duration-500">Contato</a>
        </nav>
      </div>
      <div className="mr-16 mt-4">
        <button type="button" className="border-solid border border-zinc-400 rounded-[3rem] justify-items-center py-2.5 px-7 text-zinc-300 font-bold text-lg hover:text-zinc-100 hover:border-zinc-200 transition-colors duration-300">
        Fazer Orçamento
        </button>
      </div>
    </header>
  )
}