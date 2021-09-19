import HttpError from './httpError.exception'
import {Location} from 'get-current-line'

export default class NotFoundException extends HttpError {
	logContent: string
	constructor(location: Location) {
		super(
			404,
			'Not Found',
			location,
			'[NF0001]',
			`File:${location.file}|Function:${location.method}|Line:${location.line}`,
		)
	}
}
