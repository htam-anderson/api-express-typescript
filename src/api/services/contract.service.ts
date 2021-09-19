import {MockApiBase} from './bases/mockAPIBase.service'

export class ContractService extends MockApiBase {
	constructor() {
		super()
		this.path = 'contract'
	}

	public async getContractList() {
		return await this.requestAxios('get')
	}

	public async getContractById() {}
}
