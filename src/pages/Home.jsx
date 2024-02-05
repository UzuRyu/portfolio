import NavBar from '../components/NavBar';
import Gallerie from '../components/Gallerie';
import Formulaire from '../components/Formulaire';
import Footer from '../components/Footer';
import './Home.scss';
import Portrait from '../resources/Portrtait.jpg';

function Home() {
    return (
        <>
            <NavBar />
            <section className="Profil">
                <h1>Bonjour ! Je suis Lou Peschet. Développeur Full Stack</h1>
                <img src={Portrait} id='portrait' alt='Portrait de Lou Peschet'></img>
            </section>
            <section className="Capacités">
                <p>Venant d'un cursus DUT Informatique et après une formation OpenClassroom Dev Web, je suis adepte à l'utilisation de JavaScript et en gestion de Base de Données.</p>
            </section>
            <section className="Gallerie">
                <Gallerie />
            </section>
            <section className="Contact">
                <Formulaire />
            </section>
            <Footer />
        </>
    );
}


export default Home;