import './App.css';

import { useEffect, useMemo, useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import getLPTheme from './components/getLPTheme';

import Header from './pages/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Footer from './pages/footer/Footer';
import Project from './pages/project/Project';
import Resume from './pages/resume/Resume';
import ToggleColorMode from './components/ToggleColorMode';
import PageNotFound from './components/PageNotFound';

function App() {

  const [isLoadding, setIsLoadding] = useState(true)
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark')

  const LPtheme = useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadding(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleModeChange = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        {isLoadding ? (
          <div className='loading-div'>
            <img src="loading.svg" alt="Loading..." height="80px" width="150px" />
          </div>
        ) : (
          <BrowserRouter>
            <Header mode={mode} />
            <div className='app-container'>
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About mode={mode} />} />
                <Route path='/project' element={<Project mode={mode} />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/404' element={<PageNotFound />} />

                <Route path="*" element={<Navigate to="/404" />} />
                <Route path='/' element={<Navigate to='/home' />} />
              </Routes>
            </div>
            <Footer />
            <div className='theme-mode' style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "999" }}>
              <ToggleColorMode style={{ backgroundColor: "transparent", border: "none", color: "white" }} mode={mode} toggleColorMode={handleModeChange} />
            </div>
          </BrowserRouter>
        )}
      </ThemeProvider>
    </>
  )
}

export default App;
