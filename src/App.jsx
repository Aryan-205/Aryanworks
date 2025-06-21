import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Header />

      <motion.div
        className="flex justify-around p-4 items-center w-full my-20 md:my-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-lg md:text-5xl text-white w-[28rem] md:w-[30rem]">
          <p>
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold">
              Aryan Bola
            </span>
            , a Software Developer creating Awesome software applications
          </p>
        </div>
        <img
          src="/me.jpeg"
          alt=""
          className="w-40 h-40 md:w-96 md:h-96 p-2 md:p-8 bg-black rounded-full border border-white object-fill"
        />
      </motion.div>

      {/* Skill Stack */}
      <div className="flex justify-around items-center mt-10 md:mt-40">
        {[1, 2].map((item, idx) => (
          <motion.div
            key={idx}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="rounded-full border flex justify-center items-center border-white w-32 h-32 md:w-80 md:h-80 relative"
          >
            <img
              src="zoro.jpeg"
              alt=""
              className="rounded-full border border-white w-4 h-4 md:w-8 md:h-8 absolute top-3 left-3 md:top-6 md:left-6"
            />
            <img
              src="zoro.jpeg"
              alt=""
              className="rounded-full border border-white w-4 h-4 md:w-8 md:h-8 absolute bottom-3 right-3 md:bottom-6 md:right-6"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="rounded-full border border-white w-16 h-16 md:w-40 md:h-40 relative"
            >
              <img
                src="zoro.jpeg"
                alt=""
                className="rounded-full border border-white w-4 h-4 md:w-8 md:h-8 absolute top-1 left-1 md:top-2 md:left-2"
              />
              <img
                src="zoro.jpeg"
                alt=""
                className="rounded-full border border-white w-4 h-4 md:w-8 md:h-8 absolute bottom-1 right-1 md:bottom-2 md:right-2"
              />
            </motion.div>
          </motion.div>
        ))}

        <p className="text-white font-boska font-bold text-lg md:text-5xl">
          Skill Stack
        </p>
      </div>

      {/* Projects */}
      <motion.p
        className="font-boska font-bold text-white text-2xl md:text-5xl text-center mt-8 md:mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>

      <div className="flex flex-col justify-center items-center my-8 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <Projects
              key={i}
              img={`/Rento.png`}
              name={`Rento`}
              discription={`Hello this is the discription and here is all the details of the things used and about it`}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="text-white px-2 py-1 w-fit border rounded-3xl text-xs md:text-sm mt-8"
        >
          View more
        </motion.button>
      </div>

      {/* About Me */}
      <motion.p
        className="font-boska font-bold text-white text-2xl md:text-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About me
      </motion.p>
      <div className="text-white text-center text-md md:text-3xl px-12 mt-2 md:px-52">
        <p>Hello</p>
        <p>
          I am
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-bold">
            Aryan Bola
          </span>
          , just a Curious guy who wants to know everything, 20, 2nd year DU, I know
          this line is very common, but I'm actually very passionate about the
          things I do. Everywhere I go I try to learn from others, doesn't
          matter big or small.
        </p>
      </div>
    </div>
  );
}