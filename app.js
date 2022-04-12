const express = require('express');
const BodyParser = require('body-parser');
const app = express();

const insertMoviesRoute = require('./Routes/insert_movies');
const getMoviesRoute = require('./Routes/get_mov_details');
const getMoviesWithParamsRoute = require('./Routes/get_movies_params');

app.use(BodyParser.json());

app.use('/getMovies', getMoviesRoute);
app.use('/insertMovie', insertMoviesRoute);
app.use('/movieWithParams', getMoviesWithParamsRoute);

app.listen(5050);   