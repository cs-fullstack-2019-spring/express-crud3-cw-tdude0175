var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PokemonSchema = new Schema(
    {
        pokedexNumber: Number,
        name: String,
        hp:Number,
        attack: Number,
        defense: Number,
        speed: Number,
        specialAttack: Number,
        specialDefense: Number,
        type: String,
    }
);


module.exports = mongoose.model('Pokemon',PokemonSchema);