import express from 'express'
import * as Motorcycle from './controllers/Motorcycle'

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World from Motor comparison!'))
app.get('/motorcycle/:motorcycleId', Motorcycle.getById)

app.listen(port, () => console.log(`Motor comparison server listening on port ${port}!`))