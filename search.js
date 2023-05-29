const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", performSearch);

function performSearch() {
  const searchTerm = searchInput.value;
  console.log("검색어:", searchTerm);
}
