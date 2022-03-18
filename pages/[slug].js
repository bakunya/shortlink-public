import Head from 'next/head'
import getOne from '@/src-api/repository/link/getOne'
import ErrorBoundary from '@/organism/ErrorBoundary'
import Redirect from '@/pages/Redirect'
import getDefaultUrlMetadata from '@/utils/getDefaultUrlMetadata'
import { description, keywords, selfOrigin, subtitle, title } from '@/config/constant'

const Page = ({ metadata, statusCode, isPrivate, urlData }) => {



  return (
    <ErrorBoundary statusCode={statusCode ?? 200}>
      <Head>
        <title>{ metadata?.title ?? title }</title>

        <meta property='og:image:width' content="640" />
        <meta property='og:image:height' content="360" />
        <meta property='og:image:type' content="image/*" />
        <meta property="og:url" content={ metadata?.site ?? selfOrigin } />
        <meta property="og:image" content={ metadata?.image ?? '' } />
        <meta property="og:title" content={ metadata?.title ?? subtitle } />
        <meta property="og:description" content={ metadata?.description ?? description } />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ metadata?.image ?? '' } />
        <meta name="twitter:title" content={ metadata?.title ?? subtitle } />
        <meta name="twitter:description" content={ metadata?.description ?? description } />

        <meta name="image" content={ metadata?.image ?? '' } />
        <meta name="keywords" content={ metadata?.keywords ?? keywords } />
        <meta name="description" content={ metadata?.description ?? description } />

        <meta itemProp="image" content={ metadata?.image ?? '' } />
        <meta itemProp="keywords" content={ metadata?.keywords ?? keywords } />
        <meta itemProp="description" content={ metadata?.description ?? description } />
      </Head>

      <Redirect isPrivate={isPrivate} urlData={urlData} />
    </ErrorBoundary>
  )
}

export const getServerSideProps = async (ctx) => {
  const randomNum = Math.round(Math.random() * 10)
  console.log(randomNum)
  try {
    const data = await getOne(ctx.query.slug)
    if(!data) return { notFound: true, }
    if(data.code) return { props: { isPrivate: true } }

    data.defaultLink = data.defaultLink.includes('http') ? data.defaultLink : `http://${data.defaultLink}`

    if(randomNum > 5) return { 
      redirect: {
        permanent: false,
        destination: data.defaultLink,
      } 
    }    
    
    const metadata = await getDefaultUrlMetadata(data.defaultLink)
    if(!metadata) return { props: { urlData: data, } }

    return { props: { 
      metadata,
      urlData: data,
    } }
  } catch(er) {
    return { 
      props: { 
        error: er.message,
        statusCode: 500, 
      }
    }
  }
}

export default Page