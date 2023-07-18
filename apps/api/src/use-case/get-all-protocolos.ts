import { PrismaClient } from '@prisma/client'

export class GetAllProtocolosUseCase {
  async execute() {
    const prisma = new PrismaClient()

    const result = await prisma.protocolos.findMany()

    return result
  }
}
