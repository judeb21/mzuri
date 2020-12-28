'use strict';

var popUp = document.getElementById("pop-up");
var sendMsg = document.getElementById("sendMsg");
// var successMsg = document.getElementById("welcomeBtn");
var formModal = document.getElementById("pop-content");
var successModal = document.getElementById("success-modal");
// var span = document.getElementsByClassName("close")[0];

setTimeout(() => {

    // span.onclick = e => {
    //     document.querySelector('.popUp').classList.remove('visible');
    //     $('#pop-content').removeClass("fadeIn");
    // }

    sendMsg.onclick = e => {
        document.querySelector('.popUp').classList.add('visible');
        $('#pop-content').addClass("fadeIn");
    }

    window.onclick = e => {
        if (e.target == popUp) {
            document.querySelector('.popUp').classList.remove('visible');
            $('#pop-content').removeClass("fadeIn");
        }
    }

}, 2000);

function welcomeBtn() {
    formModal.style.display = "none";
    successModal.style.display = "block";
};