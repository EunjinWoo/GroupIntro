let userView = document.querySelectorAll(".main-contents_info");
let users = document.querySelectorAll(".user-list_item li");

let userCnt;

function updateUserCnt() {
  users = document.querySelectorAll(".user-list_item li");

  userCnt = users.length;
}
console.log("curUser.js > 현재 유저 카운트: ", userCnt);

let curUser = users[0];
curUser.classList.add("curActiveUser");

let curView = userView[0];
curView.classList.add("curViewUser");

const getCurUser = (e) => {
  updateUserCnt();
  for (let i = 0; i < userCnt; i++) {
    if (e.target === users[i]) {
      curUser.classList.remove("curActiveUser");
      curUser = users[i];
      curUser.classList.add("curActiveUser");

      curView.classList.remove("curViewUser");
      curView = userView[i];
      userView[i].classList.add("curViewUser");
    }
  }
};

users.forEach((user) => {
  user.addEventListener("click", getCurUser);
});
