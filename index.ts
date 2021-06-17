const http=require('http');
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import app from './src/app';
import User from './src/entityes/User';
const server=http.createServer(app);
(
    async function(){
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12',
            database: 'nodejsdb',
            entities: [User],
            synchronize: true,
            logging: false
        });
    }
)();

server.listen(3000, ()=>{
    console.log('server is listening at port 3000');
});