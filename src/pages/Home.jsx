import NavBar from '../components/NavBar';
import Gallerie from '../components/Gallerie';
import Formulaire from '../components/Formulaire';
import Footer from '../components/Footer';
import './Home.scss';
import Portrait from '../resources/Portrtait.jpg';
import CapaGallerie from '../components/CapaGallerie';
import SwitchingText from '../components/SwitchingText';

function Home() {
    return (
        <>
            <NavBar />
            <section id="Profil">
                <h1 id='salut'>Bonjour !</h1> 
                <SwitchingText />
                <img src={Portrait} id='portrait' alt='Portrait de Lou Peschet'></img>
            </section>
            <section id="Capa">
                <h1 id='capaTitle'>À propos de moi</h1>
                <p>Adepte des arcanes du Développement Full Stack, j'ai été formé au code lors d'un cursus de DUT Informatique avant d'approfondir mes connaissances via une formation Développeur Web OpenClassroom.</p>
                <CapaGallerie />
            </section>
            <section id="Gallerie">
                <h1 id='gallerieTitle'>Mes Projets</h1>
                <Gallerie />
            </section>
            <section id="Contact">
                <h1 id='formTitle'>Formulaire de contact</h1>
                <Formulaire />
            </section>
            <Footer />
        </>
    );
}


export default Home;