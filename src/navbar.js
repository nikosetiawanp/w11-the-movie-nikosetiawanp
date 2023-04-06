const API_ENDPOINT_MOVIES = `http://localhost:3000/movies/`;

const searchButton = document.getElementById("search-button");
const plusButton = document.getElementById("plus-button");
const wishlistButon = document.getElementById("wishlist-button");

const searchMenu = document.getElementById("search-menu");
const searchResult = document.getElementById("search-result");
const searchInput = document.getElementById("search-input");

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
  searchResult.classList.replace("hidden", "grid");

  fetch(API_ENDPOINT_MOVIES)
    .then((response) => response.json())
    .then((data) => {
      let filteredResult = data.filter((e) =>
        e.title.toLowerCase().includes(searchInput.value.toLowerCase())
      );
      searchResult.innerHTML = "";
      for (let i = 0; i < filteredResult.length; i++) {
        searchResult.innerHTML += `
        <a
        class="bg-gray-300 min-w-[155px] min-h-[235px] rounded-[20px] overflow-hidden"
        href="#"
      ><img src="${filteredResult[i].image}" alt=""></a>
        `;
      }
    });
};

searchButton.addEventListener("click", revealSearchMenu);
searchInput.addEventListener("input", searchMovie);
plusButton.addEventListener("click", closeSearchMenu);
searchInput.addEventListener("input", searchMovie);
