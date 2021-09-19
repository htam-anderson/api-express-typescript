import express from 'express'
import getCurrentLine from 'get-current-line'
import InternalException from '../../exception/internal.exception'

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
		throw new InternalException('Loi Internal ne', getCurrentLine())
	}
}
