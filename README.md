# About the project

This project is a proof of concept to demonstrate an app with create, read, update, delete (CRUD) functionality.

The idea is to allow users to record their wellbeing in a simple way, and then to show trends.

This project is in its early stages but is functional!

## Built with

### Backend

- JavaScript
- Node
- Express

### Frontend

- JavaScript
- React
- Tailwind CSS
- Vite

### Other tools worthy of mention

- Docker
- Git
- GitHub

## Getting started

### Starting the backend

In the `server` folder, run `npm i` to install dependencies.

Use `npm run km` to kill any MongoDB instances that may be running.

Download the `mongod` file and place it in `server/data`, or modify the `sm` script to use your global instance of MongoDB ([installation instructions](https://www.mongodb.com/docs/manual/installation/)).

Use `npm run sm` to start.

Open up a second terminal and run `npm run create-database`. Then run `npm run nodemon` which will initialise the Express instance with a watch script.

### Starting the frontend

Open up a third terminal before proceeding.

In the `client` folder, run `npm i` to install dependencies.

Run `npm run host` which will make the Vite server available over the local network.

You should now see the `/login` page and be able to make a user account.

## Roadmap

Please refer to the project's [Kanban board](https://github.com/users/parradam/projects/1) to see where I'm up to!

## Contributing

Although this project began as a portfolio project, I would be happy to work with others on contributing. Just raise an issue, or comment on one, to get started!
