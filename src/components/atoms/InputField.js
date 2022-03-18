import clsx from "clsx"
import { memo } from "react"
import PropTypes from "prop-types"

const InputField = ({ value, onChange, type, className, placeholder, name }) => {
    return (
        <input 
            type={type} 
            name={name}
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            className={
                clsx(
                    className,
                    'w-full rounded border border-black outline-none px-5 py-3 text-lg shadow-solid-black focus:shadow-none transition duration-300'
                )
            } 
        />
    )
}

InputField.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'text',
        'number',
        'email',
        'password',
        'tel',
    ]),
}

InputField.defaultProps = {
    name: '',
    value: '',
    type: 'text',
    className: '',
    placeholder: '',
    onChange: () => console.log('changed'),
}

export default memo(InputField)