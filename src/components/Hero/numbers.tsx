interface Props {
  number: string;
  subTitle: string;
}

export function Numbers({ number, subTitle}: Props) {
  return (
    <div className=" h-28 w-96 pt-4 mt-7 flex flex-col justify-center items-center ">
      <h2 className="font-medium text-5xl text-stone-800">{number}</h2>
      <p className="font-thin font-main text-[#FFA303] pt-1">{subTitle}</p>
    </div>
  )
}