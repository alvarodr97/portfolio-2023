import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "es", lang: "Spanish" },
];

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-row gap-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => {
            i18n.changeLanguage(lng.code);
          }}
          className={`px-2 rounded-md font-bold ${
            lng.code === i18n.language
              ? "bg-[--main-color] text-white"
              : "bg-none"
          }`}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
};
