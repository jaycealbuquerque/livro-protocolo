import { Request, Response } from 'express'
import { CreateProtocoloUseCase } from '../../use-case/create-protocolo'

export class CreateProtocoloController {
  async handle(request: Request, response: Response) {
    const {
      documentoInteressado,
      nomeInteressado,
      dataProtocolo,
      atoSerPraticado,
      atoLavrado,
      atoLavradoLivro,
      atoLavradoFolhas,
    } = request.body

    const createProtocoloUseCase = new CreateProtocoloUseCase()

    const createProtocolo = await createProtocoloUseCase.execute({
      documentoInteressado,
      nomeInteressado,
      dataProtocolo,
      atoSerPraticado,
      atoLavrado,
      atoLavradoLivro,
      atoLavradoFolhas,
    })

    return response.json(createProtocolo)
  }
}
