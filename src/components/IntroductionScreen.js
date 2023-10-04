import './IntroductionScreen.css';

const IntroductionScreen = () => {
    return (
        <div>
            {/* About Us Section*/}
            <section id="about-us" class="about-us">
                <div class="max-width">
                    <h2 id="about-title" class="title">¿Quienes Somos?</h2>
                    <div id="about-content" class="about-content">
                        <div id="about-left" class="about-left">
                            <div class="text">Sobre Nosotros</div> 
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
                        <div id="about-right" class="about-right">
                            <div class="text">¿Qué son los proyectos?</div>
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
            <section id="teammates" class="teammates">
                <div class="max-width">
                    <h2 id="team-title" class="title">Nuestro Equipo</h2>
                    <div class="teammates-content">
                        <div id="team-left" class="team-left">
                            <div class="person">
                                <div class="person-container">
                                    <div class="person-info">
                                        <p class="name">Dr. Francisco J. Pérez Pinal.</p>
                                        <p class="information">Director</p>
                                    </div>
                                    <img src="img/team1.jpg" alt="person-1"></img>
                                </div>
                            </div>
                            <div class="person">
                                <div class="person-container">
                                    <div class="person-info">
                                        <p class="name">Dr. Allan G. S. Sánchez.</p>
                                        <p class="information">Director</p>
                                    </div>
                                    <img src="img/team2.jpg" alt="person-1"></img>
                                </div>
                            </div>
                        </div>
                        <div id="team-center" class="team-center">
                            <div class="line"></div>
                        </div>
                        <div id="team-right" class="team-right">
                            <div class="person">
                                <div class="person-container">
                                    <img src="img/team3.jpg" alt="person-1"></img>
                                    <div class="person-info">
                                        <p class="name">M. en C. Gerardo Parada Salado.</p>
                                        <p class="information">Estudiante</p>
                                    </div>
                                </div>
                            </div>
                            <div class="person">
                                <div class="person-container">
                                    <img src="img/team4.jpg" alt="person-1"></img>
                                    <div class="person-info">
                                        <p class="name">Ing. Luis Mario Martínez Patiño.</p>
                                        <p class="information">Estudiante</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Teammates Section */}

            {/* Proyects Section */}
            <section id="projects" class="projects">
                <div class="max-width">
                    <h2 id="projects-title" class="title">Algunos Proyectos</h2>
                    <div id="carousel" class="carousel owl-carousel">
                        <div class="card">
                            <div class="box">
                                <div class="project-info">
                                    <a href="#" class="project-title">Lampara Germicida de Mercurio.</a>
                                    <p>Las lámparas germicidas de mercurio UVC de ozono a baja presión se han utilizado ampliamente
                                        para descontaminar el aire, las superficies y el agua.
                                    </p>
                                </div>
                                <img src="img/project1.jpg" alt="project-1"></img>
                            </div>
                        </div>
                        
                    </div>
                    <a href="html/projects.html" id="more-projects" class="more-projects">Ver Más</a>
                </div>
            </section>
            {/* Proyects Section */}

            {/* Contact Section */}
            <section class="contact" id="contact">
                <div class="max-width">
                    <h2 id="contact-title" class="title">Contacto</h2>
                    <div id="contact-content" class="contact-content">
                        <div id="contact-left" class="column left">
                            <p>Si te intereza ser parte de nuestro equipo, no dudes en ponerte en contacto con nosotros.
                                Si tienes un proyecto que te interesa desarrollar con nosotros, estamos abiertos a
                                cualquier idea, envianos un correo contandonos los detalles sobre el.
                            </p>
                            <div class="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">Directores.</div>
                                        <div class="sub-title">Dr. Allan G. Soriano Sánchez.</div>
                                        <div class="sub-title">Dr. Francisco J. Pérez Pinal.</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="info">
                                        <div class="head">Dirección</div>
                                        <div class="sub-title">38010, Av. Ignacio Borunda 110, Fovissste, Celaya, Gto.</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">Correo</div>
                                        <div class="sub-title">allan.soriano@itcelaya.edu.mx</div>
                                        <div class="sub-title">francisco.perez@itcelaya.edu.mx</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-phone"></i>
                                    <div class="info">
                                        <div class="head">Teléfono</div>
                                        <div class="sub-title">+52 S/N</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact-right" class="column right">
                            <div class="text">Envia un mensaje</div>
                            <form action="#">
                                <div class="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Nombre" required />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Correo" required />
                                    </div>
                                </div>
                                <div class="field">
                                        <input type="text" placeholder="Asunto" required />
                                    </div>
                                    <div class="field textarea">
                                        <textarea cols="30" rows="10" placeholder="Describe tu proyecto.." required></textarea>
                                    </div>
                                    <div class="button">
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