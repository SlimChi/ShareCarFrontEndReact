import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/layouts/Navbar';
import Routes from './routes/Routes';
import Footer from './components/layouts/Footer';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ScrollToTop from './components/scroll/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, selectIsLogged } from './redux-store/authenticationSlice';
import { getToken } from './services/tokenServices';
import LoadingSpinner from './components/spinner/LoadingSpinner';
import { URL_HOME, URL_LOGIN, URL_PROFIL, URL_REGISTER, URL_RESET_PASSWORD, URL_SEND_PASSWORD } from './constants/urls/urlFrontEnd';

const App = () => {
  const [theme, colorMode] = useMode();
  document.body.style.backgroundColor = theme.palette.background.default;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsLogged);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      // Appel de l'action signIn avec le token pour restaurer l'état d'authentification
      dispatch(signIn(token));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  if (loading) {
    // Affichez un écran de chargement pendant le chargement des données d'authentification.
    return <LoadingSpinner />;
  }

  // if ((isAuthenticated && [URL_LOGIN, URL_REGISTER, URL_RESET_PASSWORD, URL_SEND_PASSWORD].includes(location.pathname)) ||
  //   (!isAuthenticated && ![URL_LOGIN, URL_REGISTER, URL_RESET_PASSWORD, URL_SEND_PASSWORD].includes(location.pathname))) {
  //   const redirectPath = isAuthenticated ? URL_PROFIL : URL_LOGIN || URL_REGISTER || URL_RESET_PASSWORD || URL_SEND_PASSWORD;
  //   return <Navigate to={redirectPath} />;
  // }


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="relative flex h-full cursor-default flex-col bg-white" style={{ backgroundColor: theme.palette.background.default }}>
          <Navbar />
          <main className="grow">
            <Routes />
          </main>
          <ToastContainer
            toastClassName={({ type }) =>
              contextClass[type || 'default'] +
              ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
            }

            bodyClassName={() => 'text-sm font-white font-med block p-3'}
            position="bottom-left"
            autoClose={3000}
          />
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
