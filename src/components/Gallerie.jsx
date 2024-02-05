import CarteProjet from './CarteProjet';
import datas from '../resources/projets.json';
import './Gallerie.scss';

function Gallerie() {
    return (
        <div id="gallerie_container">
            {datas.map((item, i) => (<CarteProjet
                id={item.id}
                titre={item.titre}
                cover={item.cover}
                description={item.description}
                lien={item.lien}
                tags={item.tags}
                key={i}
            />))}
        </div>
    );
}


export default Gallerie;