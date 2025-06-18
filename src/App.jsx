import { motion } from 'motion/react'

export default function App() {
  return (
    <>
      <div className="p-24 h-screen w-full flex justify-center relative" >
        <motion.img 
          src="/4.jpg" alt="" 
          className='absolute top-0 left-0 object-fill'
          initial={{scale:0.3}}
          animate={{scale:1}}
          transition={{duration:0.8}}
          />
        <div className="flex justify-center p-2 items-center w-full relative">
          <motion.img 
            initial={{scale:0.60, padding:"0px"}} 
            animate={{scale:1,padding:"32px"}} 
            transition={{ duration: 0.3 }} 
            src="/Zoro.jpeg" alt="" 
            className="w-96 h-96 bg-black rounded-full border border-white object-fill z-10"
            whileHover={{rotateY:10,rotateX:10,boxShadow: "-20px 20px 50px rgba(8,112,104,0.7)"}}
            />
          <motion.p 
            className='text-4xl text-white font-thin px-8 py-2 border border-white rounded-lg absolute w-fit h-fit bg-black'
            initial={{ top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
            animate={{ top: 0, left: 0, translateX: '0%', translateY: '0%' }}
            transition={{ duration: 0.8 }}
          >
            Designs
          </motion.p>
          <motion.p 
            className='text-4xl text-white font-thin px-8 py-2 border border-white rounded-lg absolute w-fit h-fit bg-black'
            initial={{ top: '50%', right: '50%', translateX: '-50%', translateY: '-50%' }}
            animate={{ top: 0, right: 0, translateX: '0%', translateY: '0%' }}
            transition={{ duration: 0.8 }}
          >
            Frontend
          </motion.p>
          <motion.p 
            className='text-4xl text-white font-thin px-8 py-2 border border-white rounded-lg absolute w-fit h-fit bg-black'
            initial={{ bottom: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
            animate={{ bottom: 0, left: 0, translateX: '0%', translateY: '0%' }}
            transition={{ duration: 0.8 }}
          >
            Backend
          </motion.p>
          <motion.p 
            className='text-4xl text-white font-thin px-8 py-2 border border-white rounded-lg absolute w-fit h-fit bg-black'
            initial={{ bottom: '50%', right: '50%', translateX: '-50%', translateY: '-50%' }}
            animate={{ bottom: 0, right: 0, translateX: '0%', translateY: '0%' }}
            transition={{ duration: 0.8 }}
          >
            Management
          </motion.p>
        </div>
      </div>
    </>
  )
}