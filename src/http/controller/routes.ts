import { Router } from 'express'
import { CreateProtocoloController } from './create-protocolo'

const createProtocolo = Router()

createProtocolo.post('/createProtocolo', new CreateProtocoloController().handle)

export { createProtocolo }
