const axios = require('axios');
const Dev = require("../models/Dev");
const parseStringAsArray = require('../utility/parseStringAsArray');
const { findConnections,sendMessage } = require ('../websocket')

module.exports = {
    async index(request,response){
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store (request,response){
        const {github_username, techs, latitude, longitude} = request.body;
    
        let dev = await Dev.findOne({github_username});
        if(!dev){
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);
            
            const {name = login ,avatar_url, bio} = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
            
            const sendSocketMessageTo = findConnections(
                {latitude, longitude},
                techsArray,
            )
           sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
        
        return response.json(dev);
    },

    async update (request,response){
        const {github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({github_username});

        if(dev){
            const apiResponse = await axios.get(`http://api.github.com/users/${github_username}`);
            
            const {name = login ,avatar_url, bio} = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.updateOne({
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
            return response.json({
                dev,
                message:"dev atualizado com sucesso",});
        }else{
            return response.json({
                error: "Dev nao encontrado"
            })
        }

    },
    async destroy(request,response){
        const {github_username} = request.body;
        let dev = await Dev.findOne({github_username});

        if(dev){
            dev.remove({github_username}, function(err,data)
            {
                if(!err){
                    return response.json({
                        message: "Dev deletado com sucesso"
                    })
                }
            });
            
        }else{
            return response.json({
                error: "Dev nao encontrado"
            })
        };
    },
};