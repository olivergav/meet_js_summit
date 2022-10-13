import ImageToggleOnScroll from "../pages/ImageToggleOnScroll";
import {useEffect, useRef, useState} from "react";

function ImageChangeOnScroll({primaryImage, secondaryImage, alt}) {
    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef(null);

    function isInView() {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function scrollHandler() {
        setInView(isInView());
    }

    useEffect(() => {
        setIsLoading(false);
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return (
        <>
            <img src={isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
                        : inView ? secondaryImage : primaryImage}
                 ref={imageRef}
                 alt={alt}/>
        </>
    )
}

export default ImageChangeOnScroll;