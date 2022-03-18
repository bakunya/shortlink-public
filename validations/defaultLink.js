import * as Yup from 'yup'

export default () => Yup.string().trim()
    .required('Please enter your website URL')
    .url('Enter a valid URL')