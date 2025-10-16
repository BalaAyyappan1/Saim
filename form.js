const modal = document.getElementById("formModal");
const btn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close when clicking outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
