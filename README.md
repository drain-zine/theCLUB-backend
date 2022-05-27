# Summary
This is subproject is the backend for theCLUB's technical test. It is built with TypeScript, Express, Prima and Postgres, and tested with Jest.


## Setup
1. run `npm ci` to install dependencies
2. To setup the database, make sure docker is installed. 
  - With docker installed run: `docker run --rm --name postgres-playlists -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres:13-alpine`
3. To seed the database run: `npx prisma migrate dev --name init`, ignore the bad exit code I didn't have time to debug this (the database still seeds + creates succsessfully).
4. The .env in this repo sets the port of the server and the details of the postgres database.

## Commands
```
npm run dev - runs the dev server
npm run test - run the server tests
```
## Basic architecture
1. Data is stored in the postgres database.
2. On initial page load this is fetched by the frontend and cached in redux.
3. All requests to create a playist, add a track etc are sent to the backend which use the prisma ORM to operate on the database.
4. A response is sent to the frontend which updates its cache accordingly.

## TODOS
Here is a list of todos across the whole project that I would address if I had more time. I worked on this Thursday evening + night, and a bit on Friday morning - ironically I was at a gig Wednesday.

1. Higher test coverage - I have only included a few sample tests so far, and I would opt to increase the test coverage first thing. In the front end I would
also test UI elements with react-testing-library. I failed to get prisma mocking working as well.
2. Error handling - I would expand the endpoints to send more verbose errors (whether database or server related), and ingest those errors in redux appropriately.
3. Refactoring back end to dependency inject prisma
4. Adding album covers
5. Adding some nice transition animations with framer-motion and some general UI improvements :)
6. Adding more songs with the database seed + fixing the dodgy exit code.

