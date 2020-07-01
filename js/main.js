$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})

var taskID = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var rusTaskID = ["А - ", "Б - ", "В - ", "Г - ", "Д - ",
								"Е - ", "Ж - ", "З - ", "И - ", "К - "];
var arrVal = [];

for (var i = 0; i < taskID.length; i++) {
	arrVal[i] = new Array();
	arrVal[i][0] = 0;
	arrVal[i][1] = 1;
	while (arrVal[i][0] < arrVal[i][1]) {
	  document.getElementById(taskID[i] + '1').value = getRandomInt();
	  document.getElementById(taskID[i] + '2').value = getRandomInt();
	  arrVal[i][0] = +document.getElementById(taskID[i] + '1').value;
	  arrVal[i][1] = +document.getElementById(taskID[i] + '2').value;
	}
	if (i < 5) {
		arrVal[i][2] = arrVal[i][0] + arrVal[i][1]; 
	} else {
		arrVal[i][2] = arrVal[i][0] - arrVal[i][1]; 
	}
}

function checkForAlert(arrVal) {
	var strAlert ="Результат:\n";
	for (var i = 0; i < taskID.length; i++) {
		arrVal[i][3] = document.getElementById(taskID[i] + '3').value;	
		if (String(arrVal[i][2]) !== arrVal[i][3]) {
			strAlert += rusTaskID[i] + "Неправильно\n";
		} else {
			strAlert += rusTaskID[i] + "ОК\n";
		}
	}
  return alert(strAlert);
}	
	// Возвращает случайное целое число между min (включительно) и max (не включая max)
function getRandomInt() {
	var min = 1;
	var	max = 10;
  return Math.floor(Math.random() * (max - min)) + min;
}

/* 
  if (window.localStorage) {
	var elements = document.querySelectorAll('[name]');
	}
} */
