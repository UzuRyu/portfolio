import './SwitchingText.scss';
import React from 'react';
import Typed from 'typed.js';

function SwitchingText() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Je suis un développeur Front-End ^500",
                "Je suis un développeur Back-End ^500",
                "Je suis un développeur Full Stack ^500",
                "Je suis Lou Peschet"
            ],
            typeSpeed: 50,
            backSpeed: 50
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className='typedText'>
            <span className='switchingText' ref={el} />
        </div>
    );
}

export default SwitchingText;