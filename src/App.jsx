import Header from './components/Header.jsx'

export default function App() {
  return (
    <>
      <div className="p-12 h-screen w-full flex justify-center relative" >
        <Header/>
        <div className="flex justify-around p-4 items-center w-full">
          <div className='text-5xl text-white w-[30rem]'>
            <p ><span className='bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold'>Aryan Bola</span>, a Software Developer creating fantastic software applications</p>
          </div>
          <img 
            src="/me.jpeg" alt="" 
            className="w-96 h-96 p-8 bg-black rounded-full border border-white object-fill z-10"
          />
        </div>
      </div>
    </>
  )
}