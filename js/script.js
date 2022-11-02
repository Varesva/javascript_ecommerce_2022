"use strict";

// get current year for copyright in footer
let copyrightYear = (() => {
    let myNewDate = new Date(),
        yearCopyright = myNewDate.getFullYear();
    document.getElementById("year").innerHTML = yearCopyright;
})();


const btnClearCart = document.getElementById("clearCart");
btnClearCart.addEventListener("click", clearCart);
function clearCart() {
    localStorage.removeItem(cart.key);
    cart.content = [];
    localStorage.setItem(cart.key, JSON.stringify(cart.content));
    updateCountCart();
};