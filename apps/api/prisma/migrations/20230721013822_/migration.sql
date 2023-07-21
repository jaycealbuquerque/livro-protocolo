/*
  Warnings:

  - The primary key for the `protocolos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `protocolos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "protocolos" DROP CONSTRAINT "protocolos_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "protocolos_pkey" PRIMARY KEY ("numerosProtocolosId");
