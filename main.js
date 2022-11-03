
//---------------Base de Peliculas------------------
let basePeliculas = [];
let favoriteMovies = [];
// verificamos si hay guardado en el local Storage una base 
if(JSON.parse(localStorage.getItem("Pelicula") != null)){
    basePeliculas = JSON.parse(localStorage.getItem("Pelicula"));
}else{//sino creamos agregamos la predefinida a la base y la subimos al Local Storage
    basePeliculas = listaPeliculas;
    localStorage.setItem("Pelicula", JSON.stringify(basePeliculas));
}


//---------------Peliculas Favoritas------------------



// Agrego al DOM los elementos del array basePeliculas
const movies = document.getElementById("movies");
const moviesToWatch = document.getElementById("toWatch");



const showMovies = () => {
    basePeliculas.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("container-movies");

        // Si la película ya se vio, se puede agregar a favoritos y modificamos el color del boton
        let isFavorite = 'hidden__favorite';
        let titleFavorite = '';
        let visibility = 'visibility_off';
        let isWatched = 'non__watched';
        if(movie.watch){
            isWatched = ' non__watched yes__watched';
            visibility = 'visibility';
            if(movie.favorite === true){
                isFavorite = 'non__favorite favorite';
                titleFavorite = 'Quitar de favoritos'
                // agregamos la pelicula a la playlist favorite Movies
                favoriteMovies.push(movie); 
            }else{
                isFavorite = 'non__favorite';
                titleFavorite = 'Agregar a favoritos'
            }   
        // si la pelicula no se vio se puede agregar a vistas haciendo clic en el ojo    
        }
         
        
        card.innerHTML = `
            <div class="${isWatched}" id="watch${movie.id}" title="${titleFavorite}"> <i class="material-icons">${visibility}</i> </div>
            <div class="${isFavorite}" id="fav${movie.id}" title="${titleFavorite}"> <i class="material-icons">favorite</i> </div>
            <div class="movies__img-container"><img class="movies__img" src=${movie.image} alt=""></div>
            <div class="movies__info">
                <h2 class="movies__name">${movie.name}</h2>
                <p class="movies__release">${movie.release}</p>
                <p class="movies__genre">${movie.genre}</p>
                    

            </div> 
        `
        //Se agrega a la seccion correspondiente segun si se vio o No
        if(!movie.watch){
           
            moviesToWatch.appendChild(card);

        }else{

            movies.appendChild(card);
        }

        //Cuando se hace clic en el corazon se agrega a la lista favoriteMovies y se cambia el estilo del boton
        const toFavorite = document.getElementById(`fav${movie.id}`);
        toFavorite.addEventListener("click", () => {
            toFavorite.classList.toggle("favorite");
            addToFavorite(movie.id);
            playlist.innerHTML='';
            showFavorites();
            Toastify({
                text: "Se agregó a favoritos",
                duration: 3000,
                gravity: "bottom",
                position: "right", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                  },
                }).showToast();
            }
        );

        //Cuando se hace clic en el ojo se agrega a la seccion ya vistas y se cambia el estilo del ojo
        const toWatched = document.getElementById(`watch${movie.id}`);
        toWatched.addEventListener("click", () => {
            toWatched.classList.toggle("yes__watched");
            addToWatched(movie.id);
            
        });

        
    }); 
}
showMovies();
// funcion para agregar película a favorito
const addToWatched = (id) => {
    const movie = basePeliculas.find((movie) => movie.id === id);
    if(movie.watch){
        movie.watch = false; //saco pelicula de vistas
        Toastify({
            text: "Se agregó a Película vista",
            duration: 3000,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();  
    }else{
        movie.watch = true; // agrego pelicula a la lista
        Toastify({
            text: "Se agrego a Película para ver", 
            duration: 3000,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
    }
    movies.innerHTML = '';
    moviesToWatch.innerHTML = '';
    showMovies();
    //actualizo el localStorage con los nuevos valores.
    localStorage.setItem("Pelicula", JSON.stringify(basePeliculas));   
}

// funcion para agregar película a favorito
const addToFavorite = (id) => {
    const movie = basePeliculas.find((movie) => movie.id === id);
    const movieInFavourites = favoriteMovies.find((movie) => movie.id ===id);
    if(movieInFavourites){
        movie.favorite = false; //saco pelicula de la lista
        Toastify({
            text: "Se sacó de Favoritas", 
            duration: 3000,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();    
    }else{
        movie.favorite = true; // agrego pelicula a la lista
        Toastify({
            text: "Se agregó a Favoritas", 
            duration: 3000,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
    }
    movies.innerHTML = '';
    moviesToWatch.innerHTML = '';
    favoriteMovies = []; // vacio el array de peliculas favoritas para que no se dupliquen
    showMovies();
    console.log(favoriteMovies);
    //actualizo el localStorage con los nuevos valores.
    localStorage.setItem("Pelicula", JSON.stringify(basePeliculas));   
}

// agregar al DOM la lista de favoritos 
const playlist = document.getElementById("playlist");
const showFavorites = () => {
    favoriteMovies.forEach((movie) => {
        const card = document.createElement("li");
        card.classList.add("item");
        card.innerHTML = `
            <h3 class="item__title"> ${movie.name} </h3>
            <img class="item__img" src="${movie.image}" alt="${movie.name}">

        `
        playlist.appendChild(card);

});
}
showFavorites();

// Creamos constructor de Pelicula
class Pelicula {
    constructor(name,genre,image,release,rank,watch,favorite){
        this.id = (basePeliculas.length + 1);
        this.name = name;
        this.genre = genre;
        this.image = image;
        this.release = release;
        this.rank = rank;
        this.watch = watch;
        this.favorite = favorite;
    }


}

// Agregamos nueva pelìcula con el formulario
const idFormulario = document.getElementById("formulario");
idFormulario.addEventListener("submit", (e)=> {
    // Para que no recargue la página. 
    e.preventDefault();

    const name = document.getElementById("name").value;
    const genre = document.getElementById("genre").value;
    const image = document.getElementById("image").value || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
    const release = document.getElementById("release").value;
    const rank = document.getElementById("rank").value;
    const isWatch = document.getElementById("watch").value;
    let watch = false;
    const favorite = false;
    //Pasamos a booleano el atributo watch
    if (isWatch == "si"){ 
        watch = true;
    }
    //creamos un objeto Pelicula nuevo
    const peliculaNueva = new Pelicula(name, genre, image, release, rank, watch,favorite);
    console.log(peliculaNueva);

    //agregamos el nuevo objeto Pelicula al array de películas 
    basePeliculas.push(peliculaNueva); 

    //Guardamos los datos en el localStorage: 
    localStorage.setItem("Pelicula", JSON.stringify(basePeliculas));


    // agregamos al DOM la nueva pelicula  
    movies.innerHTML = '';
    moviesToWatch.innerHTML = '';
    showMovies();
    

   //Limpiamos el formulario.
    idFormulario.reset();
})








