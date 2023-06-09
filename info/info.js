const slideBar = document.querySelector(".slidebar ul");

slideBar.addEventListener("click", (e) => {
  let target = e.target;
  slideBar.querySelectorAll("li.active").forEach((li) => {
    li.classList.remove("active");
  });
  target.classList.add("active");
  if (target.classList.contains("information")) {
    renderInfo(currentAccount);
  } else if (target.classList.contains("history")) {
    renderHistory(currentAccount);
  }
});

let dob =
  currentAccount.dob.day +
  "/" +
  currentAccount.dob.month +
  "/" +
  currentAccount.dob.year;
function renderInfo(acc) {
  const colMain = document.querySelector(".col-main");
  colMain.innerHTML = "";
  colMain.innerHTML = `
  <div class="img-acc">
  <div class="img-wrap">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
      alt=""
    />
    <p class="">${acc.nameUser}</p>
  </div>

  <div class="barcode">
    <p>thẻ thành viên</p>
    <img
      src="https://i.pinimg.com/736x/3e/32/05/3e3205f869383cffbacad19f07063eee.jpg"
      alt=""
    />
  </div>
</div>
<div class="info-acc">
  <div><p>Email </p>${acc.email}</div>
  <div><p>Địa chỉ </p>${acc.address}</div>
  <div><p>Dob </p>${dob}</div>
  <div><p>Gender </p>${acc.gender}</div>
  <div><p>SĐt </p>${acc.number}</div>
  <div><p>password </p>${acc.password}</div>
</div>
<button class="btn btn-edit" data-bs-toggle="modal"
data-bs-target="#exampleModal" >Edit</button>
  `;
}

let orders = getFromStorage(orderListKey);
function renderHistory(acc) {
  const colMain = document.querySelector(".col-main");
  colMain.innerHTML = "";

  orders
    .filter((order) => {
      return acc.id == order.idUser;
    })
    .forEach((his) => {
      colMain.innerHTML += `
        <div class="history-book">
        <div class="history-item">
          <div><b>Tên phim </b>${
            movielist.find((movie) => {
              return his.idMovie == movie.movieId;
            }).nameMovie
          }</div>
          <div><b>Mã order </b>${his.idOrder}</div>
          <div><b>Ngày đặt vé </b>${his.date}</div>
          <div><b>Giờ </b>${his.site}</div>
          <div><b>Địa chỉ </b>${his.address}</div>
          <div><b>Ghế </b>${his.seat}</div>
          <div><b>Loại </b>${his.type}</div>
        </div>
      </div>
     
      `;
    });
}

const saveBtn = document.querySelector(".save-btn");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-form");
console.log(modalForm);
function rednerModal(acc) {
  modalForm.innerHTML = `
  <div>
                <p>name</p>
                <input type="text" name="name" value="${acc.nameUser}" />
              </div>
              <div>
                <p>Email</p>
                <input type="text" name="email" value="${acc.email}" />
              </div>
              <div>
                <p>Địa chỉ</p>
                <input type="text" name="address" value="${acc.address}" />
              </div>
              <div>
                <p>Dob</p>
                <input type="text" class="dob" name="day" value="${acc.dob.day}" />
                <input type="text" class="dob" name="month" value="${acc.dob.month}" />
                <input type="text" class="dob" name="year" value="${acc.dob.year}" />
              </div>
              <div>
                <p>Gender</p>
                <input type="text" name="gender" value="${acc.gender}" />
              </div>
              <div>
                <p>Sđt</p>
                <input type="text" name="phone" value="${acc.number}" />
              </div>
              <div>
                <p>password</p>
                <input type="text" name="password" value="${acc.password}" />
              </div>
  `;
}

rednerModal(currentAccount);

saveBtn.addEventListener("click", () => {
  let indexAcc = users.findIndex((user) => {
    return user.id == currentAccount.id;
  });
  let acc = users.splice(indexAcc, 1);
  let editAcc = {
    id: acc[0].id,
    nameUser: modalForm.name.value,
    email: modalForm.email.value,
    address: modalForm.address.value,
    dob: {
      day: modalForm.day.value,
      month: modalForm.month.value,
      year: modalForm.year.value,
    },
    gender: modalForm.gender.value,
    number: modalForm.phone.value,
    password: modalForm.password.value,
    interest: acc[0].interest,
    policy: acc[0].policy,
  };

  if (validateAcc(editAcc).length == 0) {
    users.push(editAcc);
    saveToStorage(userKey, users);
    saveToStorage(currentAccKey, editAcc);
    window.location.reload();
    renderInfo(getFromStorage(currentAccKey));
  } else {
    alert(validateAcc(editAcc));
  }
});

function validateAcc(newUser) {
  let mess = "";
  const phonecheck = /^(0|\+84)(9|8|7|5|3)\d{8}$/;
  const passRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  mess = "";
  if (!newUser.nameUser) {
    mess += "Vui lòng nhập họ tên <br>";
  } else if (
    users.find((user) => {
      return user.nameUser === newUser.nameUser;
    })
  ) {
    mess += "Họ tên đã tồn tại <br>";
  }
  if (!newUser.email || !emailRegex.test(newUser.email)) {
    mess += "Vui lòng nhập email <br>";
  } else if (
    users.find((user) => {
      return user.email === newUser.email;
    })
  ) {
    mess += "Email đã tồn tại <br>";
  }

  if (!newUser.password || !passRegex.test(newUser.password)) {
    mess += "Vui lòng nhập mật khẩu <br>";
  }

  if (!newUser.dob) {
    mess += "Vui lòng nhập ngày sinh <br>";
  }

  if (!newUser.gender) {
    mess += "Vui lòng chọn giới tính <br>";
  }
  if (!newUser.number || !phonecheck.test(newUser.number)) {
    mess += "Vui lòng nhập số điện thoại <br>";
  }
  if (!newUser.address) {
    mess += "Vui lòng nhập địa chỉ <br>";
  }
  if (!newUser.interest) {
    mess += "Vui lòng nhập rạp yêu thích<br>";
  }
  if (!newUser.policy) {
    mess += "Vui lòng chấp nhận điều khoản <br>";
  }
  return mess;
}
