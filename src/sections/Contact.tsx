import { useTranslation } from "react-i18next";
import FormContact from "../components/FormContact"

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <div className='section-div py-24'>
        <h2 className='section-div-h2'>
          {t("contact")}
        </h2>
        <p className="max-w-xl md:max-w-2xl px-8 md:px-0 text-lg md:text-xl text-center text-black mt-5 mb-6 md:mb-14">
        {t("contactMe")}
        </p>
        <FormContact />
      </div>
    </section>
  )
}
