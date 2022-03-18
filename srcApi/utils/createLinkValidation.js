import defaultLink from "@/validations/defaultLink"
import shortLink from "@/validations/shortLink"

export default async (jsonBodyRequest) => {
    try {
        console.log(jsonBodyRequest?.shortLink)
        await defaultLink().validate(jsonBodyRequest?.defaultLink)
        await shortLink().validate(jsonBodyRequest?.shortLink)
    } catch(er) { return Promise.reject(er) }
}