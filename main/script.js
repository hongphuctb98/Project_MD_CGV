if (headerAccount.textContent != "ĐĂNG NHẬP/ ĐĂNG KÝ") {
  document.querySelector(".header-account").addEventListener("click", (e) => {
    console.log(headerAccount.textContent);
  });
}

localStorage.setItem("MovieList", JSON.stringify(movielist));
