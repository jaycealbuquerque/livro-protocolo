import express from 'express'
import { env } from './env'
import { createProtocolo } from './http/controller/routes'
const app = express()

app.use(express.json())

app.use(createProtocolo)

app.listen(env.PORT, () => console.log('🚀 Server Running!'))
