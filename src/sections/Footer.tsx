import linkedinIcon from '../assets/linkedin-footer.png';
import githubIcon from '../assets/github-footer.png';

export const Footer = () => {

  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alvaro-diez-rey-983a281b1/",
      iconImage: linkedinIcon
    },
    {
      name: "GitHub",
      link: "https://github.com/alvarodr97",
      iconImage: githubIcon
    }
  ]

  return (
    <footer className="text-white bg-black grid place-content-center pt-4">
        <div className="max-w-7xl px-10">
          <div className="flex flex-col md:flex-row md:gap-x-10">
            <div className="flex flex-col flex-1 p-6">
              <h3 className="uppercase font-bold mb-4 text-xl">Álvaro Díez</h3>
              <p className="max-w-4xl text-sm">
                A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
              </p>
            </div>

            <div className="flex-1 p-6">
              <h3 className="uppercase font-bold mb-4 text-xl">
                Social
              </h3>
              <div className='flex flex-row gap-x-2'>
                {
                  socials.map(({name, link, iconImage}) => (
                    <a key={name} href={link} target="_blank" >
                      <img src={iconImage} alt={name} className='w-8 h-8 cursor-pointer' />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="p-6 text-center">
            <hr className='opacity-60' />
            <p className='mt-6 text-sm'>
              Made by <a href="https://www.linkedin.com/in/alvaro-diez-rey-983a281b1/" target="_blank" className='underline font-medium'>Álvaro Díez</a> 
            </p>
            <span className='text-xs'>
              2023
            </span>
          </div>
          
        </div>
    </footer>
  )
}
