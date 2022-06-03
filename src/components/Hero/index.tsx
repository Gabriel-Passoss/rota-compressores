import { FaWhatsapp } from 'react-icons/fa'

export function Hero() {
  return (
    <section className="h-[46rem] bg-[#333333] flex">
      <div className="pl-36 pt-44 absolute">
        <p className="text-lg text-yellow-500 font-semibold ">BOAS-VINDAS A ROTA COMPRESSORES 🛠️</p>
        <h2 className="pt-12 text-5xl text-gray-300 font-semibold">Assistência técnica especializada <br/> em compressores de ar</h2>
        <p className="pt-12 text-xl text-gray-300 font-thin">Equipe altamente qualificada. Manutenção ágil e de qualidade<br/></p>
        <p className="text-xl text-gray-300 font-bold">o melhor para a sua empresa.</p>
        <button type="button" className="flex items-center mt-14 border-solid border border-zinc-400 rounded-[3rem] justify-items-center py-2.5 px-10 text-slate-50 font-bold text-lg bg-yellow-500">
          <FaWhatsapp color="#f8fafc" className="w-6 h-6 mr-3" />
          FALE CONOSCO
        </button>
      </div>
      <div>
        <img src="/images/hero.webp" alt="" className="ml-[52rem] w-[61rem] h-[40rem]"/>
      </div>
      <div>
        
      </div>
    </section>
  )
}