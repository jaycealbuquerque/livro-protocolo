import { Request, Response } from 'express'
import { CreateProtocoloUseCase } from '../../use-case/create-protocolo'

export class CreateProtocoloController {
  async handle(request: Request, response: Response) {
    const {
      categoriaProtocolo,
      numerosProtocolosId,
      documento,
      nome,
      dataProtocolo,
      atoPraticar,
      atoLavrado,
      livroLavrado,
      folhaLavrado,
    } = request.body

    const createProtocoloUseCase = new CreateProtocoloUseCase()

    const createProtocolo = await createProtocoloUseCase.execute({
      categoriaProtocolo,
      numerosProtocolosId,
      documento,
      nome,
      dataProtocolo,
      atoPraticar,
      atoLavrado,
      livroLavrado,
      folhaLavrado,
    })

    return response.json(createProtocolo)
  }
}
