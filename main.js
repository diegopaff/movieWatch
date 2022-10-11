
// Creamos constructor de Pelicula
class Pelicula {
    constructor(name,genre,image,release,rank,watch){
        this.name = name;
        this.genre = genre;
        this.image = image;
        this.release = release;
        this.rank = rank;
        this.watch = watch;
    }

    // método para cambiar el estado de no vista a vista (Todavia no tiene funcionalidad)
/*     isWatch() {
        if(!this.watch){
            this.watch = true;
        } */
}



// Funcion para agregar manualmente un a nueva pelicula
function agregarPeliculaManual(){
    const name = prompt("Nombre de Pelicula: ");
    const genre = prompt("Genero: ");
    const image = prompt("Copie link de Imagen de Película: ");
    const release = parseInt(prompt("Fecha de salida: "));
    const rank = parseInt(prompt("Ranking IMDB: "));
    const isWatch = prompt("Ya la viste? ingrese Y / N: ");
    const watch = false;
    if (isWatch.toUpperCase === "Y"){
        watch = true;
    }
    //creamos un objeto Pelicula nuevo
    const peliculaNueva = new Pelicula(name, genre, image, release, rank, watch);
    listaPeliculas.push(peliculaNueva); // lo agreamos al array listaPeliculas
    
    // agregamos al DOM la nueva pelicula
    if (!watch){ //Si la pelicula no esta vista se agrega tambien a la seccion para ver
        moviesToWatch.innerHTML = "";
        toWatchMovieCatalog();
    }
    movies.innerHTML = '';
    allMoviesCatalog(); 
}

// 
alert("Bienvenidos al Watchlist de Peliculas: ");

 do{
    let accion = prompt("Menu de fuciones: \n 1) Ver lista de todas las peliculas \n 2) Lista de peliculas sin ver \n 3) Agregar Nueva Pelicula");

    if (accion == '1'){
        listaPeliculas.forEach(element => console.log(element));
        
    }else if(accion == '2'){
        listaPeliculas.forEach(element => {
         if (!element.watch){
            console.log(element);
         };
        }
        )       
    }else if(accion == '3'){
        console.log(agregarPeliculaManual());
    }
    
} while (confirm("Desea continuar?"));







