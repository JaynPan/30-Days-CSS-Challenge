const navigation = document.querySelector(".navigation");
const nav = document.querySelector("#navbar");

function toggleNav() {
  if (navigation.classList.contains("active")) {
    navigation.classList.remove("active");
  } else {
    navigation.classList.add("active");
  }
}
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};