import checkIfDocIDExists from '@/srcApi/repository/helper/checkIfDocIDExists'
import { model, db } from './model'

export default async (linkData) => {
    let newLinkData = {  }

    try {
        if(!linkData?.shortLink) throw Error('link data is invalid')
        if(typeof linkData !== 'object' || !Object.keys(linkData).length) throw Error('link data is invalid')


        const ifDocumentExists = await checkIfDocIDExists(db.doc(linkData.shortLink))
        if(ifDocumentExists) throw Error('Link is already exists')
        

        for (const link of Object.keys(model)) {
            newLinkData[link] = linkData[link] ?? ''
        }

        
        if(!Object.keys(newLinkData).length) throw Error('link data is invalid')
        newLinkData.created = new Date()
        await db.doc(linkData.shortLink).set(newLinkData)
        return Promise.resolve('success created link data')
    } catch (er) {
        return Promise.reject(er)
    }
}