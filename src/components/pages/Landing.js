import { memo, useCallback, useState } from "react"
import illustration10 from '@/images/drawkit-grape-pack-illustration-10.svg'
import Layout from '@/atoms/Layout'
import H1 from '@/atoms/H1'
import FormCreateLinkSimple from "@/organism/FormCreateLinkSimple"
import createLink from '@/adapters/createLink'
import { useMutation } from "react-query"
import useToast from '@/hooks/useToast'
import { description, selfHost, selfOrigin } from "@/config/constant"
import MessageSuccessCreateLink from "@/organism/MessageSuccessCreateLink"
import NavbarDefault from "@/organism/NavbarDefault"

const Landing = () => {
    const [successShortLink, setSuccessShortLink] = useState('')
    const [showForm, setShowForm] = useState(true)
    const { error: toastError } = useToast()
    const mutation = useMutation(newLink => createLink(newLink), {
        onError: useCallback(error => {
            console.error(error)
            toastError(error?.message ?? 'Error when create new link.')
        }, [toastError]),
        
        onSuccess: useCallback((_data, variables, _context) => {
            setSuccessShortLink(variables.shortLink)
            setShowForm(false)
        }, [setSuccessShortLink, setShowForm])
    })
    const handleSubmit = useCallback((val) => mutation.mutate(val), [mutation.mutate])
    const handleShowForm = useCallback(val => () => setShowForm(val) , [setShowForm])

    return (
        <Layout>
            <NavbarDefault withButton={false} />
            <section className="mb-48 flex justify-between items-center h-full flex-col mt-10 lg:flex-row">
                <div className="flex flex-col w-full lg:w-6/12">
                    <H1>
                        <span className="color-main">Short your link,</span>
                        <br /> with simplicity and readable URL
                    </H1>
                    <p className="text-lg mt-5 lg:mt-3 text-gray-500">{ description }</p>
                    <a className='mt-5 mr-auto button-main' href="#create-link">Get started in touch</a>
                </div>
                <img src={illustration10.src} width={illustration10.width} height={illustration10.height} className='animate-rotate-left-right object-contain ml-auto mt-10 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 lg:mt-0 lg:ml-0' />
            </section>
            <section className="mb-48" id="create-link">
                {
                    showForm
                        ? (
                            <>
                                <H1 className="text-2xl text-center">Get started without complicated registration</H1>
                                <FormCreateLinkSimple 
                                    onSubmit={handleSubmit} 
                                    isLoading={mutation.isLoading}
                                />
                            </>
                        ) : <MessageSuccessCreateLink 
                                linkHref={`${selfOrigin}/${successShortLink}`} 
                                linkTitle={`${selfHost}/${successShortLink}`}
                                onClick={handleShowForm(true)}
                            />
                }
            </section>
        </Layout>
    )
}

export default memo(Landing)