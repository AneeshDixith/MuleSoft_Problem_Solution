# MuleSoft Problem Solution

The Problem was to build basic API's to get, update and write data to a database.

Database used : PostgeSQL
Host Language : JavaScript (node.js, express.js)
Connection driver : pg

## How to run

1. First install node from `https://nodejs.org/en/download/`

2. Next install PostgreSQL from `https://www.postgresql.org/download/`

3. Clone this repository

4. Open terminal in the repository location and run `npm install`

5. Open command prompt (in the repository location) and login to user (postgres) using `psql -U postgres`

6. Then create a database using `CREATE DATABSE DB_NAME` command.

7. Next open *db.sql* file (DB folder) and create table as in the file on the command prompt (can also use pgAdmin).

8. Next go to *db.js* file in the DB folder and change the properties according to your system, i.e., database details for user, password and database_name accordingly.

9. Use `npm start` command to start the server.

10. To insert movies to the database use ThunderClient(VS Code extension) or Postman.

11. To view the movies already present in the database you can use a browser, ThunderClient or Postman by using the below links as the URL.

## URL's for Inserting and Retrieving Operations.

1. `http://localhost:5050/getMovies/getAllMovies`  -> For retrieving all the movies. (GET request)

2. `http://localhost:5050/insertMovie/addMovie`    -> For adding a new movie to the database.

    NOTE: To add a movie using TC or Postman you must use a *POST* request along with a body of the below foramt.
    This is nesessary because there is no front end to do it at the moment, and hence is to be done manually.

    Body Format: {
                    "movName" : "Name to be added",
                    "leadActor" : "Actor of the movie",
                    "leadActress" : "Actress of the movie",
                    "movYear" : "Release year of the movie",
                    "dirName" : "Movie Director Name"
                 }

3. `http://localhost:5050/movieWithParams/actor/${actorName}` -> For Retrieving all movies of a actor.
    
    NOTE: Replace ${actorName} with The actual actor name.

4. `http://localhost:5050/movieWithParams/actress/${actressName}`  -> For retrieving all movies of a actress. Replace the actress name similar to actor name.

5. `http://localhost:5050/movieWithParams/yearOfRelease/${yor}`   -> For retrieving all movies of a particular year.

6. `http://localhost:5050/movieWithParams/directorName/${dirName}` -> For retrieving all movies of a director.

7. `http://localhost:5050/movieWithParams/movieName/${movName}`  -> For retrieving details of a specific movie.
