import { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import RedirectLink from '@/organism/RedirectLink'
import NavbarDefault from '@/organism/NavbarDefault'
import Container from '@/atoms/Container'
import useWindowLoaded from '@/hooks/useWindowLoaded'
import Head from 'next/head'

const Redirect = ({ isPrivate, urlData }) => {
    const isLoaded = useWindowLoaded()


    useEffect(() => {
        
        return () => {
            document.querySelectorAll('script[src="//addresseepaper.com/sfp.js"]')?.forEach(elm => elm.remove())
        }
    }, [])

    return (
        <>
            { !isPrivate && urlData && (
                <>
                    <Head>
                        <script 
                            defer 
                            type="text/javascript"
                            src="/script/ads.js" 
                        />
                        <script 
                            defer 
                            type="text/javascript"
                            src="/script/prebid-ads.js" 
                        />
                        <script 
                            defer 
                            type="text/javascript"
                            src="/script/ads-prebid.js" 
                        />
                        <script 
                            defer 
                            type="text/javascript"
                            src="/script/adsterra.js" 
                        />
                        <script 
                            defer 
                            type="text/javascript"
                            src="/script/detectAdblock2.js" 
                        />
                        <script 
                            defer 
                            type="text/javascript"
                            src="/script/detectAdblock.js" 
                        />
                        <script 
                            defer
                            type='text/javascript'
                            src='//pl17111976.effectivecpmcontent.com/79/6f/dd/796fdd3d14d7b8c079ea7f1ecabda80b.js'
                        />
                    </Head>
                    <Container className="-mb-8">
                        <NavbarDefault withButton={false} />
                    </Container>
                    <Container className='grid place-content-center mt-52'>
                            { isLoaded && (
                                <section id='containerWillRemoveIfAdblockDetected' className='w-full max-w-[340px]'>
                                    <RedirectLink urlData={urlData} />
                                </section>
                            ) }
                    </Container>
                </>
            ) }
        </>
    )
}

Redirect.propTypes = {
    isPrivate: PropTypes.bool,
    urlData: PropTypes.object,
}

Redirect.defaultProps = {
    isPrivate: false,
    urlData: null,
}

export default memo(Redirect)