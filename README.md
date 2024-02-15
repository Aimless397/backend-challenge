# Backend challenge

## Built With

This project was built using these main technologies

* [Express](https://expressjs.com/es/)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [JWT](https://jwt.io/)
* [TypeScript](https://www.typescriptlang.org/)

## Setup

#### 1. Clone this repository

```
https://github.com/Aimless397/backend-challenge.git
```

#### 2. Install the dependencies

```
yarn install
```

#### 3. Create .env file and use the following environment variables

```
# SERVER
PORT=

# DATABASE
DB_USER=
DB_NAME=
DB_HOST=
DB_PASSWORD=
DB_PORT=

# JWT
TOKEN_SECRET=
```

#### 4. Create a new database in Postgres called *'backend-challenge'* or the `DB_NAME>` you prefer on the `.env` file

#### 5. Run the project

```
yarn dev
```

## Test the API

#### 1. You can use Postman, Insomnia or another HTTP client to execute the following requests

```
# (POST) localhost:3000/api/register

Body:
{
    "name": "name-test",
    "password": "password-test",
    "email": "email-test",
    "role": "admin" | "user"
}

# (POST) localhost:3000/api/login

Body:
{
    "email": "email-test",
    "password": "password-test"
}

# (GET) localhost:3000/api/protected-route

Header:
{
    key: authorization-token,
    value: login_endpoint_response_token
}

```



