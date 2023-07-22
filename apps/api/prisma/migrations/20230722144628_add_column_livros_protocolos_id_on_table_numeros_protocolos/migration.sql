/*
  Warnings:

  - Added the required column `livrosProtocolosId` to the `numeros-protocolos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "numeros-protocolos" ADD COLUMN     "livrosProtocolosId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "numeros-protocolos" ADD CONSTRAINT "numeros-protocolos_livrosProtocolosId_fkey" FOREIGN KEY ("livrosProtocolosId") REFERENCES "livros-protocolos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
