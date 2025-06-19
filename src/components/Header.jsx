import { useState } from "react"

export default function Header(){
  const [light, setLight] = useState(false)
  return (
    <>
    <div className='fixed top-4 left-0 right-0 z-10 w-full flex justify-around px-80 items-center text-white font-bold text-2xl font-boska backdrop-blur-sm'>
      <p>Home</p>
      <p>Projects</p>
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