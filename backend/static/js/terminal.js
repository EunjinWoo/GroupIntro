const categoryList = document.querySelectorAll(".terminal-container ul li");
const categoryInput = document.querySelector(".category");

const len = categoryList.length;

categoryInput.value = categoryList[0].innerText;
categoryList[0].classList.add("curCategory");

const getCategory = (e) => {
  for (let i = 0; i < len; i++) {
    if (e.target === categoryList[i]) {
      categoryInput.value = categoryList[i].innerText;
      categoryList[i].classList.add("curCategory");
    } else {
      categoryList[i].classList.remove("curCategory");
    }
  }
};

categoryList.forEach((categoryItem) => {
  categoryItem.addEventListener("click", getCategory);
});
