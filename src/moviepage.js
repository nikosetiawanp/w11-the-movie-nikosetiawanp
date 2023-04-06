let movieID = localStorage.getItem("movieID");
const API_ENDPOINT = `http://localhost:3000/movies/${movieID}`;
const movieTitle = document.getElementById("movie-title");
const movieSynopsis = document.getElementById("movie-synopsis");
const movieRating = document.getElementById("movie-rating");
const movieTrailer = document.getElementById("movie-trailer");
const movieGenre = document.getElementById("movie-genre");
const moviePoster = document.getElementById("movie-poster");
const watchlistButton = document.getElementById("watchlist-button");
const addToWatchListButton = document.getElementById("add-to-watchlist-button");

const showMovieDetail = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      movieTitle.innerHTML = `${data.title}`;
      movieSynopsis.innerHTML = `${data.synopsis}`;
      moviePoster.innerHTML = `
      <img class="object-cover w-full h-full" src="${data.image}" alt="${data.title}">
      `;
      movieTrailer.innerHTML = `<embed class="rounded-[20px] aspect-video w-full h-full" src="${data.trailer}">`;
      movieRating.innerHTML = `⭐ ${data.rating}/10`;

      for (let i = 0; i < data.genre.length; i++) {
        movieGenre.innerHTML += `
        <span
        class="rounded-full w-24 text-lg text-center font-medium border border-black"
        >${data.genre[i]}</span>
        `;
      }
    });
};
showMovieDetail();

const loadToLocalStorage = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("movieTitle", `${data.title}`); //title
      localStorage.setItem("movieImage", `${data.image}`); //image
      localStorage.setItem("movieSynopsis", `${data.synopsis}`); //synopsis
      localStorage.setItem("movieGenre", `${data.genre}`); //genre
      localStorage.setItem("movieProduction", `${data.production}`);
      localStorage.setItem("movieTrailer", `${data.trailer}`); //trailer
      localStorage.setItem("movieRating", `${data.rating}`); //rating
      localStorage.setItem("movieYear", `${data.year}`); //year
    });
};
loadToLocalStorage();

const addToWatchlist = () => {
  fetch("http://localhost:3000/watchlist", {
    method: "POST",
    body: JSON.stringify({
      id: movieID,
      title: localStorage.getItem("movieTitle"),
      image: localStorage.getItem("movieImage"),
      synopsis: localStorage.getItem("movieSynopsis"),
      genre: localStorage.getItem("movieGenre"),
      production: localStorage.getItem("movieProduction"),
      trailer: localStorage.getItem("movieTrailer"),
      rating: localStorage.getItem("movieRating"),
      year: localStorage.getItem("movieYear"),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => alert("Successfully added to watchlist"));
};
addToWatchListButton.addEventListener("click", addToWatchlist);
