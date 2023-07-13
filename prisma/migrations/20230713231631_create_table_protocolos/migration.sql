-- CreateTable
CREATE TABLE "protocolos" (
    "id" TEXT NOT NULL,
    "numeroProtocolo" TEXT NOT NULL,
    "documentoInteressado" TEXT NOT NULL,
    "nomeInteressado" TEXT NOT NULL,
    "dataProtocolo" TEXT NOT NULL,
    "atoSerPraticado" TEXT NOT NULL,
    "atoLavrado" TEXT NOT NULL,
    "atoLavradoLivro" TEXT NOT NULL,
    "atoLavradoFolhas" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "protocolos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "protocolos_id_key" ON "protocolos"("id");
