const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produtos');

app.use(express.json());

app.use('/api', produtoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
