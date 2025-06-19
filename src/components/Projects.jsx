export default function Projects({img,name,discription}){
  return (
    <>
    <div className="border border-white rounded-lg w-fit p-4 space-y-4">
      <img src={`${img}`} alt="" className="w-[28rem] h-60 rounded-lg"/>
      <div className="text-white font-boska">
        <p className="font-bold text-4xl">{name}</p>
        <p className="text-lg w-96">{discription}</p>
      </div>
      <div className="flex justify-between">
        <button className="text-white px-2 py-1 border border-white rounded-3xl text-sm">3k+ Impressions</button>
        <div className="flex gap-2">
          <a 
            href="https://x.com/BolaJi_69" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="text-white p-2 rounded-3xl border border-white">
              <img src="/expand-arrows.png" alt="" className="w-4 h-4"/>
            </button>
          </a>
          <a 
            href="https://github.com/Aryan-205" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="text-white p-2 rounded-3xl border border-white">
              <img src="/github.png" alt="" className="w-4 h-4"/>
            </button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}