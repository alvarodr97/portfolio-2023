export const About = () => {

  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "AWS", "GIT", "GitHub", "Terminal", "Node.js", "MongoDB", "Docker", "Tailwind", "Jenkins"];

  return (
    <section id="about" className="bg-[#fafafa] md:h-screen">
      <div className="section-div pt-24">
        <h2 className="section-div-h2">About me</h2>

        <p className="max-w-xl md:max-w-2xl px-8 md:px-0 text-lg md:text-xl text-center text-[#666] mt-8 mb-4 md:mb-14">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mx-8 md:mx-0">
          {/* Know me */}
          <div className="flex-1 my-6 md:my-0 md:p-6 text-[#666]">

            <h3 className="mb-4 font-bold text-2xl text-black">
              Get to know me!
            </h3>

            <p className="mb-3 pr-4 text-base md:text-lg ">
              I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
            </p>

            <p className="mb-3 pr-4 text-base md:text-lg">
            I am constantly learning, which leads me to acquire more knowledge of the web development world, such as <strong>backend</strong> and <strong>devops</strong> technologies.
            </p>

            <p className="mb-2 pr-4 text-base md:text-lg">
              I'm open to <strong>Job opportunities</strong> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
            </p>

            <a href="#contact">
              <button className="text-white mt-6 px-12 py-3 rounded-lg border border-[black] shadow-lg font-bold bg-[--main-color] hover:text-[--main-color] hover:bg-[#fafafa] hover:shadow-none transition duration-200">Contact</button>
            </a>



          </div>

          {/* Skills */}
          <div className="flex-1 my-6 md:my-0 md:p-6 text-[#666]">
            <h3 className="mb-4 font-bold text-2xl text-black">My Skills</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {
                skills.map(skill => (
                  <div key={skill} className="bg-[--main-color] text-white rounded-xl py-2 md:py-3 px-3 md:px-4 border-2 border-black">{skill}</div>
                ))
              }
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
