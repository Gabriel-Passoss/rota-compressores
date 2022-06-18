import { BsCheck2Circle } from 'react-icons/bs'

interface Content {
  title: string;
  description: string;
}

export function Elements ({ title, description }: Content) {
  return (
    <div className="m-auto">
      <BsCheck2Circle size={30} color="#FFA303" className="mb-4"/>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-[#495057]">{description}</p>
    </div>
  )
}