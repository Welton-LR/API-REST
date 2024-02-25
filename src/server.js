import app from './app.js'

import conexao from '../infra/conexap.js'

const PORT = 3000

//Fazer conexão
conexao.connect((erro) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log("Conexão realizada com sucesso!");

        // Escutar a porta 3000
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`)
        })
          }
    })    
