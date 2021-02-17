/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * controllers de incidents
 */

import connection from '../database/Connextion'
class CreateIncidentsControllers {
    async CreateIncidents(request, response) {
        // pegando os dados da corpo da requisição
        const { title, description, valores } = request.body
            // pegando o id de autorização
        const ongs_id = request.headers.authorization

        const incidents = await connection('incidents').insert({

            title,
            description,
            valores,
            ongs_id,
        })

        return response.json({ incidents })

    }

    async readIncidents(request, response) {
        // total casos

        const [count] = await connection('incidents').count()


        // paginação
        const { page = 1 } = request.query

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ongs_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ])

        // retornando total casos no headers
        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents)
    }

    async deleteIncidents(request, response) {
        // metodo para deletar dados
        // peganado id de autização para deletar
        const { id } = request.params;
        const ongs_id = request.headers.authorization


        // buscando os incidents
        const incidents = await connection('incidents')
            .where('id', id)
            .select('ongs_id')
            .first()

        // verificando se o id logado é o mesmo
        if (incidents.ongs_id != ongs_id) {
            return response.status(401).json({ error: 'operation not permited' })
        }

        // deletando registro no banco
        await connection('incidents').where('id', id).delete()
        return response.status(204).send()

    }


}


export default new CreateIncidentsControllers