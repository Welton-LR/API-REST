import app from './app'

const port = 3000

// escutar a porta 3000
app.listen(port, () =>{
    console.log(`Server running on port  http://localhost:3000/  ${port}`)
})