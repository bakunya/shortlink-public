import clsx from "clsx"
import { memo } from "react"
import PropTypes from "prop-types"
import Input from '@/atoms/InputField'

const InputField = ({ title, error, className, value, onChange, type, placeholder, name }) => {
    return (
        <div className={clsx(className, 'flex flex-col')}>
            <span className="text-sm block mb-2 ml-1">{ title }</span>
            <Input value={value} onChange={onChange} type={type} placeholder={placeholder} name={name} />
            {
                error && <span className="text-sm text-red-600 block ml-1 mt-4">{ error }</span>
            }
        </div>
    )
}

InputField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.oneOf([
        'text',
        'number',
        'email',
        'password',
        'tel',
    ]),
    className: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string,
}

InputField.defaultProps = {
    name: '',
    value: '',
    title: '',
    error: '',
    type: 'text',
    className: '',
    placeholder: '',
    onChange: () => console.log('changed'),
}

export default memo(InputField)