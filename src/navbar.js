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
};

// Mobile
// click magnifier to reveal search bar
searchButton.addEventListener("click", revealSearchMenu);
// type to search
searchInput.addEventListener("input", searchMovie);
// close the search
plusButton.addEventListener("click", closeSearchMenu);
