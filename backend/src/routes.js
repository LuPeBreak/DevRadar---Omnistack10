const { Router } = require('express');
const DevController = require("./controllers/DevController")
const SearchController = require("./controllers/SearchController")


const routes = Router();
//index,show,store,update,destroy 
//devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );
routes.put('/devs', DevController.update );
routes.delete('/devs', DevController.destroy );

//search
routes.get('/search', SearchController.index);

module.exports = routes;