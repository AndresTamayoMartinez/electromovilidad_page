import '../css/TeamScreen.css';
import TeamCard from "./TeamCard";

const TeamScreen = () => {
    const names = [
        {name: 'Pedro', degree:'Dr. En Electrónica', position: 'Director', id: 1},
        {name: 'Andrés', degree:'Ing. en Sistemas Computacionales', position: 'Estudiante', id: 2},
        {name: 'Pinál', degree:'Dr. En Electrónica', position: 'Director', id: 3}
    ];

    return (
        <div>
            <section id="teammates" className="teammates">
                <div className="max-width">
                    <h2 id="team-title" className="title">Nuestro Equipo</h2>
                    <div id="teammates-content" className="teammates-content">
                        {names.map((names, key)=>
                            <TeamCard
                                key={key}
                                personNames={names.name}
                                personDegree={names.degree}
                                personPosition={names.position}
                                personId={names.id}
                            />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamScreen;