<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex en Nest Js

## Modo de desarrollo
1. Tener instalado Nest CLI
```
npm i -g @nestjs/cli
```
2. Clonar este repositorio
3. Entrar en la terminal a este proyecto y ejecutar
```
yarn install
```
4. Levantar la base de datos con Docker Compose
```
docker-compose up -d
```
5. Clonar el archivo ```.env.template```, renombra la copia a ```.env``` y dentro de este remplaza los valores de las variables de entorno a tu preferencia.

6. Ejecutar el servidor en modo de desarrollo:
```
yarn start:dev
```

7. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```



## Stack usado
* Nest JS
* Typescript
* MongoDB