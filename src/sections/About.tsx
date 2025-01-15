import { Trans, useTranslation } from "react-i18next";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Zustand",
  "Next.js",
  "AWS",
  "GIT",
  "GitHub",
  "Node.js",
  "MongoDB",
  "Docker",
  "Tailwind",
  "Jenkins",
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-[#fafafa] md:h-screen">
      <div className="section-div pt-24">
        <h2 className="section-div-h2">{t("about")}</h2>

        <p className="max-w-xl md:max-w-2xl px-8 md:px-0 text-lg md:text-xl text-center text-[#666] mt-8 mb-4 md:mb-14">
          {t("aboutP")}
        </p>

        <div className="flex flex-col md:flex-row gap-4 mx-8 md:mx-0">
          {/* Know me */}
          <div className="flex-1 my-6 md:my-0 md:p-6 text-[#666]">
            <h3 className="mb-4 font-bold text-2xl text-black">
              {t("aboutKnowMe")}
            </h3>

            <p className="mb-3 pr-4 text-base md:text-lg ">
              <Trans
                i18nKey="aboutKnowMeP1"
                components={{ strong: <strong /> }}
              />
            </p>

            <p className="mb-3 pr-4 text-base md:text-lg">
              <Trans
                i18nKey="aboutKnowMeP2"
                components={{ strong: <strong /> }}
              />
            </p>

            <p className="mb-2 pr-4 text-base md:text-lg">
              <Trans
                i18nKey="aboutKnowMeP3"
                components={{ strong: <strong /> }}
              />
            </p>

            <a href="#contact">
              <button className="text-white mt-6 px-12 py-3 rounded-lg border border-[black] shadow-lg font-bold bg-[--main-color] hover:text-[--main-color] hover:bg-[#fafafa] hover:shadow-none transition duration-200">
                {t("contact")}
              </button>
            </a>
          </div>

          {/* Skills */}
          <div className="flex-1 my-6 md:my-0 md:p-6 text-[#666]">
            <h3 className="mb-4 font-bold text-2xl text-black">
              {t("skills")}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-[--main-color] text-white rounded-xl py-2 md:py-3 px-3 md:px-4 border-2 border-black"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
