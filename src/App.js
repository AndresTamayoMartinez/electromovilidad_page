import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderScreen from './components/js/HeaderScreen';
import NavigationBar from './components/js/NavigationBar';
import IntroductionScreen from './components/js/IntroductionScreen';
import FooterScreen from './components/js/FooterScreen';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <HeaderScreen />
      <Routes>
        <Route path={'/'} element={<IntroductionScreen />} />
        <Route path={'/index.html'} element={<IntroductionScreen />} />
        <Route path={'/inicio'} element={<IntroductionScreen />} />
        <Route path={'/equipo'} element={<h1>Equipo</h1>} />
        <Route path={'/proyectos'} element={<h1>Proyectos</h1>} />
        <Route path={'/contactanos'} element={<h1>Contactanos</h1>} />
      </Routes>
      <FooterScreen />
    </div>
  );
};

export default App;
