import express from 'express'
import './database/conection'
const app = express();

app.use(express.json());

app.get('/users', (request, response) => { 
    return response.json({message: 'Hello word'})
});
// REQ / RES
 
app.listen(3030);