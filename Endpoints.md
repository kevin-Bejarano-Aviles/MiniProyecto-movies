# Documentacion de endpoints


### URL: 'http://localhost:8000/movies'
- Metodo http: 'GET'
- Muestra todas las peliculas

### URL: 'http://localhost:8000/movies/detail/:id'
- Metodo http: 'GET'
- Muestra una sola pelicula con sus relaciones de generos y actores en base al id pasado por la url
- El params ':id' es el id de la pelicula

### URL: 'http://localhost:8000/movies/create'
- Metodo http: 'POST'
- Crea una pelicula
- Ejemplo del body en formato json
```json
{
    "title":"Example movie tittle",
    "rating":4.2,
    "awards":2,
    "length":120,
    "release_date":"YYYY-MM-DD",
    "genre_id":1
}
```


### URL: 'http://localhost:8000/movies/edit/:id'
- Metodo http: 'PUT'
- Modifica una pelicula en base al id pasado por el url
- El params ':id' es el id de la pelicula
- Ejemplo del body en formato json
```json
{
    "title":"Example movie tittle",
    "rating":4.2,
    "awards":2,
    "length":120,
    "release_date":"YYYY-MM-DD",
    "genre_id":1
}
```
### URL: 'http://localhost:8000/movies/delete/:id'
- Metodo http: 'DELETE'
- Elimina una pelicula en base al id pasado por el url
- El params ':id' es el id de la pelicula


### URL: 'http://localhost:8000/movies/addActor'
- Metodo http: 'POST'
- Añade un actor a un pelicula
- Ejemplo del body en formato json
```json
{
    "idMovie":47,
    "idActor":49
}
```

### URL: 'http://localhost:8000/genres'
- Metodo http: 'GET'
- Muestra todos los generos

### URL: 'http://localhost:8000/genres/:id'
- Metodo http: 'GET'
- Muestra un solo genero con sus detalles, tambien muestra que peliculas tienen este genero. El genero es elegido en base al id pasado por la url
- El params ':id' es el id del genero

### URL: 'http://localhost:8000/actors'
- Metodo http: 'GET'
- Trae a todos los actores

### URL: 'http://localhost:8000/actors/:id'
- Metodo http: 'GET'
- Muestra un solo actor con sus detalles, tambien muestra que peliculas tienen este actor. El actor es elegido en base al id pasado por la url
- El params ':id' es el id del genero


