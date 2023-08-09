const users = document.querySelectorAll(".user-list_item li");

const userView = document.querySelectorAll(".main-contents_info");

const userCnt = users.length;

let curUser = users[0];
curUser.classList.add("curActiveUser");

let curView = userView[0];
console.log(curView);
curView.classList.add("curViewUser");

const getCurUser = (e) => {
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
