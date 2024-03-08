import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import getLPTheme from "./components/getLPTheme.jsx";
import ToggleColorMode from "./components/ToggleColorMode.jsx";

// import Home from './pages/home/Home'
// import PageNotFound from './components/PageNotFound.jsx';
// import AboutUs from './pages/about/AboutUs.jsx';

export default function App() {
  const localMode = localStorage.getItem('mode');
  const [mode, setMode] = useState(localMode ? localMode : 'dark');
  const LPtheme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header mode={mode} />
        <div style={{ marginTop: 100 }}>
          <Routes>
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/" element={<PrivateRoutes />}>
              <Route path='/todo' element={<Todos />} />
              <Route path='/users' element={<Users />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <div className='theme-mode' style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "999" }}>
        <ToggleColorMode style={{ backgroundColor: "transparent", border: "none", color: "white" }} mode={mode} toggleColorMode={toggleColorMode} />
      </div>
    </ThemeProvider>
  )
}
