import { useState, useEffect } from 'react'

const useViewport = () => {
    const [width, setWidth] = useState(typeof window === 'undefined' ? 0 : window.innerWidth)

    useEffect(() => {

        let resizeScreenEvent = null
        if(typeof window !== 'undefined') resizeScreenEvent = window.addEventListener('resize', () => setWidth(window.innerWidth))

        return () => {
            if(resizeScreenEvent && typeof window !== 'undefined') window.removeEventListener(resizeScreenEvent)
        }

    }, [setWidth])

    return width
}

export default useViewport