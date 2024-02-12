import { useRef } from 'react';
import './Formulaire.scss'
import emailjs from 'emailjs-com';

function Formulaire() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_d58bhyb', 'template_dbhr7dr', e.target, 'T9gUEd4UdKfrq_EFD')
            .then(
                () => {
                    console.log('SUCCESS!');
                    window.location.reload();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                });
    };


    return (
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div className='namecontainer'>
                <div className='labelinputcont'>
                    <label id="labellname" htmlFor="lname">Nom</label>
                    <input required type="text" id="lname" name="lname" placeholder="Nom" />
                </div>
                <div className='labelinputcont'>
                    <label id="labellname" htmlFor="fname">Prénom</label>
                    <input required type="text" id="fname" name="fname" placeholder="Prénom" />
                </div>
            </div>
            <div className='labelinputcont'>
                <label id="labelemail" htmlFor="email">Email</label>
                <input required type="text" id="email" name="email" placeholder="Adresse E-mail" />
            </div>
            <div className='labelinputcont'>
                <label id="labelsubject" htmlFor="subject">Sujet</label>
                <input required type="text" id="subject" name="subject" placeholder="Sujet de votre message" />
            </div>
            <div className='labelinputcont'>
                <label id="labelmessage" htmlFor="message">Nom</label>
                <textarea required id="message" name="message" placeholder="Votre message" />
            </div>
            <input id="submitbutt" type='submit' />
        </form>
    );
}


export default Formulaire;