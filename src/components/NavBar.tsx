import linkedinIcon from '../assets/linkedin-black.png';
import githubIcon from '../assets/github-black.png';
import { useState } from 'react';

export const NavBar = () => {

  const [isButtonVisible, setIsButtonVisible] = useState(false);

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


    <nav className="fixed z-20 w-full bg-[#fafafa] shadow-md ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-x-1 pl-2">
        {
          socials.map(({name, link, iconImage}) => (
            <a key={name} href={link} target="_blank" >
              <img src={iconImage} alt={name} className='w-8 h-8 cursor-pointer' />
            </a>
          ))
        }
        </div>
        <button data-collapse-toggle="navbar-default" id="navbar-button" onClick={() => {setIsButtonVisible(!isButtonVisible)}} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`${!isButtonVisible ? "hidden" : null} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" onClick={() => setIsButtonVisible(false)} className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[--main-color] md:p-0">Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsButtonVisible(false)} className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[--main-color] md:p-0">About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsButtonVisible(false)} className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[--main-color] md:p-0 ">Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsButtonVisible(false)} className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[--main-color] md:p-0 ">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
