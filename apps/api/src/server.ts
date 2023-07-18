import express from 'express'
import { env } from './env'
import { createProtocolo } from './http/controller/routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(createProtocolo)

app.listen(env.PORT, () => console.log('🚀 Server Running!'))
