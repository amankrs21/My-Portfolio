import { useEffect, useMemo, useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Loading from './components/Loading';
import Project from './pages/project/Project';
import PageNotFound from './pages/404/PageNotFound';
import getLPTheme from './components/theme/getLPTheme';
import Contact from './pages/contact/Contact';


// App component
export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [mode, setMode] = useState(localStorage.getItem('mode') ?? 'dark')

  const LPtheme = useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleModeChange = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />

      {isLoading ? (<Loading />) : (

        <BrowserRouter>

          <Header mode={mode} modeChange={handleModeChange} />

          <div style={{ marginTop: '100px' }}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/404' element={<PageNotFound />} />
              <Route path='/about' element={<About mode={mode} />} />
              <Route path='/project' element={<Project mode={mode} />} />

              <Route path="*" element={<Navigate to="/404" />} />
              <Route path='/' element={<Navigate to='/home' />} />
            </Routes>
          </div>

          <Footer />

        </BrowserRouter>
      )}

    </ThemeProvider>
  )
}
