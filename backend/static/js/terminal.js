const categoryList = document.querySelectorAll(".terminal-container ul li");
const categoryInput = document.querySelector(".category");

const len = categoryList.length;

categoryInput.value = categoryList[0].innerText;
categoryList[0].classList.add("curCategory");

const getCategory = (e) => {
  let curInputVal = document.querySelector(".categoryInfo");

  for (let i = 0; i < len; i++) {
    if (e.target === categoryList[i]) {
      categoryInput.value = categoryList[i].innerText;
      categoryList[i].classList.add("curCategory");

      curInputVal.focus();
    } else {
      categoryList[i].classList.remove("curCategory");
    }
  }
};

categoryList.forEach((categoryItem) => {
  categoryItem.addEventListener("click", getCategory);
});

// 삭제
const deleteBtn = document.querySelector(".deleteBtn");

const deleteMember = () => {
  let curSelectMember = document.querySelector(".topTabName").innerText;

  let formData = new FormData();

  formData.append("name_give", curSelectMember);
  fetch("/member", { method: "DELETE", body: formData })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  location.reload();
};

// 수정
const updateBtn = document.querySelector(".updateBtn");

const updateMember = () => {
  let curSelectMember = document.querySelector(".topTabName").innerText;

  let currentCategoryVal = document.querySelector(".category").value;

  let updateVal = document.querySelector(".categoryInfo").value;

  let formData = new FormData();

  formData.append("name_give", curSelectMember);
  formData.append("att_category_give", currentCategoryVal);
  formData.append("att_to_give", updateVal);

  fetch("/member_modify", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  console.log(curSelectMember);
  console.log(currentCategoryVal);
  location.reload();
};

// 삭제 / 수정 이벤트
deleteBtn.addEventListener("click", deleteMember);
updateBtn.addEventListener("click", updateMember);
