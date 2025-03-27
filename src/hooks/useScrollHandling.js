import { useEffect, useRef, useState } from 'react';

const useScrollHandling = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const prevScrollPosition = useRef(0);

    const scrollTracking = () => {
        const curScrollPositon = window.pageYOffset;

        if (curScrollPositon > prevScrollPosition.current) {
            setScrollDirection('down');
        } else if (curScrollPositon < prevScrollPosition.current) {
            setScrollDirection('up');
        }

        prevScrollPosition.current =
            curScrollPositon <= 0 ? 0 : curScrollPositon;

        setScrollPosition(curScrollPositon);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDirection,
        scrollPosition,
    };
};

export default useScrollHandling;
