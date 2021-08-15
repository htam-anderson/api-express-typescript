import dotenv from 'dotenv'
import express from 'express'
import accessLog from './middleware/accessLog'
import api from './api'

dotenv.config()
const app = express()
const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

app.set('port', port)
app.use('/api', accessLog, api)

async function start() {
	const server = app.listen(port)
	server.keepAliveTimeout = 0
	console.info(`Server listening on ${host}:${port}`)
}

start()
