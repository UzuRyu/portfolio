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
            <section className="Capa">
                <h1>À propos de moi</h1>
                <p>Adepte des arcanes du Développement Full Stack, j'ai été formé au code lors d'un cursus de DUT Informatique avant d'approfondir mes connaissances via une formation Développeur Web OpenClassroom.</p>
            </section>
            <section className="Gallerie">
                <h1>Mes Projets</h1>
                <Gallerie />
            </section>
            <section className="Contact">
                <h1>Formulaire de contact</h1>
                <Formulaire />
            </section>
            <Footer />
        </>
    );
}


export default Home;