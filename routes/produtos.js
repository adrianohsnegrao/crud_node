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

router.get('/produto', (req, res) => {
    const sql = "SELECT * FROM produtos";

    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "Sucesso",
            "data": rows
        });
    });
});

router.put('/produto/:id', (req, res) => {
    const { nome, quantidade, preco } = req.body;
    const sql = `UPDATE produtos SET nome = ?, quantidade = ?, preco = ? WHERE id = ?`;

    db.run(sql, [nome, quantidade, preco, req.params.id], function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            message: "Produto atualizado com sucesso",
            data: { id: req.params.id, nome, quantidade, preco },
            changes: this.changes
        });
    });
});

router.delete('/produto/:id', (req, res) => {
    const sql = 'DELETE FROM produtos WHERE id = ?';

    db.run(sql, req.params.id, function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "Produto deletado com sucesso", changes: this.changes });
    });
});


module.exports = router;
