# CRUD: Laravel/React

Project: Simple list of tasks to do.

## Tech Stack

**Client:** React

**Server:** Laravel

## Installation

- Git clone
- CD in the corresponding directory Backend or Frontend

## Backend

- Install Composer/Laravel dependencies

```bash
  composer install
```

- Create .env file

```bash
  cp .env.example .env
```

- Edit the .env file and add your database credentials (you will need to have made a database for the project to use)
- Generate the application key

```bash
  php artisan key:generate
```

- Migrate the database

```bash
  php artisan migrate
```

## Run Server

```bash
php artisan serve
```

## Frontend

- Install Node dependencies

```bash
  npm install
```

## Deployment Frontend

To deploy this project run

```bash
  npm start
```

## Demo

https://drive.google.com/file/d/18QbuMGvL4ie2LN8CHUeetEvnx5oxGAju/view?usp=sharing
