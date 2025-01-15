import { ProjectCard } from "../components/ProjectCard";
import jira from "../assets/jira.png";
import maps from "../assets/maps.png";
import LMS from "../assets/LMS.png";
import metaversus from "../assets/metaversus.png";
import evogym from "../assets/evogym.png";
import { Trans, useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Jira",
      image: jira,
      technologies: "React | TypeScript | Zustand | shadcn",
      link: "https://jira-clone-roan.vercel.app/",
      github: "https://github.com/alvarodr97/jira-clone",
      description: (
        <Trans
          i18nKey="jiraKey"
          defaults={t("projectsJiraDescription")}
          components={{ bold: <strong />, a: <a /> }}
        />
      ),
    },
    {
      title: "React Maps",
      image: maps,
      technologies: "React | TypeScript | Tailwind | shadcn",
      link: "https://react-map-one.vercel.app/",
      github: "https://github.com/alvarodr97/react-map",
      description: t("projectsMapDescription"),
    },
    {
      title: "Learning Management System",
      image: LMS,
      technologies: "Next.js | TypeScript | Tailwind | MongoDB | Prisma",
      link: "https://lms-project-lake.vercel.app/",
      github: "https://github.com/alvarodr97/lms-project",
      description: t("projectsLMSDescription"),
    },
    {
      title: "Metaversus",
      image: metaversus,
      technologies: "Next.js | motion | Tailwind",
      link: "https://nextjs-metaversus-alvarodr97.vercel.app/",
      github: "https://github.com/alvarodr97/nextjs-metaversus",
      description: t("projectsMetaversusDescription"),
    },
    {
      title: "Evogym",
      image: evogym,
      technologies: "React | TypeScript | motion | Tailwind",
      link: "https://evogym-alvarodr97.vercel.app/",
      github: "https://github.com/alvarodr97/evogym-react",
      description: t("projectsEvogymDescription"),
    },
  ];

  return (
    <section id="projects">
      <div className="section-div pt-24">
        <h2 className="section-div-h2 mb-6">{t("projects")}</h2>
        <div className="grid items-center w-full grid-cols-1 grid-rows-4 gap-6 px-5 mb-16 sm:px-10 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
