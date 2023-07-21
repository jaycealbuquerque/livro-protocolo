import { PrismaClient } from '@prisma/client'

interface CreateProtocoloUseCaseRequest {
  livrosProtocolosId: string
  numerosProtocolosId: string
  documento: string
  nome: string
  dataProtocolo: string
  atoPraticar: string
  atoLavrado: string
  livroLavrado: string
  folhaLavrado: string
}

export class CreateProtocoloUseCase {
  async execute({
    livrosProtocolosId,
    numerosProtocolosId,
    documento,
    nome,
    dataProtocolo,
    atoPraticar,
    atoLavrado,
    livroLavrado,
    folhaLavrado,
  }: CreateProtocoloUseCaseRequest) {
    const prisma = new PrismaClient()

    const result = await prisma.protocolos.create({
      data: {
        LivrosProtocolos: {
          connect: {
            id: livrosProtocolosId,
          },
        },
        numeroProtocolo: {
          create: {
            id: numerosProtocolosId,
            dataProtocolo: '20230720',
            numeroProtocolo: '000004',
            folhaLivroProtocolo: '1',
          },
        },
        dataProtocolo,
        atoPraticar,
        atoLavrado,
        livroLavrado,
        folhaLavrado,
        Requerentes: {
          connectOrCreate: {
            where: {
              documento,
            },
            create: {
              documento,
              nome,
            },
          },
        },
      },
    })

    return result
  }
}
