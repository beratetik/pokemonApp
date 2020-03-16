# Pokemon App

You can start with this URL => [Pokemon App](https://pokemon-app-33592.firebaseapp.com/pokemon)

## Installation

- [asd](npm install)
- npm start

## npm commands

`npm run start:dev`

- Starts development server with webpack configuration for the development side
  - It's able to see the logs from redux states it's running redux-logger

`npm start`

- Starts the project with production configuration

`npm run build:prod`

- Cleans the dist folder & Creates the project bundle

`npm run clean`

- Cleans the dist folder

`npm run lint`

- Runs linter for all js|x files. You can see the eslint configuration on .eslintrc file

`lint-staged`

- Runs Auto-linting & prettier before pushing the commit(s)

`npm test`

- Watches jest on .test.js files

`npm run test:watch`

- Runs jest with user selected mode(CLI)

`npm run test:coverage`

- Shows the error and file coverage

### Additional Improvements that would be good

- Lazy load for images
- Infinite scroll
- Pagination
- Animation

### Known Bugs

- Browser back button is not working when the pokemons/:id page

### Additional Explanation

I had no time to write unit test code. I just started to write testing code today but I don't have enough time to complete. and also I don't have enough knowledge about jest and & enzym packages. I must do more practice about this testing case. Also I don't have enough knowledge about Docker, so I didn't apply docker image. I used firebase to deploy the project.

Thanks,
Berat

![Pokemon](https://static.giantbomb.com/uploads/original/0/1481/2897229-9939923796-latest)
