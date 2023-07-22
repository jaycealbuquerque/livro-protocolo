/*
  Warnings:

  - Changed the type of `numeroProtocolo` on the `numeros-protocolos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `folhaLivroProtocolo` on the `numeros-protocolos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "numeros-protocolos" DROP COLUMN "numeroProtocolo",
ADD COLUMN     "numeroProtocolo" INTEGER NOT NULL,
DROP COLUMN "folhaLivroProtocolo",
ADD COLUMN     "folhaLivroProtocolo" INTEGER NOT NULL;
