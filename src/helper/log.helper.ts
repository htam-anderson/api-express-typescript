enum LogLevel {
	INFO = 'INFO',
	WARNING = 'WARN',
	ERROR = 'ERR',
	DEBUG = 'DEBUG',
}

export default interface OptionLog {
	logContent: string
	errorStack: string
}

export default class Logger {
	private logDisplay: {
		info: boolean
		warn: boolean
		error: boolean
		debug: boolean
	} = {
		info: false,
		warn: false,
		error: false,
		debug: false,
	}

	constructor() {
		this.displayLog()
	}

	private displayLog() {
		switch (process.env.LOG_LEVEL) {
			case LogLevel.INFO: {
				this.logDisplay = {
					info: true,
					warn: false,
					error: false,
					debug: false,
				}
				break
			}
			case LogLevel.WARNING: {
				this.logDisplay = {
					info: true,
					warn: true,
					error: false,
					debug: false,
				}
				break
			}
			case LogLevel.ERROR: {
				this.logDisplay = {
					info: true,
					warn: true,
					error: true,
					debug: false,
				}
				break
			}
			case LogLevel.DEBUG: {
				this.logDisplay = {
					info: true,
					warn: true,
					error: true,
					debug: true,
				}
				break
			}
		}
	}

	public info(logType: string, logContent: string) {
		const time = new Date().toJSON()
		if (this.logDisplay.info) {
			console.info(`${time}|${logType}|${logContent}`)
		}
	}

	public warn(logType: string, logContent: string, option?: OptionLog) {
		const time = new Date().toJSON()
		if (this.logDisplay.warn) {
			if (this.logDisplay.debug) {
				console.warn(`${time}|${logType}|${logContent}`)
				console.warn(`${time}|${logType}|${option.logContent}`)
				console.warn(`${time}|${logType}|${option.errorStack}`)
			} else {
				console.warn(`${time}|${logType}|${logContent}`)
			}
		}
	}

	public error(logType: string, logContent: string, option?: OptionLog) {
		const time = new Date().toJSON()
		if (this.logDisplay.error) {
			if (this.logDisplay.debug) {
				console.error(`${time}|${logType}|${logContent}`)
				console.error(`${time}|${logType}|${option.logContent}`)
				console.error(`${time}|${logType}|${option.errorStack}`)
			} else {
				console.error(`${time}|${logType}|${logContent}`)
			}
		}
	}
}
