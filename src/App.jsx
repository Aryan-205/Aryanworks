import { motion } from 'motion/react'

export default function App() {
  return (
    <>
      <div className="p-12 h-screen w-full flex justify-center " >
        <div className="flex justify-end p-4 items-center w-full">
          <img 
            src="/me.jpeg" alt="" 
            className="w-96 h-96 p-8 bg-black rounded-full border border-white object-fill z-10"
          />
        </div>
      </div>
    </>
  )
}