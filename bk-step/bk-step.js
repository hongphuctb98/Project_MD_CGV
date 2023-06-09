const ticketBox = document.querySelector(".ticketbox");
let orderList = getFromStorage(orderListKey) || [];
let currentOrder = getFromStorage(orderKey);
let movielist = JSON.parse(localStorage.getItem("MovieList"));
const rows = ["A", "B", "C", "D", "E"];
const numSeats = 12;

function changeMoney(money) {
  const number = parseInt(money);
  const currencyString = number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return currencyString;
}
// let movielist = JSON.parse(localStorage.getItem("MovieList"));
rederOrder();
//render order
function rederOrder() {
  const filmOrder = document.querySelector(".film-order");
  filmOrder.innerHTML = "";
  let price = movielist.find((movie) => {
    return movie.movieId == currentOrder.idMovie;
  }).price;
  console.log(currentOrder.seat);
  currentOrder.price = parseInt(price) + 200000;
  filmOrder.innerHTML = `
<div class=""> <img src="${
    movielist.find((movie) => {
      return movie.movieId == currentOrder.idMovie;
    }).imgLink
  }" alt=""></div>
               <div class="wrap d-flex align-items-center">
                <ul>
                  <li class="film-name">${
                    movielist.find((movie) => {
                      return movie.movieId == currentOrder.idMovie;
                    }).nameMovie
                  }</li>
                  <li class="file-types">${currentOrder.type}</li>
                </ul>
                <ul>
                  <li><span>Rạp </span>CGV Vincom Royal City</li>
                  <li><span>Suất chiếu </span>${currentOrder.site}, ${
    currentOrder.date
  }</li>
                  <li><span>Phòng chiếu </span>L'AMOUR</li>
                  <li><span>Ghế </span>${currentOrder.seat}</li>
                </ul>
                <ul>
                  <li><span>Giá vé:</span> ${changeMoney(price)} ₫	
                  </li>
                  <li><span>Combo:</span> 200.000 ₫	</li>
                  <li><span>Tổng:</span> ${changeMoney(currentOrder.price)}₫	
                  </li>

        </ul>
      </div>
    <div class="d-flex align-items-center">
 <button class="btn book-btn">ĐẶT VÉ</button>
</div>`;
  const bookBtn = document.querySelector(".book-btn");
  const overlay = document.querySelector(".overlay");
  bookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("book");
    orderList.push(currentOrder);
    saveToStorage(orderListKey, orderList);
    overlay.style.display = "block";
  });
}

function reload() {
  window.location.href = "../main.html";
}

//render seat
for (let row of rows) {
  let rowElement = document.createElement("div");
  rowElement.classList.add("row-seat");

  for (let i = 1; i <= numSeats; i++) {
    let seatClass = "normal";

    let isSeatSold = orderList.some((order) => {
      return (
        order.address === currentOrder.address &&
        order.date === currentOrder.date &&
        order.site === currentOrder.site &&
        order.seat === `${row}${i}`
      );
    });
    if (row === "E") {
      seatClass = "vip";
    } else if (isSeatSold) {
      seatClass = "sold";
    }
    rowElement.innerHTML += `<span class="seat-item ${seatClass}">${row}${i}</span>`;
  }

  ticketBox.appendChild(rowElement);
}

ticketBox.addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelectorAll(".seat-item").forEach((item) => {
    item.classList.remove("checked");
  });
  if (
    e.target.classList.contains("seat-item") &&
    !e.target.classList.contains("sold")
  ) {
    currentOrder.seat = e.target.innerText;
    e.target.classList.add("checked");
  }

  rederOrder();
});
