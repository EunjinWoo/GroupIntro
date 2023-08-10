// 변수
const createIcon = document.querySelector(".createUser");
const popup = document.querySelector(".popup-container");
const pwInput = document.querySelector(".popup-container input");
const pwBtn = document.querySelector(".popup-container button");

//
const checkText = document.querySelector(".checkPwText");

// 새로운 유저 만들기 위한 변수
const userListBox = document.querySelector(".user-list_item");
// pw
const ADMIN_PASSWORD = "1234";

// fn

// 팝업 열기
const showPopup = () => {
  popup.classList.remove("popupDw");
  pwInput.focus();
};

// 팝업 닫기
const closePopup = (e) => {
  if (
    !popup.classList.contains("popupDw") &&
    e.target !== createIcon &&
    e.target !== pwInput &&
    e.target !== pwBtn &&
    e.target !== popup &&
    e.target !== document.querySelector(".popup-container h1") &&
    e.target !== document.querySelector(".popup-container p")
  ) {
    popup.classList.add("popupDw");
    checkText.classList.remove("checkPwTextOn");
    pwInput.value = null;
  }
};

// 패스워드 유효성 검사
const checkPw = () => {
  let pwVal = pwInput.value;
  if (pwVal === ADMIN_PASSWORD) {
    pwInput.value = null;
    popup.classList.add("popupDw");
    createNewuser();
  } else {
    pwInput.value = null;
    checkText.classList.add("checkPwTextOn");
  }
};

// 새로운 유저 생성
const createNewuser = () => {
  checkText.classList.remove("checkPwTextOn");
  let newUserInput = document.createElement("input");
  userListBox.appendChild(newUserInput);
  newUserInput.focus();

  newUserInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      let newUserLi = document.createElement("li");
      newUserLi.classList.add("user-name");

      const userName = newUserInput.value;

      newUserLi.innerText = userName;
      userListBox.append(newUserLi);

      let formData = new FormData();
      formData.append("name_give", userName);

      fetch("/member", { method: "POST", body: formData })
        .then((res) => res.json())
        .then((data) => {
          console.log("포스트 요청한 데이터: ", data);
        });
      newUserInput.remove();
      location.reload();
    }
  });
};

// event
createIcon.addEventListener("click", showPopup);
window.addEventListener("click", closePopup);

// 패스워드 입력
pwBtn.addEventListener("click", checkPw);
