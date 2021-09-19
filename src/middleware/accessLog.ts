import {Request, Response, NextFunction} from 'express'
import Logger from '../helper/log.helper'

export default function accessLog(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const accessIP = req.ip
	const userAgent = req.get('User-Agent')
	const method = req.method

	const logger = new Logger()
	const logContent = `Method:${method}|URL:${req.originalUrl}|IP:${accessIP}|User-Agent:${userAgent}`
	logger.info('[ACCESS]', logContent)

	next()
}
