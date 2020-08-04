function nowMovie() {
  return fetch("https://yts.mx/api/v2/list_movies.json?page=2")
    .then((response) => response.json())
    .then((json) => json.data.movies);
}

const movieitem = (movies) => {
  const container = document.querySelector(".nowmovies");
  container.innerHTML = movies.map((items) => nowMovieList(items)).join("");
};
const nowMovieList = (items) => {
  return `
        <li class="nowImg">
          <img src="${items.medium_cover_image}" alt="" />
        </li>
  `;
};
nowMovie().then((movies) => {
  movieitem(movies);
});
//
//
//
const nowslideContainer = document.querySelectorAll(".slide");
const nowleftBtn = document.querySelectorAll(".leftBtn");
const nowrightBtn = document.querySelectorAll(".rightBtn");
let nowIndex = 0;
const nowLeftClick = (count) => {
  nowslideContainer[1].style.left = count * -100 + "%";
  nowIndex = count;
};

function nowOnSlide() {
  nowleftBtn.forEach((left) => {
    left.addEventListener("click", () => {
      nowLeftClick(nowIndex + 1);
    });
  });
}
nowOnSlide();
