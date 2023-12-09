import '../css/TeamScreen.css';
import TeamCard from "./TeamCard";
import { getTeam } from './firebase_connection';

const querySnapshot = await getTeam();
const response = querySnapshot.docs;

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
                        {response.map((doc, key)=>
                            <TeamCard
                                key={key}
                                personName={doc.data().name}
                                personDegree={doc.data().degree}
                                personPosition={doc.data().position}
                                personImage={doc.data().image}
                                personId={doc.id}
                            />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamScreen;