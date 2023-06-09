const tbodyUser = document.querySelector(".user-table tbody");
const tbodyMovie = document.querySelector(".movie-table tbody");
const submitBtn = document.querySelector(".btn-sbm");
const submitAddBtn = document.querySelector(".btn-add-sbm");

const movieEdit = document.querySelector(".movie-edit");
const movieAdd = document.querySelector(".movie-add");
const formSection = document.querySelector(".form-section");
const addBtn = document.querySelector(".add-btn");
let cancelBtn = document.querySelector(".btn-cancel");
let searchMovieiInput = document.querySelector(".search-movie-input");
let searchMovieBtn = document.querySelector(".search-movie-btn");
let pagination = document.querySelector(".pagination");

let users = JSON.parse(localStorage.getItem("USERS"));
let movielist = JSON.parse(localStorage.getItem("MovieList"));

let currentUserPage = 1;

//render user
function renderUser(users) {
  tbodyUser.innerHTML = "";
  users.forEach((acc) => {
    let trEle = document.createElement("tr");
    trEle.innerHTML = `
    <td class="table-id">${acc.id}</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style="width: 45px; height: 45px"
                                class="rounded-circle"
                              />
                              <div class="ms-3">
                                <p class="fw-bold mb-1">${acc.nameUser}</p>
                                <p class="text-muted mb-0">${acc.email}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="fw-normal mb-1">${acc.number}</p>
                          </td>
  
                          <td>
                            <!-- <span
                              class="badge badge-success rounded-pill d-inline"
                              >Active</span
                            > -->
                            <span>${acc.gender}</span>
                   </td>
                  <td>${acc.dob.day}/${acc.dob.month}/${acc.dob.year}</td>
                 <td>
                ${acc.address}
              </td>
            <td>
          <button
        type="button"
      class="btn btn-link btn-sm btn-rounded"
      >
      Edit
    </button>
  </td>`;
    tbodyUser.appendChild(trEle);
  });
}
//render movie
let currentPage = 1;
let numberPerPage = 8;

pagination.addEventListener("click", (e) => {
  if (parseInt(e.target.textContent)) {
    currentPage = parseInt(e.target.textContent);
  }
  renderMovie(movielist);
});

function renderMovie(movielist) {
  tbodyMovie.innerHTML = "";
  // movielist.forEach((movie, i) =>
  for (
    let i = (currentPage - 1) * numberPerPage;
    i < currentPage * numberPerPage;
    i++
  ) {
    let trEle = document.createElement("tr");
    trEle.classList.add("movie-item");
    trEle.innerHTML = `
  <td class="table-id">${movielist[i].movieId}</td>
  <td>
    <div class="d-flex align-items-center">
      <img
        src=${movielist[i].imgLink}
        alt=""
        style="width: 45px; height: 45px"
      />
      <div class="ms-3">
        <p class="fw-bold mb-1">${movielist[i].nameMovie}</p>
        <p class="text-muted mb-0 director">${movielist[i].director}</p>
      </div>
    </div>
  </td>
  <td>
    <p class="fw-normal mb-1">
    ${movielist[i].actor.join(", ")}
    </p>
  </td>

  <td>
   
    <span>${movielist[i].type.join(", ")}</span>
  </td>
  <td>27/02/1998</td>
  <td>2h20</td>
  <td class="rated">
  ${movielist[i].rated}
  </td>
  <td>${movielist[i].price}</td>
  <td>
    <button
      type="button"
      class="btn  btn-sm btn-rounded btn-del btn-danger" 
      data-del= ${movielist[i].movieId}
    >
      Del
    </button>
  </td>
  <td>
    <button
      type="button"
      class="btn  btn-sm btn-rounded btn-edit btn-warning"
      data-id= ${movielist[i].movieId}
    >
      Edit
    </button>
  </td>
  `;
    tbodyMovie.appendChild(trEle);
  }
}

//render form edit
function renderFormEdit(movie) {
  document.querySelector(".form-img img").src = movie.imgLink;
  formSection.movieId.value = movie.movieId;
  formSection.movieName.value = movie.nameMovie;
  formSection.posterLink.value = movie.imgLink;
  formSection.director.value = movie.director;
  formSection.actor.value = movie.actor.join(", ");
  formSection.type.value = movie.type.join(", ");
  formSection.date.value = movie.premiere;
  formSection.time.value = movie.time;
  formSection.price.value = movie.price;
  formSection.rate.value = movie.rated;
}

