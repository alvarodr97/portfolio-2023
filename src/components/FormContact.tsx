import { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import '../styles/loader.css';

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  fullname: Yup.string()
    .required("Name is a required field"),
  message: Yup.string()
    .required("Message is a required field")
});

function FormContact() {

  const [loadingForm, setLoadingForm] = useState(false);

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", fullname: "", message: "" }}
        onSubmit={(values, {resetForm}) => {

          setLoadingForm(true);

          fetch('https://formsubmit.co/ajax/alvarodr97_form@outlook.es', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values),
          })
            .then(() => {
              resetForm({values: { email: "", fullname: "", message: "" }});
              toast.success('Message received!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

          })
            .catch(() => {
              toast.error('Something went wrong!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            } )
            .finally(() => {
              setLoadingForm(false);
            });
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
        <div className="bg-[#fafafa] p-4 rounded-lg max-w-2xl w-3/4 relative">

            {
              loadingForm 
                ? <div className="absolute w-full h-full rounded-lg z-19 left-0 top-0 grid place-content-center bg-slate-700 opacity-50"><span className="loader"></span></div>
                : null
            }

            <ToastContainer />

              <form noValidate onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col">

                    <label htmlFor="fullname" className="ml-2 mb-1 font-medium">Name</label>

                    <input
                    type="text"
                    name="fullname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                    placeholder="Enter your name"
                    className="p-4 bg-[#f0f0f0] rounded-lg"
                    />

                    <p className="h-6 mb-3 ml-2 mt-1 text-red-400 font-medium">
                    {errors.fullname && touched.fullname && errors.fullname}
                    </p>
                    
                </div>

                <div className="flex flex-col">  
                    <label htmlFor="email" className="ml-2 mb-1 font-medium">Email</label> 

                    <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter your email"
                    className="p-4 bg-[#f0f0f0] rounded-lg"
                    id="email"
                    />

                    <p className="h-6 mb-3 ml-2 mt-1 text-red-400 font-medium">
                    {errors.email && touched.email && errors.email}
                    </p>
                </div>

                <textarea placeholder="Enter your message" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} className="p-4 bg-[#f0f0f0] rounded-lg h-24 md:h-32 resize-none" />
                <p className="h-6 mb-3 ml-2 mt-1 text-red-400 font-medium">
                  {errors.message && touched.message && errors.message}
                </p>

                <button type="submit" className="text-white md:mt-6 px-12 py-3 rounded-lg border border-[black] shadow-lg font-bold bg-[--main-color] hover:text-[--main-color] hover:bg-[#fafafa] hover:shadow-none transition duration-200">
                  Submit
                </button>

              </form>
        </div>
        )}
      </Formik>
    </>
  );
}

export default FormContact;