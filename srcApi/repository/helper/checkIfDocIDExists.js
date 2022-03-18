export default async (documentCollectionInstance) => {
    try {
        if(!documentCollectionInstance) throw Error('documentCollectionInstance is invalid')
        const snapshot = await documentCollectionInstance.get()
        if(snapshot.exists) return Promise.resolve(true)
        return Promise.resolve(false)
    } catch(er) {
        return Promise.reject(er)
    }
}