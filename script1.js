//A.MOVIE CLASS
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(arr) {
        let pgArray = arr.filter((movie) => movie.rating == "PG");
        return pgArray;
    }
}

let a = new Movie("Casino Royale", "Eon Productions", "PG13");
let b = new Movie("kaathuvakula rendu kadhal", "vignesh production", "PG");
let c = new Movie("Iron Man", "Marvel Studios");
let d = new Movie("Orphan", "Dark Castle Entertainment", "PG13");
let e = new Movie("Cars", "Pixar", "G");

console.log(Movie.getPG([a, b, c, d, e]));

//OUTPUT:
/*
[
  Movie { title: 'kaathuvakula rendu kadhal', studio: 'vignesh production', rating: 'PG' },
  Movie { title: 'Iron Man', studio: 'Marvel Studios', rating: 'PG' }
]
*/