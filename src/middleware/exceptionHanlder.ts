import HttpError from '../exception/httpError.exception'
import {Request, Response, NextFunction} from 'express'
import Logger from '../helper/log.helper'
import OptionLog from '../helper/log.helper'

export default function errorHandler(
	error: HttpError,
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const method = request.method
	const url = request.originalUrl
	const accessIp = request.ip
	const userAgent = request.get('User-Agent')
	const status = error.status
	const message = error.message
	const logger = new Logger()

	if (status < 500) {
		logger.warn(
			`[WARNING]`,
			`Code:${error.logCode}| Method:${method}|URL:${url}|IP:${accessIp}|User-Agent:${userAgent}|Desc:${error.message}`,
			{
				logContent: error.logContent,
				errorStack: error.stack,
			} as OptionLog,
		)
	} else {
		logger.error(
			`[ERROR]`,
			`Code:${error.logCode}|Method:${method}|URL:${url}|IP:${accessIp}|User-Agent:${userAgent}|Desc:${error.message}`,
			{
				logContent: error.logContent,
				errorStack: error.stack,
			} as OptionLog,
		)
	}

	response.status(status).send({
		httpStatus: status,
		message: message,
	})
}
