/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * servidor
 */

import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(cors)
app.use(express.json())
app.use(routes)

try {
    app.listen(3333)
    console.log(' Servidor rodando....')
} catch (error) {
    console.log('Alguma coisa deu errado' + error)
}