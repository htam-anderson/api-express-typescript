import {Router} from 'express'

const router = Router()

router.use((req, res, next) => {
	const accessIP = req.ip
	const userAgent = req.get('User-Agent')
	const method = req.method
	const accesDate = new Date()

	console.info(
		`${accesDate.toJSON()}| [ACCESS]: Method:${method} URL:${
			req.originalUrl
		} IP:${accessIP} User-Agent:${userAgent}`,
	)
	next()
})

export default router
