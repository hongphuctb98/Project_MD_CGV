const loginForm = document.querySelector(".login-form");
const messEle = document.querySelector(".mess");

//find acc login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let loginUser = users.find((user) => {
    return (
      (user.number === loginForm.email.value ||
        user.email === loginForm.email.value) &&
      user.password === loginForm.password.value
    );
  });

  if (loginUser) {
    window.location.href = "../main.html";
    saveToStorage(currentAccKey, loginUser);
  } else {
    messEle.classList.add("error");
    messEle.classList.remove("success");
    messEle.textContent = "Tài khoản hoặc mật khẩu không chính xác";
  }
});

console.log(users);
