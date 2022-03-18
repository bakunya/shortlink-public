import clsx from 'clsx'
import { memo } from "react"
import PropTypes from "prop-types"

const H1 = ({ className, children }) => {
    return (
        <h1 className={
            clsx(className, 'text-4xl font-bold leading-[3rem]')
        }>{children}</h1>
    )
}

H1.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

H1.defaultProps = {
    className: '',
    children: '',
}

export default memo(H1)