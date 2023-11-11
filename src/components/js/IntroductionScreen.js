import '../css/IntroductionScreen.css';
import imgTeam1 from '../../img/team1.jpg';
import imgTeam2 from '../../img/team2.jpg';
import imgTeam3 from '../../img/team3.jpg';
import imgTeam4 from '../../img/team4.jpg';
import imgProject from '../../img/project1.jpg'

const IntroductionScreen = () => {
    return (
        <div>
            {/* About Us Section*/}
            <section id="about-us" className="about-us">
                <div className="max-width">
                    <h2 id="about-title" className="title">¿Quienes Somos?</h2>
                    <div id="about-content" className="about-content">
                        <div id="about-left" className="about-left">
                            <div className="text">Sobre Nosotros</div>
                            <p>El Laboratorio de Transporte Sostenible (LATSOS) pertenece a la 
                                red de investigación del TecNM: electromovilidad, el cual se 
                                encuentra localizado en el TecNM - Instituto Tecnológico de Celaya, 
                                Edificio InnovaTecNM en el campus 2. La visión de LATSOS es ser 
                                un líder nacional e internacional en la innovación, el desarrollo 
                                tecnológico y la educación de electrificación del transporte, 
                                energía renovable y sistemas de red eléctrica inteligente. A 
                                través de iniciativas económicamente sustentables amigables con el 
                                ambiente, y coordinadas entre el gobierno e iniciativa privada 
                                para beneficio de la sociedad.
                            </p>
                        </div>
                        <div id="about-right" className="about-right">
                            <div className="text">¿Qué son los proyectos?</div>
                            <p>Un proyecto es una planificación, que consiste en un conjunto de actividades a realizar de manera articulada 
                                entre sí, con el fin de producir determinados bienes o servicios capaces de satisfacer necesidades o resolver 
                                problemas, dentro de los límites de un presupuesto y de un periodo de tiempo dados. Basados esn esta definición,
                                en LATSO nos enfocamos a desarrollar proyectos con aplicaciones reales en la vida cotidiana, tomando en cuenta
                                diferentes factores que pudieran aparecer durante la implementación de estos. Cada uno de los proyectos
                                esta ligado a un ambito empresarial donde se requiera.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us Section*/}

            {/* Our Teammates Section */}
            <section id="teammates" className="teammates">
                <div className="max-width">
                    <h2 id="team-title" className="title">Nuestro Equipo</h2>
                    <div className="teammates-content">
                        <div id="team-left" className="team-left">
                            <div className="person">
                                <div className="person-container">
                                    <div className="person-info">
                                        <p className="name">Dr. Francisco J. Pérez Pinal.</p>
                                        <p className="information">Director</p>
                                    </div>
                                    <img src={imgTeam1} alt='Teammate 1'></img>
                                </div>
                            </div>
                            <div className="person">
                                <div className="person-container">
                                    <div className="person-info">
                                        <p className="name">Dr. Allan G. S. Sánchez.</p>
                                        <p className="information">Director</p>
                                    </div>
                                    <img src={imgTeam2} alt='Teammate 2'></img>
                                </div>
                            </div>
                        </div>
                        <div id="team-center" className="team-center">
                            <div className="line"></div>
                        </div>
                        <div id="team-right" className="team-right">
                            <div className="person">
                                <div className="person-container">
                                    <img src={imgTeam3} alt='Teammate 3'></img>
                                    <div className="person-info">
                                        <p className="name">M. en C. Gerardo Parada Salado.</p>
                                        <p className="information">Estudiante</p>
                                    </div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="person-container">
                                    <img src={imgTeam4} alt='Teammate 4'></img>
                                    <div className="person-info">
                                        <p className="name">Ing. Luis Mario Martínez Patiño.</p>
                                        <p className="information">Estudiante</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Teammates Section */}

            {/* Proyects Section */}
            <section id="projects" className="projects">
                <div className="max-width">
                    <h2 id="projects-title" className="title">Algunos Proyectos</h2>
                    <div id="carousel" className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                                <div className="project-info">
                                    <a href="#" className="project-title">Lampara Germicida de Mercurio.</a>
                                    <p>Las lámparas germicidas de mercurio UVC de ozono a baja presión se han utilizado ampliamente
                                        para descontaminar el aire, las superficies y el agua.
                                    </p>
                                </div>
                                <img src={imgProject} alt='Project 1'></img>
                            </div>
                        </div>
                    </div>
                    <a href="html/projects.html" id="more-projects" className="more-projects">Ver Más</a>
                </div>
            </section>
            {/* Proyects Section */}

            {/* Contact Section */}
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 id="contact-title" className="title">Contacto</h2>
                    <div id="contact-content" className="contact-content">
                        <div id="contact-left" className="column left">
                            <p>Si te intereza ser parte de nuestro equipo, no dudes en ponerte en contacto con nosotros.
                                Si tienes un proyecto que te interesa desarrollar con nosotros, estamos abiertos a
                                cualquier idea, envianos un correo contandonos los detalles sobre el.
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Directores.</div>
                                        <div className="sub-title">Dr. Allan G. Soriano Sánchez.</div>
                                        <div className="sub-title">Dr. Francisco J. Pérez Pinal.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Dirección</div>
                                        <div className="sub-title">38010, Av. Ignacio Borunda 110, Fovissste, Celaya, Gto.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Correo</div>
                                        <div className="sub-title">allan.soriano@itcelaya.edu.mx</div>
                                        <div className="sub-title">francisco.perez@itcelaya.edu.mx</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-phone"></i>
                                    <div className="info">
                                        <div className="head">Teléfono</div>
                                        <div className="sub-title">+52 S/N</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact-right" className="column right">
                            <div className="text">Envia un mensaje</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Nombre" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Correo" required />
                                    </div>
                                </div>
                                <div className="field">
                                        <input type="text" placeholder="Asunto" required />
                                    </div>
                                    <div className="field textarea">
                                        <textarea cols="30" rows="10" placeholder="Describe tu proyecto.." required></textarea>
                                    </div>
                                    <div className="button">
                                        <button type="submit">Enviar mensaje</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
        </div>
    );
};

export default IntroductionScreen;