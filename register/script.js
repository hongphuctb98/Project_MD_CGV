"use strict";

const registerForm = document.querySelector(".register-form");
const messElement = document.querySelector(".mess");

let index = 0;
let mess = "";
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userId = Math.floor(Math.random() * 1000 + 1);
  // users.find((use) => {
  //   if (use.id == userId) {
  //     userId = Math.floor(Math.random() * 1000 + 1);
  //   }
  // });
  let newUser = {
    id: userId,
    nameUser: registerForm.name.value,
    email: registerForm.email.value,
    password: registerForm.password.value,
    dob: {
      day: registerForm.day.value,
      month: registerForm.month.value,
      year: registerForm.year.value,
    },
    gender: registerForm.gender.value,
    number: registerForm.number.value,
    address: registerForm.address.value,
    interest: registerForm.interest.value,
    policy: registerForm.policy.checked,
  };

  if (validate(newUser)) {
    messElement.classList.add("error");
    messElement.classList.remove("success");
    messElement.innerHTML = `${validate(newUser)}`;
    console.log(validate(newUser));
  } else {
    users.push(newUser);
    saveToStorage(userKey, users);
    index++;
    messElement.classList.add("success");
    messElement.classList.remove("error");
    messElement.textContent = "Đăng ký thành công";
    registerForm.reset();
    window.location.href = "../login/login.html";
  }
});

// validate new user
function validate(newUser) {
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
    mess +=
      "Vui lòng nhập mật khẩu ( ít nhất 8 kí tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt)<br> ";
  }

  if (
    (!newUser.dob.day || !newUser.dob.month || !newUser.dob.year) &&
    !validateDay(newUser.dob.day, newUser.dob.month, newUser.dob.year)
  ) {
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

function validateDay(day, month, year) {
  let flag = true;
  if (!parseInt(day) || !parseInt(month) || !parseInt(year)) {
    flag = false;
  }
  if (month < 1 || month > 12) {
    flag = false;
  }
  if (year < 1) {
    flag = false;
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day < 1 || day > 31) {
        flag = false;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day < 1 || day > 30) {
        flag = false;
      }
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        if (day < 1 || day > 29) {
          flag = false;
        }
      } else {
        if (day < 1 || day > 28) {
          flag = false;
        }
      }
  }

  return flag;
}

let newUser = {
  id: 99,
  nameUser: "phuc1",
  email: "phuc1@gmail.com",
  password: "Hongphuc1504@",
  dob: {
    day: 27,
    month: 2,
    year: 1998,
  },
  gender: "Nữ",
  number: "0369042128",
  address: "HN",
  interest: "CGV",
  policy: true,
};

// let userList = [];
// userList.push(newUser);

// saveToStorage(userKey, userList);
