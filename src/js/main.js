import sum from './module/sum.js';
console.log(sum(2, 10));
console.log(sum(12, 5));

document.getElementById('include-date').innerText = new Date().toLocaleDateString();


/*Если я захочу изменить какое-то css сво-во в js, то мне потребуется прописать 
вот этот синтаксис: document.getElementById(id).style.color = "blue"  */

function myFunction() {
    document.getElementById("button-none_sms").style.display = "block";
    document.getElementById("button-none_setting").style.display = "block";
    document.getElementById("button-none_bin").style.display = "block";
    document.getElementById("button-none_sent").style.display = "block";
}

document.getElementById("button-close_sms").addEventListener("click", myFunction);
document.getElementById("button-close_setting").addEventListener("click", myFunction);
document.getElementById("button-close_bin").addEventListener("click", myFunction);
document.getElementById("button-close_sent").addEventListener("click", myFunction);

function myFunctionclose() {
    document.getElementById("button-none_sms").style.display = "none";
    document.getElementById("button-none_setting").style.display = "none";
    document.getElementById("button-none_bin").style.display = "none";
    document.getElementById("button-none_sent").style.display = "none";
}

document.getElementById("close-button_sms").addEventListener("click", myFunctionclose);
document.getElementById("close-button_setting").addEventListener("click", myFunctionclose);
document.getElementById("close-button_bin").addEventListener("click", myFunctionclose);
document.getElementById("close-button_sent").addEventListener("click", myFunctionclose);



