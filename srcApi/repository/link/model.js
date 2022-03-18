import { firebaseDB } from '@/src-api/config'

export const model = {
    code: '',
    userId: '',
    shortLink: '',
    createdAt: '',
    defaultLink: '',
}
export const dbInstance = firebaseDB
export const db = firebaseDB.collection('links')