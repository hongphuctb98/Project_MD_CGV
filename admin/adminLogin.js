let loginName = document.querySelector("#loginName");
let loginPassword = document.querySelector("#loginPassword");
let signinBtn = document.querySelector(".signIn-btn");

let adminAcc = {
  username: "hongphuctb98@gmail.com",
  pass: "Hongphuc1504@",
};

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let acc = {
    username: loginName.value,
    pass: loginPassword.value,
  };
  if (validateAcc(acc)) {
    window.location.href = "./admin.html";
  } else {
    alert("Đăng nhập thất bại");
  }
});

function validateAcc(acc) {
  let flag = true;
  if (acc.username != adminAcc.username || acc.pass != adminAcc.pass) {
    flag = false;
  }
  return flag;
}
