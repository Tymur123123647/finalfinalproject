document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginModal");
    const closeModal = document.getElementById("closeModal");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});