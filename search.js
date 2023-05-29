const searchButton = document.getElementById("search-button");
const searchInput = document.querySelector(".search-input");

function performSearch(searchText) {
  // 여기에 실제 검색 로직을 구현하세요.
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
