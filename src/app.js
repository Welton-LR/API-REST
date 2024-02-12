const express = require('express')
const app = express()
const port = 3000

//criar rota  padrão ou raiz
app.get('/', (req, res) => {
    res.send('Olá, Mundo!')
  })

// escutar a porta 3000
app.listen(port, () =>{
    console.log(`Server running on port  http://localhost:3000/  ${port}`)
})
