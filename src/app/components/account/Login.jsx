
import React, { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URL_HOME, URL_REGISTER } from "../../constants/urls/urlFrontEnd";

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
              url: 'http://127.0.0.1:8000/connexion',
              data: {
                  email: formik.values.email,
                  mot_de_passe: formik.values.mot_de_passe,
              }
          }).then(function (response) {
              console.log(response.data);
              if (response.data.status === true) {
                  alert(response.data.message);
                  // window.location.href = URL_LOGIN;
                  // alert(response.data.message);
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
                     
                      <div className="flex items-center">
                        <input type="checkbox" className="checkbox mt-4"/>
                        <p className="ml-2 text-xs text-[#114076] mt-4">Rester connecté</p>
                      </div>

                      </div>
                      <button
                          type="submit"
                          className="btn-green block w-full h-[3rem] mt-16 mb-8">
                     SE CONNECTER
                      </button>
                     

                      <div className=" flex justify-end mb-8">
                        <div className="text-sm ">
                          <Link to="/sendpassword" >
                            <span className=" cursor-pointer font-medium text-primary-dark italic hover:text-primary ">
                              Mot de passe oublié?
                            </span>
                          </Link>
                        </div>
                      </div>

                      <div>
                        <Link to={URL_REGISTER}>
                          <button
                            type="submit"
                            className="btn btn-green-inverse group relative w-full"
                          >
                            CREER UN COMPTE
                          </button>
                        </Link>
                      </div>

                  </form>
     


          </div>


  );
}


export default Login;