import { memo } from 'react'
import PropTypes from 'prop-types'
import Custom500 from '@/pages/500'
import Custom404 from '@/pages/404'

const ErrorBoundary = ({ children, statusCode }) => {
    if(statusCode === 500) return <Custom500 />
    if(statusCode === 404) return <Custom404 />
    return children
}

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    statusCode: PropTypes.number.isRequired,
}

export default memo(ErrorBoundary)