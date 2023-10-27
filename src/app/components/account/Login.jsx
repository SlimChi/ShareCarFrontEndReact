
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URL_HOME, URL_PROFIL, URL_REGISTER } from "../../constants/urls/urlFrontEnd";
import { parse } from "postcss";

function Login() {



  const formik = useFormik({
      initialValues: {
          email: "",
          mot_de_passe: "",
      },
      validationSchema: Yup.object({
          email: Yup.string()
              .email("Adresse e-mail invalide")
              .required("Champ requis"),
          mot_de_passe: Yup.string()
              .min(8, "Mot de passe trop court - minimum 8 caractères")
              .required("Champ requis"),
      }),
      onSubmit: () => {
          axios({
              method: 'post',
              url: 'https://127.0.0.1:8000/connexion',
              data: {
                  email: formik.values.email,
                  mot_de_passe: formik.values.mot_de_passe,
              }
          }).then(function (response) {
              console.log(response.data); 
              const id = response.data.id
              localStorage.setItem('id', id);
              if (response.data) {
                  window.location.href = URL_PROFIL
              } else {
                  return (response.data.message);
              }
          }).catch(function (error) {
              console.log(error);
          });
      }

  })


  return (
      <div className="w-full max-w-md space-y-8 rounded-md  p-4 py-12 px-4  sm:px-6 lg:px-8">
         
              <h2 className="mt-16 text-center text-2xl font-bold text-[#114076]">
           CONNEXION
              </h2>
                  <form onSubmit={formik.handleSubmit}>
                      <div className="flex flex-col space-y-3 ">
                      
                      <input

                          className="input"
                          name="email"
                          type="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          placeholder="Email" />
                      <span>
                          {formik.touched.email && formik.errors.email ? (
                              <>{formik.errors.email}</>
                          ) : null}
                      </span>

                      <input
                          type="password"
                          className="input"
                          name="mot_de_passe"
                          placeholder="Mot de passe"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mot_de_passe}
                      />
                      <span>
                          {formik.touched.mot_de_passe && formik.errors.mot_de_passe ? (
                              <>{formik.errors.mot_de_passe}</>
                          ) : null}
                      </span>
                     
                      </div>
                      <button
                          type="submit"
                          className="btn-green block w-full h-[3rem] mt-16 mb-8">
                     Se Connecter
                      </button>
                     
                  </form>
     


          </div>


  );
}


export default Login;


