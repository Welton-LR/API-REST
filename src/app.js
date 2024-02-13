import express from 'express'
const app = express()


//criar rota  padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso Node!')
})
  
export default app


