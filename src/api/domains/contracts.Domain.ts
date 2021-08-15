import {ContractService} from '../services/contractService'

export class ContractDomain {
	private reqParam: object
	private contractServie: ContractService

	constructor(reqParam: object) {
		this.reqParam = reqParam
		this.contractServie = new ContractService()
	}

	public async getListContracts() {
		return await this.contractServie.getContractList()
	}
}
