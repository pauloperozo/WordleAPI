<p align="center">
  <a href="" target="blank"><img src="https://1000logos.net/wp-content/uploads/2023/05/Wordle-Emblem.png" width="200" alt="Nest Logo" /></a>
</p>

Wordle API: Este es un proyecto de prueba técnica que utiliza Node.js, TypeScript, TypeORM y PostgreSQL. A continuación, se describen los endpoints disponibles:

## Registro de usuario- POST /auth/signup
- Crea un nuevo usuario con los siguientes datos:
```
{
    "email": "email@gmail.com",
    "password": "123"
}
```
## Inicio de sesión- POST /auth/signin
- Inicia sesión con los siguientes datos:
```
{
    "email": "email@gmail.com",
    "password": "123"
}
```

## POST /wordle/play ( Protected token | cookies) 
- Juega al juego Wordle enviando una palabra:
```
{
    "user_word": "arpen"
}
```

## GET /wordle/amount ( Protected token | cookies) 
- Obtiene la cantidad de partidas jugadas.

## GET /wordle/top ( Protected token | cookies) 
- Obtiene el ranking de los mejores jugadores.

## GET /wordle/match ( Protected token | cookies) 
- Obtiene las partidas que contiene la palabra mas ranqueada.
 
## collections cliente postman:
- /doc/wordleAPI.postman_collection.json
