import App from './app'
import {PostController} from './api/controllers/post.controller'

const app = new App(
	// Controlers go here
	[new PostController()],
	parseInt(process.env.SERVER_PORT),
	process.env.SERVER_HOST,
)

app.listen()
