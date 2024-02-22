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
//retornar objeto por id
function buscarSelecaoPorId (id) {
    return selecoes.filter(selecao => selecao.id == id)
}
//buscar o index do elemento no array através do id
function buscarIndexSelecao (id) {
    return selecoes.findIndex(selecao => selecao.id == id)
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

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send('Deletado com sucesso!')
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app


