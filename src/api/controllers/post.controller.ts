import express from 'express'

interface Post {
	author: string
	content: string
	title: string
}

export class PostController {
	public path = '/posts'
	public router = express.Router()

	private posts: Post[] = [
		{
			author: 'Marcin',
			content: 'Dolor sit amet',
			title: 'Lorem Ipsum',
		},
	]

	constructor() {
		this.intializeRoutes()
	}

	private intializeRoutes() {
		this.router.get(
			this.path,
			// binding function
			[this.getAllPosts.bind(this)],
		)
	}

	private getAllPosts(request: express.Request, response: express.Response) {
		response.send(this.posts)
	}
}
