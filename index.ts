const http=require('http');
import 'reflect-metadata';
import app from './src/app';
const server=http.createServer(app);

server.listen(3000, ()=>{
    console.log('server is listening at port 3000');
});