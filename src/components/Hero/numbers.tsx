interface Props {
  number: string;
  subTitle: string;
}

export function Numbers(props: Props) {
  return (
    <div className=" h-28 w-96 pt-4 mt-7 grid justify-center items-center">
      <h2 className="font-medium text-5xl text-stone-800">{props.number}</h2>
      <p className="font-thin font-main text-yellow-500 pt-1 pl-[0.8rem]">{props.subTitle}</p>
    </div>
  )
}