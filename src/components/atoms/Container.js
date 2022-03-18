import clsx from "clsx"
import { memo } from "react"
import PropTypes from "prop-types"

const Container = ({ children, className }) => {
    return (
        <main className={clsx(className, 'w-[90vw] m-auto sm:w-[80vw] lg:w-[90vw] lg:max-w-[1200px]')}>
            { children }
        </main>
    )
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string
}

Container.defaultProps = {
    children: '',
    className: ''
}

export default memo(Container)