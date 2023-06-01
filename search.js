const searchButton = document.getElementById("search-button");
const searchInput = document.querySelector(".search-input");

function performSearch(searchText) {
  alert(`검색어: ${searchText}`);
}

function onSearchClick(event) {
  event.preventDefault();
  const searchText = searchInput.value.trim();
  if (searchText !== "") {
    performSearch(searchText);
  }
}

searchButton.addEventListener("click", onSearchClick);
