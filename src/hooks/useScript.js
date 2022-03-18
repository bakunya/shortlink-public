import { useState, useEffect } from "react";

const useScript = (src, container) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        const scriptContainer = container ? document.querySelector(container) : document.body;

        script.src = src;
        script.defer = true;
        script.onload = () => setIsLoaded(true);
        scriptContainer.appendChild(script);

        return () => {
            scriptContainer.removeChild(script);
        };
    }, [container]);

    return isLoaded;
}

export default useScript