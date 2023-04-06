import { ProjectCard } from '../components/ProjectCard';
import metaversus from '../assets/metaversus.png';
import evogym from '../assets/evogym.png';
import colorgame from '../assets/colorgame.png';

export const Projects = () => {

  const projects = [
    {
      title: 'Portfolio',
      image: metaversus,
      technologies: "React, TypeScript, Tailwind",
      link: "",
      github: "https://github.com/alvarodr97/portfolio-2023",
      description: "This portfolio website. You can check the code below."
    },
    {
      title: 'Metaversus',
      image: metaversus,
      technologies: "Next.js, motion, Tailwind",
      link: "",
      github: "",
      description: ""
    },
    {
      title: 'Evogym',
      image: evogym,
      technologies: "React, TypeScript, motion, Tailwind",
      link: "",
      github: "",
      description: ""
    },
    {
      title: 'Colorgame',
      image: colorgame,
      technologies: "React, TypeScript, Tailwind",
      link: "https://alvarodr97-colorgame.netlify.app/",
      github: "",
      description: ""
    }
  ]

  return (
    <section id="projects">
      <div className="section-div pt-24">
        <h2 className="section-div-h2 mb-6">Projects</h2>
        <div className='grid items-center w-full grid-cols-1 grid-rows-5 gap-6 px-5 mb-16 sm:px-10 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 sm:mt-0'>
          {
            projects.map(project => (
              <ProjectCard {...project} />
            ))
          }
        </div>
      </div>

    </section>
  )
}
