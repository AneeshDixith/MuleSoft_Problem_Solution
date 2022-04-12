const express = require('express');
const get_mov_details = express.Router();
const pool = require('../DB/db');


get_mov_details.get('/GetAllMovies', async (req, res) => {
    try{
        const allMovies = await pool.query(
            "SELECT * FROM MOVIES"
        );
        res.json(allMovies.rows);
        //console.log(allMovies.rows);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = get_mov_details;