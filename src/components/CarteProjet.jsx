import './CarteProjet.scss'

function CarteProjet({ id, titre, cover, description, lien, tags, probs, solution }) {
    return (
    <article id={`card_container_${id}`}>
        <a href={lien}>
        <img className='cover_projet' src={cover} alt={titre} />
        <h2 className='titre_projet'>{titre}</h2>
        <p className='desc'>{description}</p>
        <ul className='tags'>{tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>
        <h3 className='probTitle'>Problématique</h3>
        <p className='prob'>{probs}</p>
        <h3 className='soluceTitle'>Solution</h3>
        <p className='soluce'>{solution}</p>
        </a>
    </article>
    );
}

export default CarteProjet;