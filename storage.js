"use strict";

const userKey = "USERS";
const currentAccKey = "currentAccount";
const orderKey = "ORDER";
const orderListKey = "ORDERS";
const moveKey = "MOVES";
const headerAccount = document.querySelector(".header-account span");

// const loginForm = document.querySelector(".login-form");
// const messEle = document.querySelector(".mess");
const outAcc = document.querySelector(".out-Account");
const inforAcc = document.querySelector(".info-Account");

let currentAccount = getFromStorage(currentAccKey);
// lưu vào Storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// xuất ra Storage->js
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

let users = getFromStorage(userKey);

// check trang thai dang nhap
if (currentAccount.length != 0) {
  headerAccount.textContent = currentAccount.nameUser;
  outAcc.style.display = "block";
  inforAcc.style.display = "block";
} else {
  inforAcc.style.display = "none";
  outAcc.style.display = "none";
  headerAccount.textContent = "ĐĂNG NHẬP/ ĐĂNG KÝ";
}
// Thoát
outAcc.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem(currentAccKey);
  window.location.href = "./login/login.html";
});


