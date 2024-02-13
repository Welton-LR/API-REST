import app from './src/app.js'

const PORT = 3000

// Escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})