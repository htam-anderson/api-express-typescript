import {Router} from 'express'
import {ContractDomain} from '../domains/contracts.Domain'

const router = Router()

router.get('/list', async (req: any, res: any) => {
	const query = res.query
	const contractDomain = new ContractDomain(query)

	const result = await contractDomain.getListContracts()

	res.json({results: result.data})
})

export default router
