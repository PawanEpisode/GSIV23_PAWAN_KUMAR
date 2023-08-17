# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installing all the dependencies of the app in the development mode.\


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Implementation 

In the Project implementation, following dependencies are available :\

"dependencies": {\
    "@emotion/react": "^11.11.1",\
    "@emotion/styled": "^11.11.0",\
    "@mui/icons-material": "^5.14.3",\
    "@mui/material": "^5.14.4",\
    "@reduxjs/toolkit": "^1.9.5",\
    "@testing-library/jest-dom": "^5.17.0",\
    "@testing-library/react": "^13.4.0",\
    "@testing-library/user-event": "^13.5.0",\
    "react": "^18.2.0",\
    "react-dom": "^18.2.0",\
    "react-redux": "^8.1.2",\
    "react-router-dom": "^6.15.0",\
    "react-scripts": "5.0.1",\
    "redux": "^4.2.1",\
    "sass": "^1.65.1",\
    "web-vitals": "^2.1.4"\
  },\

### Overview

This app contains feature to showcase all the upcoming movies in the Home Page Section.\
User can scroll again and again to view more movies in this Home Page Section.\
User can search for a specific movie using the searchbar at the top of the page(navbar).\
User can view the details of movies by clicking on the movie card, a new movie detail page appears.\
Movie detail page consist of details about the movies like :\
a. Movie Title\
b. Rating (average vote)\
c. Year of release\
d. Length (HH:MM)\
e. Director\
f. Cast (Comma separated list of actors)\
g. Description\

User can view this application also on mobile as it is fully responsive.\

### Components & Hooks

This App used Material UI library for css styling and using the predefined components which are very easy to integrate.\

Components are :-\ 
a. Footer : Used as a footer for both pages, home page & movie detail page\
b. Loader: Used when fetching movies using API acting as a loading statement\
c. NotFound: it is used when a movie is not found\
d. Skeleton: used when data is fetching and showing the loading indicator\
e. MovieCard: used to display a single card for a single movie\
f. MovieList: Used to wrap all the movie cards\
g. Navbar: used at the top of home page section\
h. SearchComponent: used in Navbar as a movie search field\
i. SearchedMovie: used when searching any movie in searchbar, displaying in home page\


Hooks are :- \
a. usePrevious: getting the previous value of search\
b. useCurrentPath: getting the current path\
c. UseDebounce: debouncing the search value\




