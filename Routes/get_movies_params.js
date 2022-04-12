const express = require('express');
const getMovWithParams = express.Router();
const pool = require('../DB/db');

getMovWithParams.get('/actor/:actorName', async (req, res) => {

    try{
        const actorMovies = await pool.query(
            "SELECT * FROM MOVIES WHERE LEAD_ACTOR = $1", [req.params.actorName]
        );
    
        res.json(actorMovies.rows).status(200);
        //console.log(actorMovies.rows);

    }catch(err){
        res.json({message: err})
    }
});


getMovWithParams.get('/yearOfRelease/:yor', async (req, res) => {
    try{
        const yearMovies = await pool.query(
            "SELECT * FROM MOVIES WHERE YEAR_OF_RELEASE = $1", [req.params.yor]
        );

        res.json(yearMovies.rows).status(200);
        //console.log(yearMovies.rows);

    }catch(err){
        res.json({message:err});
    }
});

getMovWithParams.get('/actress/:actressName', async (req, res) => {
    try {
        const actressMovies = await pool.query(
            "SELECT * FROM MOVIES WHERE LEAD_ACTRESS = $1", [req.params.actressName]
        );
        res.json(actressMovies.rows).status(200);
        //console.log(actressMovies.rows);
    } catch (err) {
        res.json({message: err});
    }
});

getMovWithParams.get('/directorName/:dirName', async (req, res) => {
    try {
        const dirMovies = await pool.query(
            "SELECT * FROM MOVIES WHERE DIRECTOR_NAME = $1", [req.params.dirName]
        );
        res.json(dirMovies.rows).status(200);
        //console.log(dirMovies.rows);
    } catch (err) {
        res.json({message:err});
    }
});

getMovWithParams.get('/movieName/:movName', async (req, res) => {
    try {
        const movie = await pool.query(
            "SELECT * FROM MOVIES WHERE MOVIE_NAME = $1", [req.params.movName]
        );

        res.json(movie.rows).status(200);
        //console.log(movie.rows);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports = getMovWithParams;