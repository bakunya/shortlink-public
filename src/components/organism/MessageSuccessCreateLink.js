import { memo } from 'react'
import PropTypes from 'prop-types'
import H1 from '@/atoms/H1'
import Button from '@/atoms/Button'

const MessageSuccessCreateLink = ({ linkTitle, linkHref, onClick }) => {

    return (
        <>
            <H1 className="text-2xl text-center">Your link is ready!</H1>
            <p className="text-lg text-center mt-5">
                <a target="_blank" rel="noopener noreferrer"  href={linkHref} className="text-emerald-300">{linkTitle}</a>
                <br />
                <span className="text-gray-500">(copy and paste to your browser)</span>
            </p>
            <Button className='mt-9 mx-auto block' onClick={onClick}>Create another link</Button>
        </>
    )
}

MessageSuccessCreateLink.propTypes = {
    linkTitle: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default memo(MessageSuccessCreateLink)