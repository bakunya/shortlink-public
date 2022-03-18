import { memo, useCallback } from 'react'
import PropTypes from 'prop-types'

const RedirectLink = ({ urlData }) => {
    const handleLinkClick = useCallback(() => console.log('clicked!'), [])

    return (
        <section className='flex flex-col items-start border border-black p-10 rounded shadow-solid-black sm:items-center'>
            <p className="text-xl font-semibold sm:text-center">Ups, something wrong when redirected.</p>
            <a 
                onClick={handleLinkClick} 
                rel="noopener noreferrer" 
                href={urlData?.defaultLink} 
                className='text-lg mt-3 text-blue-700 underline'
            >Please click in here</a>
        </section>
    )
}

RedirectLink.propTypes = {
    urlData: PropTypes.object.isRequired,
}

export default memo(RedirectLink)