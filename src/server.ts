import fastify from 'fastify'
import {knex} from './database'


const app = fastify()


app.get('/', async (req, res) => {

    const tables = await knex('sqlite_schema').select('*')
    return tables


    const valores: any = {nome: "andre", idade: 26}

    const valoresjson = JSON.stringify(valores)
    res.header('Content-Type', 'application/json')
    return valoresjson
    
    
})


app.listen({port: 3000}).then(()=>{
    console.log('servidor http rodando')
})