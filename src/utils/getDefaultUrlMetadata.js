import axios from 'axios'
import getHtmlMetadata from '@/utils/getHtmlMetadata'

export default async (url) => {
    try {
        const urlInstance = new URL(url)
        const res = await axios.get(url, { headers: { 'content-type': 'text/xml' }, timeout: 30000 })
        const metadata = getHtmlMetadata(res?.data)
        if(metadata.image && !metadata.image.split("/")[0]) (metadata.image = `${urlInstance.origin}${metadata.image}`)
        metadata.site = urlInstance.origin

        return Promise.resolve(metadata)
    } catch(er) {
        console.log('error in get default url metadata. msg: ', er.message)
        return Promise.resolve()
    }
}