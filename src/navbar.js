const API_ENDPOINT_MOVIES = `http://localhost:3000/movies/`;

const searchButton = document.getElementById("search-button");
const plusButton = document.getElementById("plus-button");
const wishlistButon = document.getElementById("wishlist-button");

const searchMenu = document.getElementById("search-menu");
const searchResult = document.getElementById("search-result");
const searchInput = document.getElementById("search-input");
const searchInputMobile = document.getElementById("search-input-mobile");

const revealSearchMenu = () => {
  // reveal
  searchMenu.classList.replace("hidden", "flex");
  searchResult.classList.replace("hidden", "grid");
  plusButton.classList.replace("hidden", "flex");
  //   hide
  searchButton.classList.replace("flex", "hidden");
  wishlistButon.classList.replace("flex", "hidden");
};
const closeSearchMenu = () => {
  // hide
  searchMenu.classList.replace("flex", "hidden");
  searchResult.classList.replace("grid", "hidden");
  plusButton.classList.replace("flex", "hidden");
  //   reveal
  searchButton.classList.replace("hidden", "flex");
  wishlistButon.classList.replace("hidden", "flex");
};

const searchMovie = () => {
  searchMenu.classList.replace("hidden", "flex");
  searchResult.classList.replace("hidden", "flex");

  fetch(API_ENDPOINT_MOVIES)
    .then((response) => response.json())
    .then((data) => {
      let filteredResult = data.filter((e) =>
        e.title.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      searchResult.innerHTML = "";

      for (let i = 0; i < filteredResult.length; i++) {
        if (searchInput.value === "") {
          searchMenu.classList.replace("flex", "hidden");
          searchResult.classList.replace("grid", "hidden");
        } else {
          searchResult.innerHTML += `
        <a
        class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
        href="#"
        ><img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${filteredResult[i].image}"
          alt="${filteredResult[i]}"
        />
        <p
        class="text-white/0 hover:text-white hover:bg-black/70 text-5xl font-bold absolute top-0 flex justify-center items-center w-[100%] h-[100%]"
        id ="${filteredResult[i].id}"
        onclick="goToMovieDetail(this)"
        >${filteredResult[i].rating * 10}% </p>
        </a>
        `;
        }
      }
    });
};

const searchMovieMobile = () => {
  searchMenu.classList.replace("hidden", "flex");
  searchResult.classList.replace("hidden", "flex");

  fetch(API_ENDPOINT_MOVIES)
    .then((response) => response.json())
    .then((data) => {
      let filteredResult = data.filter((e) =>
        e.title.toLowerCase().includes(searchInputMobile.value.toLowerCase())
      );
      searchResult.innerHTML = "";

      for (let i = 0; i < filteredResult.length; i++) {
        if (searchInputMobile.value === "") {
          // searchMenu.classList.replace("flex", "hidden");
          searchResult.classList.replace("flex", "hidden");
        } else {
          searchResult.innerHTML += `
        <a
        class="min-w-[155px] min-h-[235px] max-w-[155px] rounded-[20px] relative overflow-hidden"
        href="#"
        ><img
          class="w-[100%] object-cover h-[235px] rounded-[20px]"
          src="${filteredResult[i].image}"
          alt="${filteredResult[i]}"
        />
        <p
        class="text-white/0 hover:text-white hover:bg-black/70 text-5xl font-bold absolute top-0 flex justify-center items-center w-[100%] h-[100%]"
        id ="${filteredResult[i].id}"
        onclick="goToMovieDetail(this)"
        >${filteredResult[i].rating * 10}% </p>
        </a>
        `;
        }
      }
    });
};

searchButton.addEventListener("click", revealSearchMenu);
plusButton.addEventListener("click", closeSearchMenu);
searchInput.addEventListener("input", searchMovie);
searchInputMobile.addEventListener("input", searchMovieMobile);
