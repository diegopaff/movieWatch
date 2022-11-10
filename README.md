# movieWatch

El proyecto se trata de una  watchlist de películas, dónde se puede agregar películas y  marcar si la viste o si la queres ver , también se pueden agregar a una playlist de favoritas y darles un ranking personal a cada una.

Repo:
https://github.com/diegopaff/movieWatch

Deployment:
https://diegopaff.github.io/movieWatch/

Funcionalidad:

Al principio se carga la página con una lista de películas inicial que viene incluida en el archivo listaPelículas.js, la cual inmediatamente se guarda en el local storage donde a partir de ese momento van a estar guardadas las películas.


- Hay 3 listas de películas 
    - Películas para ver: donde se guardan las películas que quiero ver.
    - Películas ya vistas: un catalogo con todas las películas vistas.
    - Películas Favoritas: cuando ya viste una película la podes agregar a favoritas y se muestra en una lista al costado.

- Se pueden agregar películas nuevas de dos maneras.
    - Mediante una Api: En el buscador de arriba del todo puedo buscar la película que quiero y hacer en el boton + para agregarla a la base de datos.
    - De forma Manual: En la parte inferior de la página hay un formulario para cargar una película nueva. 


- Dentro de las películas ya agregadas se interactúa de la siguiente manera:

    - Clic en el icono OJO -> Se agrega una pelicula no vista a Ya vista o viceversa si ya esta vista. (solo aparece este ícono en seccíon para ver)
    - Clic en el icono CORAZON -> Se agrega la película a la lista de favoritos, mostrada a la derecha de la pantalla. Si se apreta cuando ya esta activo elimina a dicha película de la lista de favoritos.
    - Clic en las estrellas -> Las estrellas representan un ranking que va de 1 a 5, al hacer clic en la estrella correspondiente al ranking que se le quiere asignar se modifica en la base de datos y se actualiza el dom. 


