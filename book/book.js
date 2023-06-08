const today = new Date();
const dayList = document.querySelector(".day-list");

//render ngay
for (let i = 0; i < 20; i++) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + i
  );
  const dateOfMonth = date.getDate();
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let liElement = document.createElement("li");
  liElement.classList.add("day-item");
  liElement.dataset.date = `${year}-${month
    .toString()
    .padStart(2, "0")}-${dateOfMonth.toString().padStart(2, "0")}`;
  liElement.innerHTML = ` <div>
    <span>${month}</span>
    <span>${dayOfWeek}</span>
  </div>
  <p>${dateOfMonth}</p>`;
  dayList.appendChild(liElement);
}

// lay value
const tabList = document.querySelector(".tabs-list").parentElement;
let selectedDate = null;
let selectedAddress = null;
let selectedType = null;
let selectedSite = null;
let idOrder = Math.floor(Math.random() * 100);

function createOrder(
  selectedDate,
  selectedAddress,
  selectedType,
  selectedSite
) {
  let order = {
    idOrder: idOrder,
    idUser: currentAccount.id,
    idMovie: window.location.href.split("=")[1],
    date: selectedDate,
    address: selectedAddress,
    type: selectedType,
    site: selectedSite,
    seat: null,
    price: null,
  };
  saveToStorage("ORDER", order);
  console.log(order);
}

tabList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest(".day-item")) {
    selectedDate = target.closest(".day-item").dataset.date;
    updateSelectedTab(target.closest(".day-item"));
  } else if (target.closest(".address-item")) {
    selectedAddress = target.closest(".address-item").innerText.trim();
    updateSelectedTab(target.closest(".address-item"));
  } else if (target.closest(".types-item")) {
    selectedType = target.closest(".types-item").innerText.trim();
    updateSelectedTab(target.closest(".types-item"));
  } else if (target.closest(".site-item")) {
    selectedSite = target.closest(".site-item").innerText.trim();
    updateSelectedTab(target.closest(".site-item"));
  }
  if (selectedDate && selectedAddress && selectedType && selectedSite) {
    createOrder(selectedDate, selectedAddress, selectedType, selectedSite);
    window.location.href = `../bk-step/bk-step.html?idOrder=${idOrder}`;
  }
});

let mess = "";
function validateOrder(order) {
  if (!order.date) {
    alert("Vui lòng chọn ngày");
    return false;
  }
  if (!order.address) {
    alert("Vui lòng chọn địa chỉ");
    return false;
  }
  if (!order.type) {
    alert("Vui lòng chọn loại vé");
    return false;
  }
  if (!order.site) {
    alert("Vui lòng chọn khách sạn");
    return false;
  }
  if (!order.seat) {
    alert("Vui lòng chọn ghế");
    return false;
  }
}

// update selected
function updateSelectedTab(selectedTab) {
  const tabsItem = selectedTab.closest(".tabs-item");

  const tabsItems = tabsItem.querySelectorAll(".active");
  tabsItems.forEach((tabItem) => {
    tabItem.classList.remove("active");
  });

  selectedTab.classList.add("active");
}

const siteList = document.querySelector(".site-list");
