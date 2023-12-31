// 아이콘
const icon1 = document.querySelectorAll(".icon")[1];
const icon2 = document.querySelectorAll(".icon")[0];

// 센션
const teamSectionContainer = document.querySelector(".team-container");
const userSectionContainer = document.querySelector(".user-container");

const toggleView = (e) => {
  if (e.target === icon1) {
    icon1.classList.add("activeIcon");
    icon2.classList.remove("activeIcon");

    teamSectionContainer.classList.remove("noshow");
    userSectionContainer.classList.add("noshow");
  } else if (e.target === icon2) {
    icon2.classList.add("activeIcon");
    icon1.classList.remove("activeIcon");

    teamSectionContainer.classList.add("noshow");
    userSectionContainer.classList.remove("noshow");
  }
};

// 이벤트
icon1.addEventListener("click", toggleView);
icon2.addEventListener("click", toggleView);

document.querySelector(".settingIcon").addEventListener("click", () => {
  alert("아무것도아님");
});
