import React, { useRef, useEffect, useState } from 'react';
import CarteProjet from './CarteProjet';
import {data} from '../resources/projets.js';
import './Gallerie.scss';

function Gallerie() {
    const gallerieRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(gallerieRef.current);

        // Cleanup function to disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={gallerieRef} id="gallerie_container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 2s ease-in-out' }}>
            {data.map((item, i) => (<CarteProjet
                id={item.id}
                titre={item.titre}
                cover={item.cover}
                description={item.description}
                lien={item.lien}
                tags={item.tags}
                probs={item.probs}
                solution={item.solution}
                key={i}
            />))}
        </div>
    );
}


export default Gallerie;