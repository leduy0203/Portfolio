var a = document.querySelectorAll("a");
var button = document.querySelectorAll("button");

// add current year
function setYearForCopyright() {
  const currentYearElem = document.getElementById("currentYear");

  const year = new Date().getFullYear();
  currentYearElem.innerText = year;
}
setYearForCopyright();

// nav full screen open btn
function openFullScreenNav() {
  const navFullScreen = document.getElementById("navFullScreen");

  navFullScreen.classList.remove("nav-fullscreen-close");
  navFullScreen.classList.add("nav-fullscreen-open");
}
function closeFullScreenNav() {
  const navFullScreen = document.getElementById("navFullScreen");
  navFullScreen.classList.add("nav-fullscreen-close");
  navFullScreen.classList.remove("nav-fullscreen-open");
}
