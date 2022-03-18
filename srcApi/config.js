import admin from "firebase-admin"
import serviceAccount from '@/fb-admin.json'

export const firebaseApp = !admin.apps.length ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount), }) : admin.apps[0]
export const firebaseDB = admin.firestore()
