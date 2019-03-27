var express = require('express');
var router = express.Router();
var PokemonCollection = require('../models/PokemonSchema');

router.get('/',(req,res)=>
{
    PokemonCollection.find((error,results)=>
    {
        if(error) res.send(error);
        else
            {
                context=
                    {
                        entries:results,
                    };
                res.render('pokedex',context);
            }
    });

});

router.get('/new',(req,res)=>
{
    res.render('add_pokemon');
});

router.post('/save',(req,res)=>
{
    PokemonCollection.create(
        {
            pokedexNumber: req.body.pokedex_number,
            name: req.body.name,
            hp:req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            speed: req.body.speed,
            specialAttack: req.body.sp_atk,
            specialDefense: req.body.sp_def,
            type: req.body.type,
        },(errors)=>
        {
            if(errors) res.send(errors);
            else res.redirect('/');
        });
});

router.get('/viewOne/:id',(req,res)=>
{
    PokemonCollection.findOne({_id: req.params.id},(errors,results)=>
    {
        if(errors) res.send(errors);
        else
            {
                context=
                    {
                        entry:results
                    };
                res.render('view_pokemon',context);
            }
    });

});

router.get('/update/:number',(req,res)=>
{
    PokemonCollection.findOne({pokedexNumber:req.params.number},(error,results)=>
    {
        if(error) res.send(error);
        else
            {
                context=
                    {
                        pokemon:results
                    };
                res.render('edit_pokemon',context);
            }
    })

});

router.put('/',(req,res)=>
{
    PokemonCollection.updateOne({})
});

router.delete('/delete/:number',(req,res)=>
{
    PokemonCollection.deleteOne({pokedexNumber: req.params.number},(errors)=>
    {
        if(errors) res.send(errors);
        else
            {
                res.redirect('/');
            }
    });
});


module.exports = router;
