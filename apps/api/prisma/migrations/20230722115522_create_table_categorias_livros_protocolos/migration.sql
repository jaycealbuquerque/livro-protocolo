/*
  Warnings:

  - Changed the type of `numero_livro` on the `livros-protocolos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "livros-protocolos" DROP COLUMN "numero_livro",
ADD COLUMN     "numero_livro" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "categorias-livros-protocolos" (
    "categoria_livro" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categorias-livros-protocolos_pkey" PRIMARY KEY ("categoria_livro")
);

-- CreateIndex
CREATE UNIQUE INDEX "categorias-livros-protocolos_categoria_livro_key" ON "categorias-livros-protocolos"("categoria_livro");

-- AddForeignKey
ALTER TABLE "livros-protocolos" ADD CONSTRAINT "livros-protocolos_nome_livro_fkey" FOREIGN KEY ("nome_livro") REFERENCES "categorias-livros-protocolos"("categoria_livro") ON DELETE RESTRICT ON UPDATE CASCADE;
