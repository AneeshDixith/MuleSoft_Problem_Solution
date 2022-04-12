-- NOTE: This file is just for reference. The tables are to be created using the below queries on the local system.
--       After creating tables go to db.js file and correct the database details as per the local system.

-- Creating Movies table

CREATE TABLE MOVIES(
    MOV_ID SERIAL PRIMARY KEY,
    MOVIE_NAME VARCHAR(50),
    LEAD_ACTOR VARCHAR(25),
    LEAD_ACTRESS VARCHAR(25),
    YEAR_OF_RELEASE INT,
    DIRECTOR_NAME VARCHAR(25)
);


-- Retreiving Details


--All movies
SELECT * FROM MOVIES;

--Movies of a specific director
SELECT * FROM MOVIES WHERE DIRECTOR_NAME = $1;
-- $1 will be replaced with a value as provided

--Movies of a specific year of release
SELECT * FROM MOVIES WHERE YEAR_OF_RELEASE = $1;
-- $1 will be replaced with a value as provided

--Movies of a specific actor
SELECT * FROM MOVIES WHERE LEAD_ACTOR = $1;
-- $1 will be replaced with a value as provided

--Movies of a specific actress
SELECT * FROM MOVIES WHERE LEAD_ACTRESS = $1;
-- $1 will be replaced with a value as provided

--Movie details of a specific movie
SELECT * FROM MOVIES WHERE MOVIE_NAME = $1
-- $1 will be replaced with a value as provided


