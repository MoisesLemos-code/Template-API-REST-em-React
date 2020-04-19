const express = require('express');

const FerramentaController = require('./controllers/FerramentaController');

const routes = express.Router();

routes.get("/ferramenta/:id", FerramentaController.index);
routes.get("/ferramenta/list/", FerramentaController.list);
routes.post("/ferramenta/create/", FerramentaController.post);
routes.put("/ferramenta/update/:id", FerramentaController.update);
routes.delete("/ferramenta/delete/:id", FerramentaController.delete);

module.exports = routes;