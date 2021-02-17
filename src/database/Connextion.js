/*
 * Api be the heroes with postgres and node js
 * Author: Lázaro Inácio Manuel
 * arquivo de conexão com o banco
 */

import knex from 'knex'
import dbConfiguration from '../../knexfile'


// criando a conexão com o estado de desenvolvimento

const Connection = knex(dbConfiguration.development)



export default Connection