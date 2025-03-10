import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';
import arrow from '../../image/arrow.png';

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollPosition > windowHeight / 2) {  // Muestra el botón cuando se ha desplazado más de la mitad de la ventana
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button 
            className={`scroll-to-top ${showButton ? 'show' : 'hide'}`}
            onClick={scrollToTop}
        >
            <img width={20} src={arrow} alt="Arrow" />
        </button>
    );
}

export default ScrollToTopButton;

