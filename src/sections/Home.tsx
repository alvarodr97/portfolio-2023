import Marquee from "react-fast-marquee"

export const Home = () => {
  return (
    <section className="w-full h-screen pt-20 relative overflow-x-hidden">
      <Marquee
        className='rotate-[-2deg] left-[-10px] mt-5'
        gradient={false}
        speed={100}
        style={{ width: '130%' }}
      >
        <span
          className='h-full text-[70px] sm:text-[60px] md:text-[80px] lg:text-[100px] break-words font-bold 
         border-y-[20px] md:border-y-[30px] lg:border-y-[40px] border-[--main-color] text-white'
        >
          &nbsp;DEVELOPER // DESIGNER // DEVELOPER // DESIGNER // DEVELOPER // DESIGNER // DEVELOPER // DESIGNER // DEVELOPER // DESIGNER //
        </span>
      </Marquee>
      <div className="flex flex-col text-center justify-center items-center pt-24">
        <h1 className="uppercase text-6xl font-bold">hey, I'm Álvaro Díez</h1>
        <p className="my-10 max-w-2xl text-lg">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button className="px-10 py-4 rounded-lg border border-[--main-color] font-bold bg-[--main-color] hover:text-[--main-color] hover:bg-[#090938] transition duration-200">Projects</button>
        {/* <div className="flex items-center justify-around mt-10">
          <div className="mouse"></div>
        </div> */}
      </div>

      <div className="absolute flex items-center justify-around bottom-8 left-0 right-0">
        <div className="mouse"></div>
      </div>
      
    </section>
  )
}
