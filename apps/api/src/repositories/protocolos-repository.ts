import { Protocolos } from '@prisma/client'

export interface ProtocoloRepository {
  create(
    id: string,
    numerosProtocolosId: string,
    dataDia: string,
    numeroProtocolo: number,
    livrosProtocolosId: string,
    dataProtocolo: string,
    atoPraticar: string,
    atoLavrado: string,
    livroLavrado: string,
    folhaLavrado: string,
    documento: string,
    nome: string,
  ): Promise<Protocolos>
}
