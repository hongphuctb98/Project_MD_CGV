const movieDisplay = document.querySelector(".movie-layout .row ");
const movieCard = document.querySelectorAll(".movie-layout .movie-card");
let movielist = JSON.parse(localStorage.getItem("MovieList")) || [];
movieDisplay.innerHTML = "";
movielist.forEach((movie, index) => {
  let cardEle = ` <div class="col-sm-6 col-md-4 col-lg-3 movie-card">
  <div class="card">
  <a href="../filmInfor/filmInfor.html?id=${movie.movieId}" class="card-img-top">
    <img
      src="${movie.imgLink}"
      alt="..."
    />
  </a>

  <div class="card-body">
    <h5 class="card-title">
      <a href="../filmInfor/filmInfor.html?id=${movie.movieId}"
        >${movie.nameMovie}</a
      >
    </h5>
    <a href="../filmInfor/filmInfor.html?id=${movie.movieId}">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <b>Thể loại: </b>${movie.type}
        </li>
        <li class="list-group-item"><b>Thời lượng:</b> ${movie.time}</li>
        <li class="list-group-item">
          <b>Khởi chiếu:</b> ${movie.premiere}
        </li>
      </ul>
    </a>
    <a href="../book/book.html" class="btn">
      <img
        src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png"
        alt=""
      />
      <p>Mua vé</p></a
    >
  </div>
</div>
</div>`;
  movieDisplay.insertAdjacentHTML("beforeend", cardEle);
});

movieDisplay.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("btn")) {
    window.location.href = "../book/book.html";
  } else {
    window.location.href = "../filmInfor/filmInfor.html";
  }
});

console.log(movie);
