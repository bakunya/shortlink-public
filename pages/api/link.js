import createLink from '@/src-api/controller/link/create'

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            return res.status(405).json({ message: 'Method not allowed' })

        case 'PUT':
            return res.status(405).json({ message: 'Method not allowed' })

        case 'POST':
            return createLink(req, res)

        case 'DELETE':
            return res.status(405).json({ message: 'Method not allowed' })
    }
}