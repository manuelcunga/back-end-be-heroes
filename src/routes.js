/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * modulo de routas
 */

import { Router } from 'express'
import CreateOngsControllers from './controllers/CreateOngsControllers'
import CreateIncidentsControllers from './controllers/CreateIncidentsControllers'
import ProfileControllers from './controllers/ProfileControllers'
import SessionControllers from './controllers/SessionControllers'
const routes = new Router()

routes.get('/ongs', CreateOngsControllers.readOng)

// routa de login
routes.post('/session', SessionControllers.login)

// routa de criação de uma ongs
routes.post('/ongs', CreateOngsControllers.create)
routes.get('/incidents', CreateIncidentsControllers.readIncidents)

routes.post('/incidents', CreateIncidentsControllers.CreateIncidents)
routes.delete('/incidents/:id', CreateIncidentsControllers.deleteIncidents)

routes.get('/profile', ProfileControllers.index)


export default routes