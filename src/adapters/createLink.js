import axios from 'axios'
import { timeout } from '@/config/constant'

export default async (data, abort = null, token = '', headers = {}) => {

    try {
        const response = await axios({
            data,
            timeout,
            method: 'post',
            url: '/api/link',
            abortSignal: abort,
            headers: { 
                'authorization': `Bearer ${token}`,
                ...headers
            },
        })

        return Promise.resolve(response.data)
    } catch(er) { return Promise.reject(er?.response?.data ?? er.message) }

}