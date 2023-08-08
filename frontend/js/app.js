$(document).ready(function () {
  showTitle();
});
function showTitle() {
  $("#caseMemcard").display = "none";
  $("#caseIntro").display = "block";
  $("#icon1:active").css("background-color", "006aff");
}
function showMember() {
  $("#caseIntro").display = "none";
  $("#caseMemcard").display = "block";
  $("#icon2:active").css("background-color", "006aff");
}
$(".list-name li").on("click", function (e) {
  if ($(this).parent(".list-name").length > 0) {
    console.log("상위 li");
  } else {
    console.log($(this).text());
  }
});

/** 입력된 내용 클릭했을 때 */
function listCliked(e) {
  typeArray = {"mbti" : 0,
              "shortIntro" : 1,
              "skill" : 2,
              "tmi" : 3,
              "blogUrl" : 4,
              "githubUrl" : 5}

  
  const ty1 = $(e).attr('id'); //클릭한 행 아이디값 가져오기
  console.log('ddd : '+ty1);
  const text = document.getElementById(ty1).querySelector('span').innerText//텍스트 가져오기
  const ty2 = ty1.replace('li',''); //li제거해서 숫자만 
  var type = "";
  for(var i in typeArray){
    if(ty2 == typeArray[i]) {
      a = typeArray[i]
      type = document.getElementById('selectList').options[a].selected="true"
      console.log('dd :'+type);
    }
  }
  document.getElementById('textInput').value = text;
}

function result() {
  const type = document.getElementById('selectList').value;
  const input = document.getElementById('textInput').value;
  updateInfo(type, input);
}

/** 수정버튼 클릭했을때 */
function updateInfo(type, text) {
  alert('type : ' + type);
  alert('value : ' + text);

  document.getElementById('textInput').value = null;  //input창 초기화
  $("#selectList option:eq(0)").prop("selected", true); //select box 초기화
}

/** 삭제버튼 클릭했을 때 */
function deleteInfo(type, input) {
  alert('정말 삭제하시겠습니까?')
}



