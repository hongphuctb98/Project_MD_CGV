const productView = document.querySelector(".product-view");
let idWeb = window.location.href.split("=")[1];

let movielist = JSON.parse(localStorage.getItem("MovieList")) || [];
let movie = movielist.find((item) => item.movieId == idWeb);

if (movie) {
  renderMovie(movie);
}
function renderMovie(movie) {
  productView.innerHTML = `
<div class="product-img col-3">
<img
  src="${movie.imgLink}"
  alt=""
/>
</div>
<div class="product-info col-9">
<h3 class="product-name">${movie.nameMovie}</h3>
<ul class="product-info-list">
  <li class="product-item"><b>Đạo diễn</b> ${movie.director}</li>
  <li class="product-item">
    <b>Diễn viên</b> ${movie.actor.join(", ")}
  </li>
  <li class="product-item">
    <b>Thể loại</b> ${movie.type.join(", ")}
  </li>
  <li class="product-item"><b>Khởi chiếu</b> ${movie.premiere}</li>
  <li class="product-item"><b>Thời lượng</b> ${movie.time}</li>
  <li class="product-item">
    <b>Ngôn ngữ</b> Tiếng Anh - Phụ đề Tiếng Việt
  </li>
  <li class="product-item">
    <b>Rated</b> ${movie.rated}
  </li>
</ul>
<div class="product-book">
                <button class="btn-film-info">
                  <a href="../book/book.html?id=${movie.movieId}">
                    <img
                      src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png"
                      alt=""
                    />
                    Mua vé</a
                  >
                </button>
              </div>
</div>`;
}
