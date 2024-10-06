import fastify from 'fastify'
import {knex} from './database'
import crypto from 'node:crypto'
import { env } from '../env'



const app = fastify()


app.get('/', async (req, res) => {

    //const tables = await knex(`sqlite_schema`).select(`*`)
    //return tables


  /*  const transaction = await knex('transactions').insert({
        
        id: crypto.randomUUID(),
        title: 'Teste2',
        amount: 1000,
        
    }).returning('*')*/


    const transaction = await knex('transactions').select('*')

    return transaction 

    const valores: any = {nome: "andre", idade: 26}

    const valoresjson = JSON.stringify(valores)
    res.header('Content-Type', 'application/json')
    return valoresjson
    
    
})


app.listen({port: env.PORT}).then(()=>{
    console.log('servidor http rodando')
})