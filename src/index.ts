const express = require('express')
const clients = require('./modules/clients.js')


const app = express();

app.get('/', (req, res) => {

const {id} = req.params
const client = clients.find((value) => valeu.id === Number(id))

if (!client) req.res('client note found')
req.send(client)
})