const list = document.querySelector("#list-levels");

for (i = 1; i < levels.length + 1; i++) {
  const listLevelDetails = document.querySelector(`#list-level-details-${i}`);
  const listLevel = document.getElementById(`list-level-${i}`);
  const listLevels = document.querySelectorAll(".list-level");
  const allListLevelDetails = document.querySelectorAll(".list-level-details");

  listLevel.addEventListener("click", () => {
    if (listLevel.classList.contains("active")) {
      listLevelDetails.classList.remove("show");
      listLevel.classList.remove("active");
    } else {
      listLevels.forEach((level) => {
        level.classList.remove("active");
      });
      allListLevelDetails.forEach((levelDetails) => {
        levelDetails.classList.remove("show");
      });
      listLevel.classList.add("active");
      listLevelDetails.classList.add("show");
    }
  });
}

// alert(
//   "this is not a serious project, just something I made for both fun and for improving keep that in mind!",
// );

console.log("Hello Bro");
