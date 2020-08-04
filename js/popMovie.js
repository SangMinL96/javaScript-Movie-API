function popMovie() {
  return fetch("https://yts.mx/api/v2/list_movies.json?page=1")
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

const popSlideContainer = document.querySelectorAll(".slide");
const popLeftBtn = document.querySelectorAll(".leftBtn");
const poprightBtn = document.querySelectorAll(".rightBtn");
let popIndex = 0;
const popLeftClick = (count) => {
  popSlideContainer[0].style.left = count * -100 + "%";
  popIndex = count;
};

function popOnSlide() {
  popLeftBtn.forEach((left) => {
    left.addEventListener("click", () => {
      popLeftClick(popIndex + 1);
    });
  });
}
popOnSlide();
