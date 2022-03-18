import * as Yup from 'yup'
import { selfHost } from "@/config/constant"

export default () => Yup.string().trim()
    .transform(val => {
        if(val.includes(selfHost)) return val.split(`${selfHost}/`)[1]
        return val
    })
    .required('Please enter your short URL')
    .matches(
        /^[A-Za-z0-9_-]*$/,
        typeof window === 'undefined' 
            ? 'Your shortlink name is invalid'
            : 'Only use letter, number, dashed, and underscore'
    )