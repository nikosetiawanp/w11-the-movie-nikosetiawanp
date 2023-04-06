const API_ENDPOINT = "http://localhost:3000/";

const currentlyWatching = document.getElementById("currently-watching");
const suggestedToWatch = document.getElementById("suggested-to-watch");
const previouslyWatched = document.getElementById("previously-watched");
const watchListbutton = document.getElementById("watchlist-button");

const loadCurrentlyWatching = () => {
  fetch(API_ENDPOINT + "currentWatch")
    .then((response) => response.json())
    .then((data) => {
      currentlyWatching.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        currentlyWatching.innerHTML += `
        <a
        class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
        href="#"
        ><img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${data[i].image}"
          alt="${data[i]}"
      />
      <p
      class="text-white/0 hover:text-white hover:bg-black/70 text-5xl font-bold absolute top-0 flex justify-center items-center w-[100%] h-[100%]"
      id ="${data[i].id}"
      onclick="goToMovieDetail(this)"
    >
      ${data[i].rating * 10}%
    </p>
      </a>
        `;
      }
    });
};
loadCurrentlyWatching();

const loadPreviouslyWatched = () => {
  fetch(API_ENDPOINT + "isPrevious")
    .then((response) => response.json())
    .then((data) => {
      previouslyWatched.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        previouslyWatched.innerHTML += `
        <a
        class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
        href="#"
        ><img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${data[i].image}"
          alt="${data[i]}"
      />
      <p
      class="text-white/0 hover:text-white hover:bg-black/70 text-5xl font-bold absolute top-0 flex justify-center items-center w-[100%] h-[100%]"
      id ="${data[i].id}"
      onclick="goToMovieDetail(this)"
      >
      ${data[i].rating * 10}%
    </p>
      </a>
          `;
      }
    });
};
loadPreviouslyWatched();

const loadSuggestedToWatch = () => {
  fetch(API_ENDPOINT + "isSuggested")
    .then((response) => response.json())
    .then((data) => {
      suggestedToWatch.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        suggestedToWatch.innerHTML += `
        <a
        class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
        href="#"
        ><img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${data[i].image}"
          alt="${data[i]}"
      />
      <p
      class="text-white/0 hover:text-white hover:bg-black/70 text-5xl font-bold absolute top-0 flex justify-center items-center w-[100%] h-[100%]"
      id ="${data[i].id}"
      onclick="goToMovieDetail(this)"
      >
      ${data[i].rating * 10}%
    </p>
      </a>
            `;
      }
    });
};
loadSuggestedToWatch();

// Save movie detail to localstorage and redirect
let goToMovieDetail = (e) => {
  const movieID = e.getAttribute("id");
  localStorage.setItem("movieID", `${movieID}`);
  window.location.href = "./moviepage.html";
};

let goToWatchList = () => {
  window.location.href = "./moviepage.html";
};
