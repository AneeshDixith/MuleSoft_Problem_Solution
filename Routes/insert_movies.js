const express = require('express');
const insertMovies = express.Router();
const pool = require('../DB/db');

insertMovies.post('/addMovie', async (req, res) => {

    try {
        const newMovie = {
            movName : req.body.movName,
            leadActor : req.body.leadActor,
            leadActress : req.body.leadActress,
            movYear : req.body.movYear,
            dirName : req.body.dirName
        }

        await pool.query(
            "INSERT INTO MOVIES(MOVIE_NAME, LEAD_ACTOR, LEAD_ACTRESS, YEAR_OF_RELEASE, DIRECTOR_NAME) VALUES ($1, $2, $3, $4, $5) RETURNING *", [newMovie.movName, newMovie.leadActor, newMovie.leadActress, newMovie.movYear, newMovie.dirName]
        );
        res.json({message: "Movie added successfully!!!"});
    }catch(err){
        res.json({message:err});
    }
});

module.exports = insertMovies;