import './Expertise.scss';

function Expertise({Capa, Level}) {
    return (
        <>
        <div className="containerCapa">
            <span className="titreCapa">{Capa}</span>
            <div className="barreCapa">
                <span className="percent" style={{width: `${Level}`}}></span>
            </div>
        </div>
        </>
    );
}

export default Expertise;