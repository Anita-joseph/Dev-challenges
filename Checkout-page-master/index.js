// toggle between hiding and showing the dropdown content * /

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

var count = 0;
var subtractBtn = document.getElementById("minus__counter");
var addBtn = document.getElementById("additional__counter");
var counterelement = document.getElementById("counter");

var result = document.querySelector(".cart__container > div > button")

subtractBtn.addEventListener("click", function(e) {
    count--;
    counterelement.textContent = count;
}, false);


addBtn.addEventListener("click", function(e) {
    count++;
    counter.innerText = count;
}, false);