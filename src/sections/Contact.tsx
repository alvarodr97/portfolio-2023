import FormContact from "../components/FormContact"

export const Contact = () => {
  return (
    <section id="contact">
      <div className='section-div py-24'>
        <h2 className='section-div-h2'>
          Contact
        </h2>
        <p className="max-w-xl md:max-w-2xl px-8 md:px-0 text-lg md:text-xl text-center text-black mt-5 mb-6 md:mb-14">
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible
        </p>
        <FormContact />
      </div>
    </section>
  )
}
