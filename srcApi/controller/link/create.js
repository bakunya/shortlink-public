import parseToken from "@/src-api/utils/parseToken"
import createLink from "@/src-api/repository/link/create"
import getAuthorization from "@/src-api/utils/getAuthorization"
import createLinkValidation from "@/src-api/utils/createLinkValidation"

export default async (req, res) => {
    let userInfo = null
    const token = getAuthorization(req)
    
    try {
        if(token) (userInfo = await parseToken(token))
    } catch(er) {
        return res.status(401).json({
            message: er.message
        })
    }

    if(!userInfo)req.body.userId = 'anonymous'

    try {
        await createLinkValidation(req.body)
        await createLink(req.body)
        return res.status(200).json({
            message: 'success created link data'
        })
    } catch(er) {
        return res.status(401).json({
            message: er.message
        })
    }
}