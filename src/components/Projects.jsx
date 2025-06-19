export default function Projects({img,name,discription}){
  return (
    <>
    <div className="border border-white rounded-lg w-fit p-2">
      <img src={`${img}`} alt="" className="w-[30rem] h-60"/>
      <div className="text-white font-boska">
        <p className="font-bold text-2xl">{name}</p>
        <p className="text-lg w-96">{discription}</p>
      </div>
      <div>
        <button className="text-white px-4 py-2 ronded-xl"><a href="https://x.com/BolaJi_69">Code</a></button>
      </div>
    </div>
    </>
  )
}