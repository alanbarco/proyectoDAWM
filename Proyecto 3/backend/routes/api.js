var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Producto = require('../models').producto;  
const Categoria = require('../models').categoria;  


router.get('/productos', function(req, res, next) {
  Producto.findAll({  
    attributes: { exclude: ["updatedAt"] }  
})  
.then(productos => {  
    res.json(productos);  
})  
.catch(error => res.status(400).send(error)) 
});

router.get('/categoria', function(req, res, next) {
    Categoria.findAll({  
      attributes: { exclude: ["updatedAt"] }  
  })  
  .then(productos => {  
      res.json(productos);  
  })  
  .catch(error => res.status(400).send(error)) 
  });

router.get('/productos/:categoria', function(req, res, next){
  Producto.findAll({
    where: { categoria: req.params.categoria }
  })
  .then(producto => {
    res.json(producto);
  })
  .catch(error => res.status(400).send(error))
})

module.exports = router;