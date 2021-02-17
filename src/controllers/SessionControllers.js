/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * classe responsavel por fazer login ou seja criar uma sessão
 */

import connection from '../database/Connextion'

class SessionControllers {
    async login(request, response) {
        // pegando o id da ong 
        const { id } = request.body
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if (!ong) {
            return response.status(400).json({ error: 'Not ong found with this ID' })
        }

        return response.json(ong)
    }

}


export default new SessionControllers