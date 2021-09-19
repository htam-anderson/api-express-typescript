import HttpError from './httpError.exception'
import {Location} from 'get-current-line'

export default class InternalException extends HttpError {
	logContent: string
	constructor(message: string, location: Location) {
		super(
			500,
			message,
			location,
			'[I0001]',
			`File:${location.file}|Function:${location.method}|Line:${location.line}`,
		)
	}
}
