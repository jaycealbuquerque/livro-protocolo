import { prisma } from '../../lib/prisma'
import { ProtocoloRepository } from '../protocolos-repository'

export class PrismaProtocoloRepository implements ProtocoloRepository {
  async create(
    id: string,
    numerosProtocolosId: string,
    dataDia: string,
    numeroProtocolo: number,
    dataProtocolo: string,
    atoPraticar: string,
    atoLavrado: string,
    livroLavrado: string,
    folhaLavrado: string,
    documento: string,
    nome: string,
  ) {
    const protocolos = await prisma.protocolos.create({
      data: {
        LivrosProtocolos: {
          connect: {
            id,
          },
        },
        numeroProtocolo: {
          create: {
            id: numerosProtocolosId,
            dataProtocolo: dataDia,
            numeroProtocolo,
            folhaLivroProtocolo: 1,
            livrosProtocolosId: id,
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

    return protocolos
  }
}
