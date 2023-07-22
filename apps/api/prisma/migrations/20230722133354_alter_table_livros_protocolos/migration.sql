/*
  Warnings:

  - You are about to drop the column `nome_livro` on the `livros-protocolos` table. All the data in the column will be lost.
  - Added the required column `nome_livro_id` to the `livros-protocolos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "livros-protocolos" DROP CONSTRAINT "livros-protocolos_nome_livro_fkey";

-- AlterTable
ALTER TABLE "livros-protocolos" DROP COLUMN "nome_livro",
ADD COLUMN     "nome_livro_id" TEXT NOT NULL,
ALTER COLUMN "data_enceramento" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "livros-protocolos" ADD CONSTRAINT "livros-protocolos_nome_livro_id_fkey" FOREIGN KEY ("nome_livro_id") REFERENCES "categorias-livros-protocolos"("categoria_livro") ON DELETE RESTRICT ON UPDATE CASCADE;
