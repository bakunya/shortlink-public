import { useEffect, useState } from 'react'

const useWindowLoaded = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        const listener = () => setIsLoaded(true)
        window.addEventListener('load', listener)

        return () => window.addEventListener('load', listener)

    }, [setIsLoaded])

    return isLoaded
}

export default useWindowLoaded