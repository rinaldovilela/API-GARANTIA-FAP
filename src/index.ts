const express = require('express')
const clients = require('./modules/clients.js')


const app = express();

app.get('/', (req, res) => {

const {id} = req.params

const client = clients.find((value) => valeu.id === Number(id))

if (!client) req.res('client note found')
req.send(client)

})




app.get('/', (req, res)  => {

const {id} = req.params;

const name = req.name

const age = req.age

const client = cliente.put((value) => value.id === Number(id);

req.send(client)


})


app.get('/cliente/:id',(req, res) => {

const {id} = req.params; 

const client = clients.find((value) => valeu.id === Number(id)); 


} )