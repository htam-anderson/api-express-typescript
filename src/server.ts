import App from './app'
import dotenv from 'dotenv'
import { PostController } from './api/controllers/post.controller'

dotenv.config()

const app = new App(
	// Controlers go here
	[new PostController()],
	process.env.SERVER_PORT,
	process.env.SERVER_HOST
)

app.listen()

