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
  console.log(pwVal);
  if (pwVal === ADMIN_PASSWORD) {
    console.log("비밀번호 일치");
    pwInput.value = null;
    popup.classList.add("popupDw");
    createNewuser();
  } else {
    console.log("비밀번호 불일치");
    checkText.classList.add("checkPwTextOn");
  }
};

// 새로운 유저 생성
const createNewuser = () => {
  console.log("유효성 통과 새로운 유저 만들 수 있음");
  checkText.classList.remove("checkPwTextOn");
  let newUserInput = document.createElement("input");
  userListBox.appendChild(newUserInput);
  newUserInput.focus();

  newUserInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log("여기까지 실행되고 값은: ", newUserInput.value);
      let newUserLi = document.createElement("li");
      newUserLi.classList.add("user-name");
      newUserLi.innerText = newUserInput.value;
      userListBox.append(newUserLi);
      newUserInput.remove();
    }
  });
};

// event
createIcon.addEventListener("click", showPopup);
window.addEventListener("click", closePopup);

// 패스워드 입력
pwBtn.addEventListener("click", checkPw);
