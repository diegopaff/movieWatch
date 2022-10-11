const listaPeliculas = [
    {
        name: 'The Shawshank Redemption',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BMTA1MjE0Nzk4MDleQTJeQWpwZ15BbWU4MDA0NjIxMjAx._V1_.jpg',
        release: 1994,
        rank: 9,
        watch: true
    },
    {
        name: 'The Godfather',
        genre: 'Thriller',
        image: 'https://m.media-amazon.com/images/M/MV5BMGNkYzY2ZjUtODU4My00Mjc5LWEwNDAtMzUxZjcxZWJhZTcwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        release: 1972,
        rank: 10,
        watch: false
    },
    {
        name: 'The Dark Knight',
        genre: 'Action',
        image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        release: 2008,
        rank: 9,
        watch: true
    },
    {
        name: 'Schindlers List',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BZDI1MDA5NDktNjc5Ny00MmQ4LThmODYtYTg1YmFjNThiNWVhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        release: 1993,
        rank: 9,
        watch: true
    },
    {
        name: 'Top Gun: Maverick',
        genre: 'Accion',
        image: 'https://m.media-amazon.com/images/M/MV5BNTZlYTE1MDktOGRkOC00NjIwLWIyY2MtYjQxMDZlMDlmYmRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
        release: 2022,
        rank: 8,
        watch: false
    },
    /* {
        name: '',
        genre: '',
        image: '',
        release: 2022,
        rank: 8,
        watch: false
    }, */
    {
        name: 'El señor de los anillos: El retorno del rey',
        genre: 'Aventura',
        image: 'https://m.media-amazon.com/images/M/MV5BNGJjODMxZGMtOTFlNC00MjI4LThiZWUtZTU3ZGIxYzcxMTBiXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        release: 2003,
        rank: 8,
        watch: true
    },
    {
        name: 'Pulp Fiction',
        genre: 'Thriller',
        image: 'https://m.media-amazon.com/images/M/MV5BYzFkMzk5YTEtNGZjMC00ZjU0LWFlZjUtZjJjOTRiZmUxODAxXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
        release: 1994,
        rank: 8,
        watch: true
    },
    {
        name: 'Forrest Gump',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BOWNmNzdjYjQtZjIyOS00MDhiLTg4ZWUtZGZkZDE4ZDQwZTY1XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
        release: 2022,
        rank: 8,
        watch: true
    },
];

// Agrego al DOM los elementos del array
const movies = document.getElementById("movies");

const allMoviesCatalog = () => {
    for (let movie of listaPeliculas) {
        console.log(movie.name);
        movies.innerHTML += `
        <div class="container-movies">
                <div class="movies__img-container"><img class="movies__img" src=${movie.image} alt=""></div>
                <div class="movies__info">
                    <h2 class="movies__name">${movie.name}</h2>
                    <p class="movies__release">${movie.release}</p>
                </div> 
        </div>
        `
         
    }
}
allMoviesCatalog();

// Agrego a la Sección WATCHLIST

const moviesToWatch = document.getElementById("toWatch");

const toWatchMovieCatalog = () => {
    for (let movie of listaPeliculas) {
        if(!movie.watch){
            moviesToWatch.innerHTML += `
        <div class="container-movies">
                <div class="movies__img-container"><img class="movies__img" src=${movie.image} alt=""></div>
                <div class="movies__info">
                    <h2 class="movies__name">${movie.name}</h2>
                    <p class="movies__release">${movie.release}</p>
                </div> 
        </div>
        `
        }
        
         
    }
}
toWatchMovieCatalog();
