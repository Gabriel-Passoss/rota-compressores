import { Elements } from "./Elements";

export function Services() {
  return (
    <div className="h-[53rem]">
      <div className="flex flex-col items-center mt-24">
        <p className="text-xl text-[#FFA303]">Serviços</p>
        <strong className="text-[2.5rem] mt-5 ">Como podemos ajudá-lo</strong>
        <strong className="text-[2.5rem]">com seu compressor?</strong>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-y-32 gap-x-10 mt-32">
        <Elements
          title="Manutenção Preventiva" 
          description="Realizamos a manutenção preventiva do seu compressor de ar"
        />
        <Elements
          title="Manutenção Preventiva" 
          description="Realizamos a manutenção preventiva do seu compressor de ar"
        />
        <Elements
          title="Manutenção Preventiva" 
          description="Realizamos a manutenção preventiva do seu compressor de ar"
        />
        <Elements
          title="Manutenção Preventiva" 
          description="Realizamos a manutenção preventiva do seu compressor de ar "
        />
        <Elements
          title="Manutenção Preventiva" 
          description="Realizamos a manutenção preventiva do seu compressor de ar"
        />
        <Elements
          title="Manutenção Preventiva" 
          description="Realizamos a manutenção preventiva do seu compressor de ar"
        />
      </div>
    </div>
  )
}