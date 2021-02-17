/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * classe responsavel em listar apenas um dados especifico
 */


import connection from '../database/Connextion'

class ProfileControllers {
    async index(request, response) {
        // pegando id da ong logad
        const ong_id = request.headers.authorization
        const onlyIncident = await connection('incidents')
            .where('ongs_id', ong_id).select('*')
        return response.json(onlyIncident)
    }
}




export default new ProfileControllers