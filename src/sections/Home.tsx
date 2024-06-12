import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="h-screen relative grid content-center">
      <div className="section-div flex flex-col items-center text-center">
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {t("homeH1")}
        </h1>
        <p className="my-10 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl px-7 md:px-0 text-base sm:text-lg md:text-xl">
          {t("homeP")}
        </p>
        <a
          href="#projects"
          className="text-white px-10 py-4 rounded-lg border border-[--main-color] font-bold bg-[--main-color] hover:text-[--main-color] hover:bg-[#DFDBE5] transition duration-200"
        >
          {t("projects")}
        </a>
      </div>

      <div className="absolute flex items-center justify-around bottom-14 sm:bottom-8 left-0 right-0">
        <div className="mouse"></div>
      </div>
    </section>
  );
};
