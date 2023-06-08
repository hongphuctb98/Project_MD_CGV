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
  }
});
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

siteList.addEventListener("click", (e) => {
  if (e.target.classList.contains("site-item")) {
    window.location.href = `../bk-step/bk-step.html?idOrder=${idOrder}`;
  }
});

console.log(currentAccount);
