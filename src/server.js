import app from './src/app.js';

const port = 3000;

// Escutar a porta 3000
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
});
