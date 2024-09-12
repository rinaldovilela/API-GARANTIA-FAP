const express = require('express')

const app = express();

app.get('/', (req, res) => {

const {id} = req.params
const client = clientes.find((value) => valeu.id === Number(id))

if (!client) req.res('client note found')
req.send(client)
})