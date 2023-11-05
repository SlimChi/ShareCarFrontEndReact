import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/layouts/Navbar";
import Routes from "./routes/Routes";
import Footer from "./components/layouts/Footer";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/scroll/ScrollToTop";
const contextClass = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const App = () => {
  const [theme, colorMode] = useMode();
  document.body.style.backgroundColor = theme.palette.background.default;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="relative flex h-full cursor-default flex-col bg-white" style={{ backgroundColor: theme.palette.background.default }}>
            <Navbar />
            <main className="grow">
              <Routes />
            </main>
            <ToastContainer
              toastClassName={({ type }) =>
                contextClass[type || "default"] +
                " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
              }
              bodyClassName={() => "text-sm font-white font-med block p-3"}
              position="bottom-left"
              autoClose={3000}
            />
            <Footer/>
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
