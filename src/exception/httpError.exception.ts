import {Location} from 'get-current-line'

export default class HttpError extends Error {
	status: number
	message: string
	location: Location
	logCode: string
	logContent: string

	constructor(
		status: number,
		message: string,
		location: Location,
		logCode: string,
		logContent: string,
	) {
		super(message)
		this.status = status
		this.message = message
		this.location = location
		this.logCode = logCode
		this.logContent = logContent
	}
}
