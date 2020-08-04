function originalMovie() {
  return fetch("https://yts.mx/api/v2/list_movies.json?page=3")
    .then((response) => response.json())
    .then((json) => json.data.movies);
}

const originalItem = (movies) => {
  const container = document.querySelector(".originalmovies");
  container.innerHTML = movies
    .map((items) => originalMovieList(items))
    .join("");
};
const originalMovieList = (items) => {
  return `
        <li class="originalImg">
          <img src="${items.medium_cover_image}" alt="" />
        </li>
  `;
};
originalMovie().then((movies) => {
  originalItem(movies);
});
