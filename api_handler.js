
const searchbar = document.getElementById("searchbar");
let listaApi = [];
searchbar.addEventListener("submit", (e)=> {
    
    // Para que no recargue la página. 
    e.preventDefault();

    // Vacío el DOM de las cards que te devuelve la api
    searchMovies.innerHTML='';

    // Capturo mediante un input text la película a buscar en la api
    const buscar = document.getElementById("buscarPelicula").value;
    const buscarEnApi = buscar.replace(/ /g, "%20"); // ELimino espacios vacio y los reemplazo por %20 para hacer el request de búsqueda a la api
    
    const linkApi = `https://movie-database-alternative.p.rapidapi.com/?s=${buscarEnApi}&r=json&type=movie&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a06e3bc826mshe9d97151d5a8e49p15c7e0jsn2dab2e85cf85',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };
        
    fetch(linkApi, options)
        .then(response => response.json())
        .then( (response) => {
            showSearchResults(response.Search);
            console.log(response.Search);
            
        })
        .catch(err => console.error(err));


});

const searchMovies = document.getElementById("searchMovies");
function showSearchResults(datos) {
    let numberOfFind = 1;
    listaApi = [];
    datos.forEach(movie => {
       
        const card = document.createElement("div");
        card.classList.add("container-movies-search");
        card.id =`api${numberOfFind}`
        card.innerHTML = `
            <div class="movies__addMovie" id="AddMovieFromApi"> <i class="material-icons">add_box</i> </div>
            <div class="movies__img-container"><img class="movies__img" src=${movie.Poster} alt=""></div>
            <div class="movies__info-nav">
                <h2 class="movies__name">${movie.Title}</h2>
                <p class="movies__release">${movie.Year}</p>                        

            </div> 
        ` 
        
        searchMovies.appendChild(card);
        listaApi.push(movie);
        
        //agrego funcionalidad al boton para agregar pelicula de la api a la base de datos.
        const apiToDatabase = document.getElementById(`api${numberOfFind}`);
        apiToDatabase.addEventListener("click", () => {
                addMovieFromApi(movie.Title);

            }
        );
        numberOfFind++;
    });

}

function addMovieFromApi(movieTitle){

    listaApi.forEach(item =>{
        if (item.Title === movieTitle){
            //creamos un objeto Pelicula nuevo
            const peliculaNuevaDesdeApi = new Pelicula(item.Title, 'unknow', item.Poster, item.Year, 0, false,false); 

            //agregamos el nuevo objeto Pelicula al array de películas 
            basePeliculas.push(peliculaNuevaDesdeApi); 

            //Guardamos los datos en el localStorage: 
            localStorage.setItem("Pelicula", JSON.stringify(basePeliculas));


            // agregamos al DOM la nueva pelicula  
            movies.innerHTML = '';
            moviesToWatch.innerHTML = '';
            showMovies();
        }
        
    })
}