//update movie
function updateMovie() {
  let movieUp = {
    movieId: +formSection.movieId.value,
    imgLink: formSection.posterLink.value,
    nameMovie: formSection.movieName.value,
    director: formSection.director.value,
    actor: formSection.actor.value.split(", "),
    type: formSection.type.value.split(", "),
    premiere: formSection.date.value,
    time: formSection.time.value,
    price: +formSection.price.value,
    rated: formSection.rate.value,
  };
  let i = movielist.findIndex((movie) => movie.movieId == movieUp.movieId);
  movielist[i] = movieUp;
  localStorage.setItem("MovieList", JSON.stringify(movielist));
  renderMovie(movielist);
  resetForm();
  movieEdit.style.display = "none";
}

//add movie
function addMovie() {
  formSection.movieId.value = Math.floor(Math.random() * 1000 + 1);
  let newMovie = {
    movieId: formSection.movieId.value,
    imgLink: formSection.posterLink.value,
    nameMovie: formSection.movieName.value,
    director: formSection.director.value,
    actor: formSection.actor.value.split(", "),
    type: formSection.type.value.split(", "),
    premiere: formSection.date.value,
    time: formSection.time.value,
    price: +formSection.price.value,
    rated: formSection.rate.value,
  };
  if (validateMovie(newMovie)) {
    movielist.push(newMovie);
    localStorage.setItem("MovieList", JSON.stringify(movielist));
    renderMovie(movielist);
    resetForm();
    movieEdit.style.display = "none";
  }
}

//reset form
function resetForm() {
  formSection.movieId.value = "";
  formSection.movieName.value = "";
  formSection.posterLink.value = "";
  formSection.director.value = "";
  formSection.actor.value = "";
  formSection.type.value = "";
  formSection.date.value = "";
  formSection.time.value = "";
  formSection.price.value = "";
  formSection.rate.value = "";
}

// validate movie infor
function validateMovie(movie) {
  let isValid = true;
  if (!movie.movieId) {
    isValid = false;
    console.log("movieId");
  }
  if (!movie.imgLink) {
    isValid = false;
    console.log("imgLink");
  }
  if (!movie.nameMovie) {
    isValid = false;
    console.log("nameMovie");
  }
  if (!movie.director) {
    isValid = false;
    console.log("director");
  }
  if (!movie.actor) {
    isValid = false;
    console.log("actor");
  }
  if (!movie.type) {
    isValid = false;
    console.log("type");
  }
  if (!movie.premiere) {
    isValid = false;
    console.log("premiere");
  }
  if (!movie.time) {
    isValid = false;
    console.log("time");
  }
  if (!movie.price) {
    isValid = false;
    console.log("price");
  }
  if (!movie.rated) {
    isValid = false;
    console.log("rated");
  }
  return isValid;
}

renderUser(users);
renderMovie(movielist);

tbodyMovie.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-edit")) {
    movieEdit.style.display = "block";
    let i = movielist.findIndex(
      (movie) => movie.movieId == e.target.dataset.id
    );

    console.log(i);

    submitBtn.style.display = "block";
    submitAddBtn.style.display = "none";
    renderFormEdit(movielist[i]);
  }

  if (e.target.classList.contains("btn-danger")) {
    let i = movielist.findIndex(
      (movie) => movie.movieId == e.target.dataset.del
    );
    movielist.splice(i, 1);
    localStorage.setItem("MovieList", JSON.stringify(movielist));
    renderMovie(JSON.parse(localStorage.getItem("MovieList")));
  }
});

document.querySelector("#input-link").addEventListener("change", (e) => {
  document.querySelector(".form-img img").src = e.target.value;
});

addBtn.addEventListener("click", () => {
  movieEdit.style.display = "block";
  submitBtn.style.display = "none";
  submitAddBtn.style.display = "block";
  addMovie();
});

cancelBtn.addEventListener("click", () => {
  movieEdit.style.display = "none";
});

searchMovieBtn.addEventListener("click", () => {
  let searchText = searchMovieiInput.value;

  let movieSearch = movielist.filter((movie) => {
    return movie.nameMovie.toLowerCase().includes(searchText.toLowerCase());
  });
  console.log(movieSearch);
  renderMovie(movieSearch);
});

//data
function download() {
  var blob = new Blob([`${JSON.stringify(movielist, "\t", 2)}`], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "ListMovie.txt");
}

const importBtn = document.getElementById("import-btn");

importBtn?.addEventListener("click", function () {
  let file = document.getElementById("input-file").files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    movielist = JSON.parse(this.result);
    localStorage.setItem("MovieList", JSON.stringify(movielist));
  });
  renderMovie(JSON.parse(localStorage.getItem("stringArr")));
  window.location.href = "./admin.html";
  reader.readAsText(file);
});
