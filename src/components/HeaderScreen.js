import './HeaderScreen.css';

const HeaderScreen = () => {
    return (
        <section className="home" id="home">
            <div className="max-width">
                <div id="home-content" className="home-content">
                    <div id="anprueba" className="text-1">Laboratorio de Transportes Sostenibles.</div>
                    <div className="text-2">Centros para la Vinculación y Desarrollo Empresarial.</div>
                    <div className="buttons">
                        <a href="html/projects.html">Proyectos</a>
                        <a href="#contact">Contacto</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderScreen;