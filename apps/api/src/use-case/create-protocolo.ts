import { PrismaClient } from '@prisma/client'
import dayjs from 'dayjs'
import { PrismaProtocoloRepository } from '../../repositories/prisma/prisma-protocolos-repository'

interface CreateProtocoloUseCaseRequest {
  categoriaProtocolo: string
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
    categoriaProtocolo,
    documento,
    nome,
    dataProtocolo,
    atoPraticar,
    atoLavrado,
    livroLavrado,
    folhaLavrado,
  }: CreateProtocoloUseCaseRequest) {
    const prisma = new PrismaClient()
    const prismaProtocoloRepository = new PrismaProtocoloRepository()

    const categoriasLivros = await prisma.categoriasLivrosProtocolos.findMany()

    const categorias = categoriasLivros.map((livro) => livro.categoria_livro)

    const livrosProtoco = await prisma.livrosProtocolos.findFirst({
      where: {
        nome_livro_id: categoriaProtocolo,
        AND: { data_enceramento: null },
      },
      select: {
        id: true,
      },
    })
    const id = livrosProtoco?.id

    let { numeroProtocolo } = await prisma.numerosProtocolos.findFirst({
      orderBy: { numeroProtocolo: 'desc' },
      where: {
        livrosProtocolosId: id,
      },
    })
    ++numeroProtocolo

    const dataDia = dayjs(dataProtocolo).format(`YYYYMMDD`)

    const numerosProtocolosId = `${dataDia}.${id}.${numeroProtocolo
      .toString()
      .padStart(6, '0')}`

    // const protocolos = await prisma.protocolos.create({
    //   data: {
    //     LivrosProtocolos: {
    //       connect: {
    //         id,
    //       },
    //     },
    //     numeroProtocolo: {
    //       create: {
    //         id: numerosProtocolosId,
    //         dataProtocolo: dataDia,
    //         numeroProtocolo,
    //         folhaLivroProtocolo: 1,
    //         livrosProtocolosId: id,
    //       },
    //     },
    //     dataProtocolo,
    //     atoPraticar,
    //     atoLavrado,
    //     livroLavrado,
    //     folhaLavrado,
    //     Requerentes: {
    //       connectOrCreate: {
    //         where: {
    //           documento,
    //         },
    //         create: {
    //           documento,
    //           nome,
    //         },
    //       },
    //     },
    //   },
    // })

    const protocolos = await prismaProtocoloRepository.create(
      id,
      numerosProtocolosId,
      dataDia,
      numeroProtocolo,
      dataProtocolo,
      atoPraticar,
      atoLavrado,
      livroLavrado,
      folhaLavrado,
      documento,
      nome,
    )

    return protocolos
  }
}
