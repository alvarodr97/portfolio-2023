export const Home = () => {
  return (
    <section id="home" className="h-screen relative grid content-center">
      <div className="section-div flex flex-col items-center text-center">
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Hey, I'm Álvaro Díez</h1>
        <p className="my-10 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl px-7 md:px-0 text-base sm:text-lg md:text-xl">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button className="text-white px-10 py-4 rounded-lg border border-[--main-color] font-bold bg-[--main-color] hover:text-[--main-color] hover:bg-[#DFDBE5] transition duration-200">Projects</button>
      </div>

      <div className="absolute flex items-center justify-around bottom-8 left-0 right-0">
        <div className="mouse"></div>
      </div>
      
    </section>
  )
}
