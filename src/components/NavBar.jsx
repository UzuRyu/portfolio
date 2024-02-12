import './NavBar.scss';

function NavBar() {
    return (
        <ul id='nav'>
            <li className='navLinks'><a href="#top">Profil</a></li>
            <li className='navLinks'><a href="#Capa">Compétences</a></li>
            <li className='navLinks'><a href="#Gallerie">Projets</a></li>
            <li className='navLinks'><a href="#Contact">Contact</a></li>
        </ul>
    );
}


export default NavBar;