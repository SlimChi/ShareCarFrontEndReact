import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { URL_HOME, URL_REGISTER } from "../../constants/urls/urlFrontEnd";
import { signIn } from "../../redux-store/authenticationSlice";
import { authenticate } from "./../../api/backend/account";

/**
 * Component Login
 *
 * @author Peter Mollet
 */
const Login = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    authenticate(values)
      .then((res) => {
        if (res.status === 200 && res.data.id_token) {
          dispatch(signIn(res.data.id_token));
          navigate(URL_HOME);
        }
      })
      .catch(() => setErrorLog(true));
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-md  p-4 py-12 px-4  sm:px-6 lg:px-8">
      <div>

        <h2 className="mt-6 text-center text-2xl font-bold text-[#114076]">
          CONNEXION
        </h2>
      </div>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        <Form className="mt-8 space-y-6">
          <div className="flex flex-col space-y-3 rounded-md  shadow-sm">
            <Field
              type="Email"
              name="Email"
              placeholder="Email"
              autoComplete="Email"
              className="input"
            />
            <Field
              type="password"
              name="password"
              placeholder="Mot de passe"
              autoComplete="current-password"
              className="input"
            />
            <div className="flex items-center">
            <Field
              type="checkbox"
              name="toggle"
              className="checkbox  mt-4"
            /> 
            <p className="ml-2 text-xs text-[#114076] mt-4">Rester connecté</p>
            </div>
          </div>

         

          <div >
            <button
              type="submit"
              className="btn btn-green group relative w-full mt-6"
            >
              SE CONNECTER
            </button>
          </div>
          {errorLog && (
            <div className="flex justify-center">
              <small className="text-sm italic text-red-600">
                Login/Password incorrect(s)
              </small>
            </div>
          )}

          <div className="mt-3 flex justify-end ">
            <div className="text-sm ">
              <Link to="/NewPassword" >
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
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
