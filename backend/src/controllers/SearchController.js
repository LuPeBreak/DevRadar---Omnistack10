const axios = require('axios');
const Dev = require("../models/Dev");
const parseStringAsArray = require('../utility/parseStringAsArray');


module.exports = {
    //busca devs por tecnologia a partir de uma localizaçao ( lat, long)
    async index(request,response){
        const {techs, latitude, longitude} = request.query        

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in:techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates:[longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        })

        return response.json(devs);
    },
}