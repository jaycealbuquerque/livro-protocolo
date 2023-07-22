import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const categoriasLivrosProtocolos =
  //   await prisma.categoriasLivrosProtocolos.createMany({
  //     data: [
  //       { categoria_livro: 'REGISTRO NOTAS' },
  //       { categoria_livro: 'REGISTRO CIVIL' },
  //       { categoria_livro: 'REGISTRO PESSOA JURIDICA' },
  //       { categoria_livro: 'REGISTRO TITULOS E DOCUMENTOS' },
  //     ],
  //   })

  // const livrosProtocolos = await prisma.livrosProtocolos.createMany({
  //   data: [
  //     {
  //       id: 'RN0001',
  //       numero_livro: 1,
  //       data_abertura: '20-07-2023',
  //       data_enceramento: '20-08-2023',
  //       nome_livro_id: 'REGISTRO NOTAS',
  //     },
  //     {
  //       id: 'RN0002',
  //       numero_livro: 2,
  //       data_abertura: '20-08-2023',
  //       data_enceramento: '20-09-2023',
  //       nome_livro_id: 'REGISTRO NOTAS',
  //     },
  //     {
  //       id: 'RN0003',
  //       numero_livro: 3,
  //       data_abertura: '20-09-2023',
  //       nome_livro_id: 'REGISTRO NOTAS',
  //     },
  //     {
  //       id: 'RC0001',
  //       numero_livro: 1,
  //       data_abertura: '20-07-2023',
  //       data_enceramento: '20-08-2024',
  //       nome_livro_id: 'REGISTRO CIVIL',
  //     },
  //     {
  //       id: 'RC0002',
  //       numero_livro: 1,
  //       data_abertura: '20-08-2023',
  //       data_enceramento: '20-09-2024',
  //       nome_livro_id: 'REGISTRO CIVIL',
  //     },
  //     {
  //       id: 'RC0003',
  //       numero_livro: 1,
  //       data_abertura: '20-09-2023',
  //       nome_livro_id: 'REGISTRO CIVIL',
  //     },
  //   ],
  // })
  await prisma.categoriasLivrosProtocolos.create({
    data: {
      categoria_livro: 'REGISTRO NOTAS',
      LivrosProtocolos: {
        createMany: {
          data: [
            {
              id: 'RN0001',
              numero_livro: 1,
              data_abertura: '20-07-2023',
              data_enceramento: '20-08-2024',
            },
            {
              id: 'RN0002',
              numero_livro: 1,
              data_abertura: '20-08-2023',
              data_enceramento: '20-09-2024',
            },
            {
              id: 'RN0003',
              numero_livro: 1,
              data_abertura: '20-09-2023',
            },
          ],
        },
      },
    },
  })
  await prisma.categoriasLivrosProtocolos.create({
    data: {
      categoria_livro: 'REGISTRO CIVIL',
      LivrosProtocolos: {
        createMany: {
          data: [
            {
              id: 'RC0001',
              numero_livro: 1,
              data_abertura: '20-07-2023',
              data_enceramento: '20-08-2023',
            },
            {
              id: 'RC0002',
              numero_livro: 2,
              data_abertura: '20-08-2023',
              data_enceramento: '20-09-2023',
            },
            {
              id: 'RC0003',
              numero_livro: 3,
              data_abertura: '20-09-2023',
            },
          ],
        },
      },
    },
  })
  await prisma.numerosProtocolos.createMany({
    data: [
      {
        id: '20230720.RN0003/000001',
        dataProtocolo: '20230720',
        numeroProtocolo: 1,
        folhaLivroProtocolo: 1,
        livrosProtocolosId: 'RN0003',
      },
      {
        id: '20230720.RN0003/000002',
        dataProtocolo: '20230720',
        numeroProtocolo: 2,
        folhaLivroProtocolo: 1,
        livrosProtocolosId: 'RN0003',
      },
      {
        id: '20230720.RN0003/000003',
        dataProtocolo: '20230720',
        numeroProtocolo: 3,
        folhaLivroProtocolo: 1,
        livrosProtocolosId: 'RN0003',
      },
      {
        id: '20230720.RC0003/000001',
        dataProtocolo: '20230720',
        numeroProtocolo: 1,
        folhaLivroProtocolo: 1,
        livrosProtocolosId: 'RC0003',
      },
      {
        id: '20230720.RC0003/000002',
        dataProtocolo: '20230720',
        numeroProtocolo: 2,
        folhaLivroProtocolo: 1,
        livrosProtocolosId: 'RC0003',
      },
      {
        id: '20230720.RC0003/000003',
        dataProtocolo: '20230720',
        numeroProtocolo: 3,
        folhaLivroProtocolo: 1,
        livrosProtocolosId: 'RC0003',
      },
    ],
  })
  await prisma.requerentes.create({
    data: {
      documento: '04029797377',
      nome: 'Jeyce Albuquerque da Rocha',
      Protocolos: {
        createMany: {
          data: [
            {
              livrosProtocolosId: 'RN0003',
              numerosProtocolosId: '20230720.RN0003/000001',
              dataProtocolo: '20230720',
              atoPraticar: 'PROCURAÇÃO',
              atoLavrado: 'PROCURAÇÃO',
              livroLavrado: '075',
              folhaLavrado: '101',
            },
            {
              livrosProtocolosId: 'RN0003',
              numerosProtocolosId: '20230720.RN0003/000002',
              dataProtocolo: '20230720',
              atoPraticar: 'ESCRITURA',
              atoLavrado: 'ESCRITURA',
              livroLavrado: '075',
              folhaLavrado: '102',
            },
            {
              livrosProtocolosId: 'RN0003',
              numerosProtocolosId: '20230720.RN0003/000003',
              dataProtocolo: '20230720',
              atoPraticar: 'ESCRITURA',
              atoLavrado: 'UNIÃO ESTAVEL',
              livroLavrado: '075',
              folhaLavrado: '103',
            },
          ],
        },
      },
    },
  })
  await prisma.requerentes.create({
    data: {
      documento: '04029797378',
      nome: 'Marier Oliver Castro',
      Protocolos: {
        createMany: {
          data: [
            {
              livrosProtocolosId: 'RC0003',
              numerosProtocolosId: '20230720.RC0003/000001',
              dataProtocolo: '20230720',
              atoPraticar: 'CASAMENTO',
              atoLavrado: 'CASAMENTO',
              livroLavrado: '075',
              folhaLavrado: '101',
            },
            {
              livrosProtocolosId: 'RC0003',
              numerosProtocolosId: '20230720.RC0003/000002',
              dataProtocolo: '20230720',
              atoPraticar: 'SEGUNDA VIA',
              atoLavrado: 'SEGUNDA VIA',
              livroLavrado: '075',
              folhaLavrado: '102',
            },
            {
              livrosProtocolosId: 'RC0003',
              numerosProtocolosId: '20230720.RC0003/000003',
              dataProtocolo: '20230720',
              atoPraticar: 'AVERBAÇÃO',
              atoLavrado: 'AVERBAÇÃO',
              livroLavrado: '075',
              folhaLavrado: '103',
            },
          ],
        },
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
