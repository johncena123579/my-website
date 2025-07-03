function navigateSitemap() {
  window.location.href = "/html/gioithieuthanhvien.html";
}

function redictrectLogin() {
  window.location.href = "/html/dangnhap.html";
}
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
