import './Formulaire.scss'

function Formulaire() {
    return (
        <form className="contactForm">
            <label htmlFor="lname">Nom</label>
            <input type="text" id="lname" name="lname" placeholder="Nom"/>
            <label htmlFor="fname">Prénom</label>
            <input type="text" id="fname" name="fname" placeholder="Prénom"/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Adresse E-mail"/>
            <label htmlFor="sujet">Sujet</label>
            <input type="text" id="sujet" name="sujet" placeholder="Sujet de votre message"/>
            <label htmlFor="message">Nom</label>
            <textarea id="message" name="message" placeholder="Votre message"/>
        </form>
    );
}


export default Formulaire;