const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');
const db = require('../database');

router.post('/produto', (req, res) => {
    const { nome, quantidade, preco } = req.body;
    const sql = `INSERT INTO produtos (nome, quantidade, preco) VALUES (?, ?, ?)`;

    db.run(sql, [nome, quantidade, preco], function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "Produto adicionado com sucesso",
            "data": { id: this.lastID, nome, quantidade, preco }
        });
    });
});


module.exports = router;
