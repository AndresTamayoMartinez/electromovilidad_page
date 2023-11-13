//import

const TeamCard = ({ personNames, personDegree, personId, personPosition }) => {
    return (
        <div id={personId} className="person-content">
                <div id="person-image" className="person-image">
                    {/* <img id="pimage" class="pimage" src="${data.image}"> */}
                </div>
                <div id="person-info" className="person-info">
                    <p id="pname" className="pname">{personNames}</p>
                    <p id="pi1" className="pi1">{personDegree}</p>
                    <p id="pi2" className="pi2">{personPosition}</p>
                </div>
                <a href="../html/persondesc.html" className="link"><button className="btn-id" data-id="">{'>'}</button></a>
        </div>
    );
};

export default TeamCard;