# jokes

![](https://img.shields.io/badge/version-1.0.0-blue.svg)<br>
This is a website that displays humorous quotes at the click of a button. It is built using Vue and Node. All quotes are from Sir Terry Pratchett, as a small tribute to his legacy as a writer of fantasy and humor.

> _If cats looked like frogs we'd realize what nasty, cruel little bastards they are. Style. That's what people remember._

## Building instructions

### All the project

To build and run the entire project using Docker, use:

```shell
docker-compose  up  --build
```

### Only backend

To build and run only the backend:

```shell
docker  build  -t  jokes-back  ./backend
docker  run  -p  3000:3000  jokes-back
```

Without Docker:
```shell
npm run start
```

### Only frontend

To build and run only the backend:

```shell
docker  build  -t  jokes-front  ./frontend
docker  run  -p  8080:80  jokes-front
```

Without Docker:
```shell
npm install
npm run serve
```

## Backend ([Node.js](https://nodejs.org/)) & API (REST)

The backend is a Node.js application that exposes a GET request that returns a JSON file containing a quote in the quote property.
Example:

```json
{
  "quote": "Stories of imagination tend to upset those without one."
}
```

Quotes are stored in a .txt file inside the project. They are never repeated until all have been sent.
Once exhausted, they are sent again in a random order.
Quotes are not loaded at the beginning when the server starts, they are loaded only when needed. If they are exhausted, they are not loaded again util required.

## Frontend ([Vue.js](https://vuejs.org/))

The frontend is a Vue.js application that displays the quotes retrieved from the backend.

The user can click a button to fetch a new quote dynamically. The text on the button is also a set of questions with the same style and wit as Terry Pratchett. Each time the button is pressed, the question text is changed to one from a predefined list of texts. They can repeat, but not consecutively.

## Lint
To maintain code quality and consistency, we use ESLint in both the frontend and backend projects. The configuration files for each project are located in the root of their respective directories. To run the linter, use the following command:
```shell
npm run lint
```

## Image Credits

The background image used on the website is sourced from [Steve James](https://www.flickr.com/photos/steeljam/) on [Flickr](https://www.flickr.com) and is licensed under [Creative Commons Non Comercial No Derivs](https://creativecommons.org/licenses/by-nc-nd/2.0/). All rights to the image belong to the original photographer. You can view the image and the licensing details [here](https://www.flickr.com/photos/steeljam/8714898402).
