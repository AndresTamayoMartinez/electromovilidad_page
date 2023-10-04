import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return(
        <nav className="navbar">
            <div className='max-width'>
                <div className="logo"><a href="index.html">Electromovilidad</a></div>
                <ul className='menu'>
                    <li><Link to={'/inicio'}>Inicio</Link></li>
                    <li><Link to={'/equipo'}>Equipo</Link></li>
                    <li><Link to={'/proyectos'}>Proyectos</Link></li>
                    <li><Link to={'/contactanos'}>Contactanos</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;