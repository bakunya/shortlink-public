import { db } from './model'

export default async (link) => {
    try {
        if(!link) throw Error('link not found')
        const linkDB = await db.doc(`${link}`).get()
        const linkData = linkDB.data()
        if(linkData?.created) {
            linkData.created = `${linkData.created.toDate()}`
        }
        return Promise.resolve(linkData)
    } catch (er) {
        return Promise.reject(er)
    }
}