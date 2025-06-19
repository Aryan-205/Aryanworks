import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'

export default function App() {
  return (
    <>
      <div className="h-screen w-full relative">
        <Header/>
        <div className="flex justify-around p-4 items-center w-full my-40">
          <div className='text-5xl text-white w-[30rem]'>
            <p ><span className='bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold'>Aryan Bola</span>, a Software Developer creating Awesome software applications</p>
          </div>
          <img 
            src="/me.jpeg" alt="" 
            className="w-96 h-96 p-8 bg-black rounded-full border border-white object-fill"
          />
        </div>
        <div className='flex justify-around items-center'>
          <div className="rounded-full border border-white w-80 h-80 relative transition-all animate-spinSlow duration-500 ease-in-out">
            <img src="me.jpeg" alt="" className="rounded-full border border-white w-8 h-8 absolute top-6 left-6"/>
            <img src="me.jpeg" alt="" className="rounded-full border border-white w-8 h-8 absolute bottom-6 right-6"/>
          </div>
          <p className='text-white font-boska font-bold text-5xl'>Skill Stack</p>
          <div className="rounded-full border border-white w-80 h-80 relative transition-all animate-spinSlow duration-500 ease-in-out">
            <img src="me.jpeg" alt="" className="rounded-full border border-white w-8 h-8 absolute top-6 left-6"/>
            <img src="me.jpeg" alt="" className="rounded-full border border-white w-8 h-8 absolute bottom-6 right-6"/>
          </div>
        </div>
        <p className='font-boska font-bold text-white text-5xl text-center'>Projects</p>
        <div className='flex justify-around items-center my-20 grid-cols-1 md:grid-cols-2'>
          <Projects img={`/Rento.png`} name={'Rento'} discription={'hello this is the discription and here is all the details of the things used and about it'}/>
          <Projects img={`/Rento.png`} name={'Rento'} discription={'hello this is the discription and here is all the details of the things used and about it'}/>
        </div>
        <p className='font-boska font-bold text-white text-5xl text-center'>About me</p>
        <div className='text-white text-center text-3xl px-52'>
          <p>Hello</p>
          <p>I am <span className='bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold'>Aryan Bola</span>, just a Curious guy who wants to know everything,20 ,2nd year DU, I know this line is very common, but I'm actually very passionate about the things i do, Every I go I try to learn from others, doesn't matter big or small</p>
        </div>
      </div>
    </>
  )
}