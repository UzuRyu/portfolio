import React, { useRef, useEffect, useState } from 'react';
import './CapaGallerie.scss';
import Expertise from './Expertise';

function CapaGallerie() {
    const frontendContainerRef = useRef(null);
    const backendContainerRef = useRef(null);
    const [isFrontendVisible, setIsFrontendVisible] = useState(false);
    const [isBackendVisible, setIsBackendVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === frontendContainerRef.current && entry.isIntersecting) {
                    setIsFrontendVisible(true);
                    observer.unobserve(entry.target);
                } else if (entry.target === backendContainerRef.current && entry.isIntersecting) {
                    setIsBackendVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(frontendContainerRef.current);
        observer.observe(backendContainerRef.current);

        // Cleanup function to disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }, []);

    return (
        <section className="capaGallerie">
            <h1 className="capaTitre">Compétences</h1>
            <div ref={frontendContainerRef} className={`frontendContainer ${isFrontendVisible ? 'visible' : ''}`}>
                <h2>Front-End</h2>
                <Expertise Capa={"HTML"} Level={"90%"} />
                <Expertise Capa={"CSS"} Level={"70%"} />
                <Expertise Capa={"React"} Level={"80%"} />
            </div>
            <div ref={backendContainerRef} className={`backendContainer ${isBackendVisible ? 'visible' : ''}`}>
                <h2>Back-End</h2>
                <Expertise Capa={"NodeJS"} Level={"75%"} />
                <Expertise Capa={"MongoDB"} Level={"60%"} />
                <Expertise Capa={"Express"} Level={"70%"} />
            </div>
        </section>
    );
}

export default CapaGallerie;
