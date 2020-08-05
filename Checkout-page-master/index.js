var fcount = 0,
    scount = 0;
var firstsubBtn = document.getElementById("first__minus__counter");
var firstaddBtn = document.getElementById("first__additional__counter");
var firstCounter = document.getElementById("first__counter");
var secondCounter = document.getElementById("second__counter");

var secondsubBtn = document.getElementById("second__minus__counter");
var secondaddBtn = document.getElementById("second__additional__counter");

firstsubBtn.addEventListener("click", function(e) {
    fcount--;
    firstCounter.textContent = fcount;
}, false);


firstaddBtn.addEventListener("click", function(e) {
    fcount++;
    firstCounter.innerText = fcount;
}, false);

secondsubBtn.addEventListener("click", function(e) {
    scount--;
    secondCounter.textContent = scount;
}, false);


secondaddBtn.addEventListener("click", function(e) {
    scount++;
    secondCounter.innerText = scount;
}, false);

const checkForm = function(form) {

    if (form.save.checked && (form.fname.value == "")) {
        alert("Error: error message");
        form.fname.focus();
        return false;
    }
    alert("Success!");
    return true;
};