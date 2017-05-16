/**
 * Created by Sergei on 16.05.2017.
 */

const siege = require('siege');

siege()
    .on(3300)
    .for(10000).times
    .get('http://localhost:3000/api/criminals')
    .attack();