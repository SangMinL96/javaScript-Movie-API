function popMovie() {
  return fetch("https://yts.mx/api/v2/list_movies.json?limit=20")
    .then((response) => response.json())
    .then((json) => json.data.movies);
}

const Moviee = (movies) => {
  const container = document.querySelector(".popmovies");
  container.innerHTML = movies.map((items) => popMovieList(items)).join("");
};
const popMovieList = (items) => {
  return `
        <li class="popImg">
          <img src="${items.medium_cover_image}" alt="" />
        </li>
  `;
};
popMovie().then((movies) => {
  Moviee(movies);
});
