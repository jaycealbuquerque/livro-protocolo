import { PrismaClient } from '@prisma/client'

interface CreateProtocoloUseCaseRequest {
  documentoInteressado: string
  nomeInteressado: string
  dataProtocolo: string
  atoSerPraticado: string
  atoLavrado: string
  atoLavradoLivro: string
  atoLavradoFolhas: string
}

export class CreateProtocoloUseCase {
  async execute({
    documentoInteressado,
    nomeInteressado,
    dataProtocolo,
    atoSerPraticado,
    atoLavrado,
    atoLavradoLivro,
    atoLavradoFolhas,
  }: CreateProtocoloUseCaseRequest) {
    const prisma = new PrismaClient()

    const result = await prisma.protocolos.create({
      data: {
        documentoInteressado,
        nomeInteressado,
        dataProtocolo,
        atoSerPraticado,
        atoLavrado,
        atoLavradoLivro,
        atoLavradoFolhas,
      },
    })

    return result
  }
}
