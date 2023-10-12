import { ProjectCard } from '../components/ProjectCard';
import portfolio from '../assets/portfolio.png';
import LMS from '../assets/LMS.png';
import metaversus from '../assets/metaversus.png';
import evogym from '../assets/evogym.png';
import colorgame from '../assets/colorgame.png';

export const Projects = () => {

  const projects = [
    {
      title: 'Portfolio',
      image: portfolio,
      technologies: "React | TypeScript | Tailwind | Formik | Yup",
      github: "https://github.com/alvarodr97/portfolio-2023",
      description: "This portfolio website. You can check the code below."
    },
    {
      title: 'Learning Management System',
      image: LMS,
      technologies: "Next.js | TypeScript | Tailwind | MongoDB | Prisma",
      link: "https://lms-project-lake.vercel.app/",
      github: "https://github.com/alvarodr97/lms-project",
      description: "A simple Learning Management System. Still under development."
    },
    {
      title: 'Metaversus',
      image: metaversus,
      technologies: "Next.js | motion | Tailwind",
      link: "https://nextjs-metaversus-alvarodr97.vercel.app/",
      github: "https://github.com/alvarodr97/nextjs-metaversus",
      description: "Mockup website just to test some responsive designs."
    },
    {
      title: 'Evogym',
      image: evogym,
      technologies: "React | TypeScript | motion | Tailwind",
      link: "https://evogym-alvarodr97.vercel.app/",
      github: "https://github.com/alvarodr97/evogym-react",
      description: "Mockup website just to test some responsive designs."
    },
    {
      title: 'Colorgame',
      image: colorgame,
      technologies: "React | TypeScript | Tailwind",
      link: "https://alvarodr97-colorgame.netlify.app/",
      github: "https://github.com/alvarodr97/colorgame",
      description: "A little minigame to test dark mode with tailwind."
    }
  ]

  return (
    <section id="projects">
      <div className="section-div pt-24">
        <h2 className="section-div-h2 mb-6">Projects</h2>
        <div className='grid items-center w-full grid-cols-1 grid-rows-4 gap-6 px-5 mb-16 sm:px-10 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2'>
          {
            projects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
