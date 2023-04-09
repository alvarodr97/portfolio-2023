import githubIcon from '../assets/github.png';

interface ProjectCard {
  title: string;
  image: string;
  technologies: string;
  link?: string;
  github: string;
  description: string;
}

export const ProjectCard = ({title, image, technologies, link, github, description}: ProjectCard) => {
  return (
    <div className="bg-[#fafafa] p-4 rounded-lg text-black shadow-lg hover:shadow-xl transition duration-250">
      <div className="flex flex-col text-center">
        <img src={image} alt={title} className="object-contain" />
        <h3 className="font-bold text-xl mt-2">{title}</h3>
        <span className="italic text-sm mb-4 mt-1 font-medium">{technologies}</span>
        <p className="mb-4 px-3">{description}</p>
        <div className="flex gap-x-3 self-center">
          {
            link
              ? <a href={link} target="_blank" className="bg-[--main-color] px-5 py-2 rounded-3xl text-[#fafafa] font-bold border border-[--main-color] hover:text-[--main-color] hover:bg-[#fafafa] cursor-pointer">Visit</a>
              : null
          }
          <a href={github} target="_blank">
            <img src={githubIcon} alt="Code" className='w-10 h-10 hover:opacity-80 hover:cursor-pointer' />
          </a>
        </div>
      </div>
    </div>
            
  )
}
