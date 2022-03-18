import clsx from "clsx"
import { memo } from "react"
import PropTypes from "prop-types"

const Layout = ({ children, className }) => {
    return (
        <main className={clsx(className, 'min-h-[100vh] w-[90vw] m-auto sm:w-[80vw] lg:w-[90vw] lg:max-w-[1200px]')}>
            { children }
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string
}

Layout.defaultProps = {
    children: '',
    className: ''
}

export default memo(Layout)