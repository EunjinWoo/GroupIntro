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
