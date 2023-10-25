import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './register.css';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(2, 'Le prénom doit comporter au moins 2 caractères')
        .required('Le prénom est requis'),
      lastname: Yup.string()
        .min(2, 'Le nom doit comporter au moins 2 caractères')
        .required('Le nom est requis'),
      email: Yup.string()
        .email('Adresse email invalide')
        .required('L\'adresse email est requise'),
      password: Yup.string()
        .min(6, 'Le mot de passe doit comporter au moins 6 caractères')
        .required('Le mot de passe est requis'),
    }),
    onSubmit: (values) => {
        axios
        .post('http://127.0.0.1:8000/api/users',values)
        .then((res) => {
            console.log(res.status === 200 && res.data.id_token);
            // JSON.stringify(values);
            // console.log(values);
            navigate(URL_HOME);
        })
      console.log(values);
    },
  });

  return (
    <div className="form-container">
      <h1>Inscription</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            {...formik.getFieldProps('firstname')}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="error">{formik.errors.firstname}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Nom</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            {...formik.getFieldProps('lastname')}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="error">{formik.errors.lastname}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
