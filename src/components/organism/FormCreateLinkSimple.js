import { memo, useCallback } from "react"
import PropTypes from 'prop-types'
import { useFormik } from "formik"
import * as Yup from 'yup'
import ClipLoader from "react-spinners/ClipLoader";

import Button from '@/atoms/Button'
import InputField from '@/molecules/InputField'
import shortLink from "@/validations/shortLink"
import defaultLink from "@/validations/defaultLink"
import { selfHost } from "@/config/constant"

const FormCreateLink = ({ onSubmit, isLoading }) => {
    const formik = useFormik({
        initialValues: {
            defaultLink: '',
            shortLink: `${selfHost}/`
        },
        validateOnChange: true,
        validationSchema: Yup.object().shape({ 
            shortLink: shortLink(),
            defaultLink: defaultLink(), 
        }),
        onSubmit: val => {
            let newVal = { ...val }
            newVal.shortLink = newVal.shortLink.replace(`${selfHost}/`, '')
            onSubmit(newVal)
        }
    })

    const handleChangeShortLink = useCallback(e => {
        if(e.target.value === selfHost) return
        if(!e.target.value) e.target.value = `${selfHost}/`
        if(!e.target.value.includes(`${selfHost}/`)) e.target.value = `${selfHost}/`
        formik.handleChange(e)

    }, [formik.handleChange])

    return (
        <form className="w-full m-auto mt-10 sm:w-7/12 md:w-6/12 lg:w-5/12" onSubmit={formik.handleSubmit}>
            <InputField 
                placeholder="https://...." 
                title="Type your ugly link."
                name="defaultLink"
                onChange={formik.handleChange}
                value={formik.values.defaultLink}
                error={formik?.errors?.defaultLink}
            />
            <InputField 
                className='mt-8'
                title="Give cool name for your link."
                name="shortLink"
                onChange={handleChangeShortLink}
                value={formik.values.shortLink}
                error={formik?.errors?.shortLink}
            />
            <Button className='bg-emerald-300 mt-10 p-3 px-10 ml-auto block' type="submit" disabled={isLoading}>
                {
                    isLoading
                        ? <ClipLoader speedMultiplier={2} size={20} />
                        : 'Create!'
                }
            </Button>
        </form>
    )
}

FormCreateLink.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default memo(FormCreateLink)