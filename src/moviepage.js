let movieID = localStorage.getItem("movieID");
const API_ENDPOINT = `http://localhost:3000/movies/${movieID}`;
const movieTitle = document.getElementById("movie-title");
const movieSynopsis = document.getElementById("movie-synopsis");
const movieRating = document.getElementById("movie-rating");
const movieTrailer = document.getElementById("movie-trailer");
const movieGenre = document.getElementById("movie-genre");
const moviePoster = document.getElementById("movie-poster");
const watchlistButton = document.getElementById("watchlist-button");

console.log(movieID);

const loadMovieDetail = () => {
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.genre);
      movieTitle.innerHTML = `${data.title}`;
      movieSynopsis.innerHTML = `${data.synopsis}`;
      moviePoster.innerHTML = `
      <img class="object-cover w-full h-full" src="${data.image}" alt="${data.title}">
      `;
      movieTrailer.innerHTML = `<embed class="rounded-[20px] object-cover w-full h-full " src="${data.trailer}">`;
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
loadMovieDetail();

// fetch(API_ENDPOINT)
//   .then((response) => response.json)
//   .then((data) => {
//     console.log(data);
//   });
