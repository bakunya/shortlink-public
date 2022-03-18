import Head from 'next/head'
import PropTypes from "prop-types"
import { image, keywords, selfOrigin, subtitle, title as defaultTitle } from '@/config/constant'

const DefaultHead = ({ title }) => (
    <Head>
        <title>{title ?? defaultTitle}</title>

        <meta property='og:image:width' content="640" />
        <meta property='og:image:height' content="360" />
        <meta property='og:image:type' content="image/*" />
        <meta property="og:url" content={selfOrigin} />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={subtitle} />
        <meta property="og:description" content="An URL shortener with unlimited links created and no payment needed. Try it now, its FREE!" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="An URL shortener with unlimited links created and no payment needed. Try it now, its FREE!" />

        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />
        <meta name="description" content="An URL shortener with unlimited links created and no payment needed. Try it now, its FREE!" />

        <meta itemProp="image" content={image} />
        <meta itemProp="keywords" content={keywords} />
        <meta itemProp="description" content="An URL shortener with unlimited links created and no payment needed. Try it now, its FREE!" />
    </Head>
)

DefaultHead.propTypes = {
    title: PropTypes.string
}

export default DefaultHead