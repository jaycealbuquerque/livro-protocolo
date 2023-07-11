interface CreateProtocoloUseCaseRequest {
  documentoInteressado: string
  nomeInteressado: string
  dataProtocolo: string
  atoSerPraticado: string
  atoLavrado: string
  atoLavradoLivro: string
  atoLavradoFolhas: string
}

export class CreateProtocoloUseCase {
  async execute({
    documentoInteressado,
    nomeInteressado,
    dataProtocolo,
    atoSerPraticado,
    atoLavrado,
    atoLavradoLivro,
    atoLavradoFolhas,
  }: CreateProtocoloUseCaseRequest) {
    return {
      documentoInteressado,
      nomeInteressado,
      dataProtocolo,
      atoSerPraticado,
      atoLavrado,
      atoLavradoLivro,
      atoLavradoFolhas,
    }
  }
}
