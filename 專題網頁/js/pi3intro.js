var card1 = document.getElementById("introcard1");
var show1 = document.getElementById("icon1");
var card2 = document.getElementById("introcard2");
var show2 = document.getElementById("icon2");
var card3 = document.getElementById("introcard3");
var show3 = document.getElementById("icon3");
var card4 = document.getElementById("introcard4");
var show4 = document.getElementById("icon4");





show1.addEventListener('click', function () {
    card1.style.display = "block";

});


var span = document.getElementById("close1");
span.onclick = function () {
    card1.style.display = "none";
}


show2.addEventListener('click', function () {
    // console.log('被點到');
    card2.style.display = "block";


});



var span1 = document.getElementById("close2");
span1.onclick = function () {
    card2.style.display = "none";
}

show3.addEventListener('click', function () {
    // console.log('被點到');
    card3.style.display = "block";


});



var span3 = document.getElementById("close3");
span3.onclick = function () {
    card3.style.display = "none";
}


show4.addEventListener('click', function () {
    // console.log('被點到');
    card4.style.display = "block";


});


var span4 = document.getElementById("close4");
span4.onclick = function () {
    card4.style.display = "none";
}
