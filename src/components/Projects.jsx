export default function Projects({img,name,discription}){
  return (
    <>
    <div className="border border-white rounded-lg w-fit p-4 space-y-2 md:space-y-4">
      <img src={`${img}`} alt="" className="w-64 h-32  md:w-96 md:h-56 rounded-lg"/>
      <div className="text-white font-boska">
        <p className="font-bold text-xl md:text-4xl">{name}</p>
        <p className="text-sm md:text-lg w-64 md:w-96">{discription}</p>
      </div>
      <div className="flex justify-between">
        <button className="text-white px-2 py-1 border border-white rounded-3xl text-xs md:text-sm">3k+ Impressions</button>
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

// import { motion } from 'framer-motion';

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A personal portfolio built with React and Framer Motion, featuring project showcases and smooth animations.',
//     image: 'https://via.placeholder.com/400x200',
//   },
//   {
//     title: 'E-commerce Dashboard',
//     description: 'A clean admin panel for managing products, orders, and stats using React and responsive design.',
//     image: 'https://via.placeholder.com/400x200',
//   },
//   {
//     title: 'Blog Platform',
//     description: 'Markdown-based blogging platform with full text search, categorization, and dark mode support.',
//     image: 'https://via.placeholder.com/400x200',
//   },
// ];

// const cardVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.5,
//     },
//   }),
// };

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h3
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold mb-12 text-center"
//         >
//           Featured Projects
//         </motion.h3>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="visible"
//               custom={index}
//               viewport={{ once: true }}
//             >
//               <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//               <div className="p-5">
//                 <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
//                 <p className="text-gray-600 text-sm">{project.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }