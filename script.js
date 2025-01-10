const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const HidemenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

//Show Mobile Menu
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

//Hide Mobile Menu
HidemenuBtn.addEventListener("click", () => menuBtn.click())

//Show Form Popup
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

//Hide Form Popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    })

});

document.addEventListener("DOMContentLoaded", () => {
    const transactionForm = document.getElementById("transaction-form");
    const transactionTable = document.getElementById("transaction-table").getElementsByTagName("tbody")[0];

    // Menyimpan transaksi dan menambahkannya ke tabel
    transactionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const transactionType = document.getElementById("transaction-type").value;
        const amount = document.getElementById("amount").value;
        const date = new Date().toLocaleDateString();

        const transaction = { name, transactionType, amount, date };

        // Menambahkan transaksi ke tabel
        const newRow = transactionTable.insertRow();
        newRow.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.transactionType}</td>
            <td>${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaction.amount)}</td>
            <td>${transaction.date}</td>
        `;

        // Reset form setelah submit
        transactionForm.reset();
    });
});
