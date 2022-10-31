"use strict";

// get current year for copyright in footer
let copyrightYear = (() => {
    let myNewDate = new Date(),
        yearCopyright = myNewDate.getFullYear();
    document.getElementById("year").innerHTML = yearCopyright;
})();