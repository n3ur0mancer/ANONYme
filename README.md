Documentation

1. Create Postgres Database in Docker:
docker run --name am-postgres -p 15432:5432 -e POSTGRES_PASSWORD={pass} -d postgres:latest

2. Add Database to IntelliJ:
User: postgres
Password: {pass}
Database: am-postgres

3. Initialize Tables in Anony:me Project:
-Right click initialize.sql file
-Choose "Run'Initilize.sql'..."
