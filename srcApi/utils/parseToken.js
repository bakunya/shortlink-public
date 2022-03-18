import { firebaseApp } from '@/src-api/config'

export default async (authToken) => {
    try {
        const userInfo = await firebaseApp.auth().verifyIdToken(authToken);
        return Promise.resolve(userInfo)
    } catch(er) {
        return Promise.reject(er.message)
    }
};