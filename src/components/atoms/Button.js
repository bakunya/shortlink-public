import { memo } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

const Button = ({ children, className, onClick, type, disabled }) => {
    return (
        <button 
            disabled={ disabled }
            type={ type }
            onClick={ onClick }
            className={
                clsx(
                    className,
                    'outline-none border p-4 text-lg border-black rounded shadow-solid-black hover:shadow-none focus:shadow-none transition duration-300'
                )
            }
        >{ children }</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'reset',
        'submit',
        'button',
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

Button.defaultProps = {
    children: 'Button',
    onClick: () => {},
    className: '',
    type: 'button',
    disabled: false,
}

export default memo(Button)