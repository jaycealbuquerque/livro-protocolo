import { Router } from 'express'
import { CreateProtocoloController } from './create-protocolo'
import { GetAllProtocolosController } from './get-all-protocolos'

const createProtocolo = Router()

createProtocolo.post('/createProtocolo', new CreateProtocoloController().handle)
createProtocolo.get(
  '/getAllProtocolos',
  new GetAllProtocolosController().handle,
)

export { createProtocolo }
