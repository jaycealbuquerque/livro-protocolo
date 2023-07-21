-- AlterTable
ALTER TABLE "protocolos" ADD COLUMN     "livrosProtocolosId" TEXT,
ADD COLUMN     "requerenteId" TEXT;

-- CreateTable
CREATE TABLE "livros-protocolos" (
    "id" TEXT NOT NULL,
    "nome_livro" TEXT NOT NULL,
    "numero_livro" TEXT NOT NULL,
    "data_abertura" TEXT NOT NULL,
    "data_enceramento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "livros-protocolos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requerentes" (
    "documento" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requerentes_pkey" PRIMARY KEY ("documento")
);

-- CreateIndex
CREATE UNIQUE INDEX "livros-protocolos_id_key" ON "livros-protocolos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "requerentes_documento_key" ON "requerentes"("documento");

-- AddForeignKey
ALTER TABLE "protocolos" ADD CONSTRAINT "protocolos_livrosProtocolosId_fkey" FOREIGN KEY ("livrosProtocolosId") REFERENCES "livros-protocolos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "protocolos" ADD CONSTRAINT "protocolos_requerenteId_fkey" FOREIGN KEY ("requerenteId") REFERENCES "requerentes"("documento") ON DELETE SET NULL ON UPDATE CASCADE;
