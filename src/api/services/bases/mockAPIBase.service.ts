import axios, {AxiosRequestConfig, AxiosResponse, Method} from 'axios'

export class MockApiBase {
	protected path: string

	protected async requestAxios(
		reqMethod: Method,
		query?: object,
	): Promise<AxiosResponse<any>> {
		try {
			const axiosReqConfig: AxiosRequestConfig = {
				method: reqMethod,
				url: `${process.env.MOCK_API_BASE_URL}/${this.path}`,
				params: query,
				headers: {
					'Content-Type': 'application/json',
				},
			}

			return await axios.request(axiosReqConfig)
		} catch (error) {
			console.error(`[Error]: ${error.message}`)
			throw error
		}
	}
}
