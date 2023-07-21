/*
  Warnings:

  - You are about to drop the column `atoLavradoFolhas` on the `protocolos` table. All the data in the column will be lost.
  - You are about to drop the column `atoLavradoLivro` on the `protocolos` table. All the data in the column will be lost.
  - You are about to drop the column `atoSerPraticado` on the `protocolos` table. All the data in the column will be lost.
  - You are about to drop the column `documentoInteressado` on the `protocolos` table. All the data in the column will be lost.
  - You are about to drop the column `nomeInteressado` on the `protocolos` table. All the data in the column will be lost.
  - Added the required column `atoPraticar` to the `protocolos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folhaLavrado` to the `protocolos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `livroLavrado` to the `protocolos` table without a default value. This is not possible if the table is not empty.
  - Made the column `requerenteId` on table `protocolos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "protocolos" DROP CONSTRAINT "protocolos_requerenteId_fkey";

-- AlterTable
ALTER TABLE "protocolos" DROP COLUMN "atoLavradoFolhas",
DROP COLUMN "atoLavradoLivro",
DROP COLUMN "atoSerPraticado",
DROP COLUMN "documentoInteressado",
DROP COLUMN "nomeInteressado",
ADD COLUMN     "atoPraticar" TEXT NOT NULL,
ADD COLUMN     "folhaLavrado" TEXT NOT NULL,
ADD COLUMN     "livroLavrado" TEXT NOT NULL,
ALTER COLUMN "requerenteId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "protocolos" ADD CONSTRAINT "protocolos_requerenteId_fkey" FOREIGN KEY ("requerenteId") REFERENCES "requerentes"("documento") ON DELETE RESTRICT ON UPDATE CASCADE;
