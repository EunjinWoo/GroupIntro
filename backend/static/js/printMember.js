let memberBox = document.querySelector(".user-list_item");
let mainContainer = document.querySelector(".main-contents");

// 유저 정보들 가져오기
let nameVal = document.querySelector(".topTabName");
let imgNameVal = document.querySelector(".imgName");

let mbtiVal = document.querySelector(".mbtiVal");
let stackVal = document.querySelector(".stackVal");
let tmiVal = document.querySelector(".tmiVal");
let blogVal = document.querySelector(".blogVal");
let githubVal = document.querySelector(".githubVal");
let introVal = document.querySelector(".introVal");
let imgUrlVal = document.querySelector(".memberImg");

const printMemberName = () => {
  fetch("/member")
    .then((res) => res.json())
    .then((data) => {
      membersArr = data["all_members"];

      // 디비에서 멤버의 이름값들만 가져와서 생성
      membersArr.forEach((member, idx) => {
        let userLi = document.createElement("li");
        userLi.classList.add("user-name");
        userLi.innerText = member["name"];
        memberBox.append(userLi);
      });
      let allName = document.querySelectorAll(".user-name");
      allName.forEach((name) => {
        name.addEventListener("click", (e) => {
          fetch("/member")
            .then((res) => res.json())
            .then((data) => {
              let user = data["all_members"];
              user.forEach((check) => {
                if (check.name === name.innerText) {
                  nameVal.innerText = check.name;
                  imgNameVal.innerText = check.name;
                  mbtiVal.innerText = check.mbti;
                  stackVal.innerText = check.stack;
                  tmiVal.innerText = check.tmi;
                  if (check.blog === "") {
                    blogVal.innerText = "";
                  } else {
                    blogVal.innerHTML = `<a href="https://${check.blog}">블로그 바로가기</a>`;
                  }
                  if (check.github === "") {
                    githubVal.innerText = "";
                  } else {
                    githubVal.innerHTML = `<a href="https://${check.github}">깃허브 바로가기</a>`;
                  }
                  introVal.innerText = check.intro;
                  imgUrlVal.src = check.img;
                } else if (check.name !== name.innerText) {
                }
              });
            });
        });
      });
    });
};

printMemberName();
