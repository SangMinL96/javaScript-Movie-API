function mainMovies() {
  return fetch("https://yts.mx/api/v2/list_movies.json?limit=1")
    .then((response) => response.json())
    .then((json) => json.data.movies);
}

const Movie = (movies) => {
  const container = document.querySelector(".mainContent");
  container.innerHTML = movies.map((items) => mainMoiveList(items)).join("");
};
const mainMoiveList = (items) => {
  const { large_cover_image, title_long, rating, runtime, summary } = items;
  return `
  <img src="${large_cover_image}" alt="메인사진" />
  <div class=content>
  <h5 class="mainMovie_title">${title_long}</h5>
  <div class="lavel">평점 : ${rating}점 , 시간 : ${runtime}분</div>
  <p class="summary">${summary}</p>
  <div/>
  `;
};
mainMovies().then((movies) => {
  Movie(movies);
});
