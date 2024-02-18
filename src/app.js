import express from 'express'
const app = express()

//Indica qie o Express precisa ler o corpo da requisição com Json
app.use(express.json())

//mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suiça', grupo: 'G'},
    {id:3, selecao: 'Sérvia', grupo: 'G'},
    {id:4, selecao: 'Camarões', grupo: 'G'},
]

function buscarSelecaoPorId (id) {
    return selecoes.filter(selecao => selecao.id == id)

}

//criar rota  padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso Node!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app


