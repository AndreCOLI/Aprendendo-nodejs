
import { app } from './app'
import { env } from '../env'


app.listen({port: 10000}).then(()=>{
    console.log('servidor http rodando')
})