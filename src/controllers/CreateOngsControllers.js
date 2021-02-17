/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * routa de criação de ongs
 */

import crypto from 'crypto'
import connection from '../database/Connextion'

class CreateOngsControllers {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body // pegando o corpo da requisão ou seja pegando os dados a ser cadastrados

        // gerando o Id aleatório com a lib crypto nativa do node
        const id = crypto.randomBytes(4).toString('HEX')

        // inserindo dados no banco
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return response.json({ id })
    }

    async readOng(request, response) {
        // rotas de listagem
        const listar = await connection('ongs').select('*')
        return response.json(listar)
    }

}


export default new CreateOngsControllers