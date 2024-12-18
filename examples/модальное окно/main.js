const modal = document.querySelector(".modal-container");
const closeButton = document.querySelector(".close");
const modalTriggers = document.querySelector("#open");

function openModal() {
  modal.classList.add("is-open");
}

function closeModal() {
  modal.classList.remove("is-open");
}

modalTriggers.addEventListener("click", openModal);

modal.addEventListener("click", (a) => {
  if (a.target == modal) {
    closeModal();
  }
});

closeButton.addEventListener("click", closeModal);
