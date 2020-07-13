# Documentation

__1. Create Postgres Database in Docker:__
```
docker run --name anonyme -p 15432:5432 -e POSTGRES_PASSWORD={pass} -d postgres:latest
```

__2. Add Database to IntelliJ:__
* User: postgres
* Password: {pass}
* Database: anonyme

__3. Initialize Tables in Anony:me Project:__
* Right click initialize.sql file
* Choose "Run'Initilize.sql'..."

__3. How to use:__
Viewport width: around 415px
-> open up developer tools in browser and adjust window width.
