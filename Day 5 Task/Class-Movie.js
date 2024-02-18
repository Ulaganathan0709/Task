/* Class - Movie
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

Soluction:
    **** I have created a new instance of the class Movie to get pg or pg-13 movie *********
 */

class Movie {
    //a) The constructor for the Class Movie 
    //b) The constructor for the class Movie  will be the class property rating to "PG" as default
    constructor(title,studio,rating = "PG")
     {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
     }

     //c) Method get pg 
     static getPG(movieArray) 
     {
        let pgMovies = [];
        for (let movie of movieArray) 
        {
            if (movie.rating === "PG" || movie.rating === "PG-13") 
            {
                pgMovies.push(movie);
            }
        }
        return pgMovies;
    }
}
// d) Creating an instance of the class Movie
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
let avengersEndgame = new Movie("Avengers: Endgame", "Marvel Studios", "PG-13");
let titanic = new Movie("Titanic", "Paramount Pictures", "PG-13");
let jurassicWorld = new Movie("Jurassic World", "Universal Pictures", "PG");
let inception = new Movie("Inception", "Warner Bros", "PG-13");
let theDarkKnight = new Movie("The Dark Knight", "Warner Bros", "PG-13");
let theGodfather = new Movie("The Godfather", "Paramount Pictures", "R");
let pulpFiction = new Movie("Pulp Fiction", "Miramax Films", "R");
let fightClub = new Movie("Fight Club", "20th Century Fox", "R");
let theMatrix = new Movie("The Matrix", "Warner Bros", "R");
let gladiator = new Movie("Gladiator", "DreamWorks", "R");

// Creating arrays for PG-13 and R rated movies
let pg13Movies = [ casinoRoyale,avengersEndgame, titanic, jurassicWorld, inception, theDarkKnight];
let rRatedMovies = [theGodfather, pulpFiction, fightClub, theMatrix, gladiator];

//  getPG movies
let pgMovies = Movie.getPG(pg13Movies.concat(rRatedMovies));
console.log("PG Movies from both lists:", pgMovies);