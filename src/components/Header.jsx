import { useState } from "react"

export default function Header(){
  const [light, setLight] = useState(false)
  return (
    <>
    <div className='fixed top-2 md:top-8 left-10 md:left-52 right-10 md:right-52 z-10 flex justify-around items-center text-white font-bold text-md sm:text-lg md:text-2xl font-boska backdrop-blur-sm border rounded-3xl'>
      <p>Home</p>
      <p>Projects</p>
      <p>Snippets</p>
      <p>AboutMe</p>
      <button className=" p-2 rounded-full " onClick={()=>setLight((prev)=>!prev)}>
        {light 
        ? <img src="/moon.png" className="w-6 h-6" /> 
        : <img src="/sun.png" className="w-6 h-6"/> }
      </button>
    </div>
    </>
  )
}