<p align="center">
  <a href="" target="blank"><img src="https://1000logos.net/wp-content/uploads/2023/05/Wordle-Emblem.png" width="200" alt="Nest Logo" /></a>
</p>

Wordle APIEste es un proyecto de prueba técnica que utiliza Node.js, TypeScript, TypeORM y PostgreSQL. A continuación, se describen los endpoints disponibles:

1. Registro de usuario- POST /auth/signup
    - Crea un nuevo usuario con los siguientes datos:
```
{
    "email": "email@gmail.com",
    "password": "123"
}
```
2. Inicio de sesión- POST /auth/signin
    - Inicia sesión con los siguientes datos:
```
{
    "email": "email@gmail.com",
    "password": "123"
}
```
3. Rutas protegidas por token o cookies-

- POST /wordle/play
- Juega al juego Wordle enviando una palabra:
```
{
    "user_word": "arpen"
}
```
- GET /wordle/amount
    - Obtiene la cantidad de partidas jugadas.
- GET /wordle/top
    - Obtiene el ranking de los mejores jugadores.
- GET /wordle/match
    - Obtiene las partidas que contiene la palabra mas ranqueada.
 

 Archivo Para cliente postma /doc/wordleAPI.postman_collection.json
