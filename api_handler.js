
const searchbar = document.getElementById("searchbar");
let listaApi = [];
searchbar.addEventListener("submit", (e)=> {
    // Para que no recargue la página. 
    e.preventDefault();

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
    datos.forEach(movie => {
       
        const card = document.createElement("div");
        card.classList.add("container-movies-search");
        card.innerHTML = `
            <div class="movies__img-container"><img class="movies__img" src=${movie.Poster} alt=""></div>
            <div class="movies__info-nav">
                <h2 class="movies__name">${movie.Title}</h2>
                <p class="movies__release">${movie.Year}</p>                        

            </div> 
        ` 
        searchMovies.appendChild(card);
        
        
    });

}










//* /* ***************Consumo de la Api***************/
/*  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a06e3bc826mshe9d97151d5a8e49p15c7e0jsn2dab2e85cf85',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};


fetch('https://movie-database-alternative.p.rapidapi.com/?s=titanic&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */


//'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1'