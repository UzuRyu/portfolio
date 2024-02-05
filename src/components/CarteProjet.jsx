import './CarteProjet.scss'

function CarteProjet({ id, titre, cover, description, lien, tags }) {
    return (
    <article className={`card_container_${id}`}>
        <a href={lien}>
        <img className='cover_projet' src={cover} alt={titre} />
        <h4 className='titre_projet'>{titre}</h4>
        <p className='desc'>{description}</p>
        <ul className='tags'>
        {tags.map((tag, i) => <li key={i}>{tag}</li>)}
        </ul>
        </a>
    </article>
    );
}

export default CarteProjet;