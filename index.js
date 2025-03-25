const svg = document.getElementById("menuIcon");
const ul = document.getElementById("menuList");
const body = document.getElementsByTagName("body")
svg.addEventListener("click", function () {
  if (menuList.style.display === "none") {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none"
  }
});


