let userListUl = document.querySelector(".user-list_item");

userListUl.addEventListener("click", (e) => {
  let userListUl = e.currentTarget.children;

  let len = userListUl.length;
  for (let i = 0; i < len; i++) {
    if (userListUl[i].innerText === e.target.innerText) {
      userListUl[i].classList.add("currentLi");
    } else {
      userListUl[i].classList.remove("currentLi");
    }
  }
});
