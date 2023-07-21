/*
  Warnings:

  - The primary key for the `protocolos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `protocolos` table. All the data in the column will be lost.
  - You are about to drop the column `numeroProtocolo` on the `protocolos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numerosProtocolosId]` on the table `protocolos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numerosProtocolosId` to the `protocolos` table without a default value. This is not possible if the table is not empty.
  - Made the column `livrosProtocolosId` on table `protocolos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "protocolos" DROP CONSTRAINT "protocolos_livrosProtocolosId_fkey";

-- DropIndex
DROP INDEX "protocolos_id_key";

-- AlterTable
ALTER TABLE "protocolos" DROP CONSTRAINT "protocolos_pkey",
DROP COLUMN "id",
DROP COLUMN "numeroProtocolo",
ADD COLUMN     "numerosProtocolosId" TEXT NOT NULL,
ALTER COLUMN "livrosProtocolosId" SET NOT NULL,
ADD CONSTRAINT "protocolos_pkey" PRIMARY KEY ("numerosProtocolosId");

-- CreateTable
CREATE TABLE "numeros-protocolos" (
    "id" TEXT NOT NULL,
    "dataProtocolo" TEXT NOT NULL,
    "numeroProtocolo" TEXT NOT NULL,
    "folhaLivroProtocolo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "numeros-protocolos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "numeros-protocolos_id_key" ON "numeros-protocolos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "protocolos_numerosProtocolosId_key" ON "protocolos"("numerosProtocolosId");

-- AddForeignKey
ALTER TABLE "protocolos" ADD CONSTRAINT "protocolos_livrosProtocolosId_fkey" FOREIGN KEY ("livrosProtocolosId") REFERENCES "livros-protocolos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "protocolos" ADD CONSTRAINT "protocolos_numerosProtocolosId_fkey" FOREIGN KEY ("numerosProtocolosId") REFERENCES "numeros-protocolos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
