import { Request, Response } from 'express'
import { GetAllProtocolosUseCase } from '../../use-case/get-all-protocolos'

export class GetAllProtocolosController {
  async handle(request: Request, response: Response) {
    const getAllProtocolosUseCase = new GetAllProtocolosUseCase()

    const getAllProtocolos = await getAllProtocolosUseCase.execute()

    return response.json(getAllProtocolos)
  }
}
