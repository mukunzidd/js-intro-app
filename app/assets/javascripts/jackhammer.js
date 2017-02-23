// One Time Win
// function jackhammer(){
// 	alert('YOU WIN HOSS!!!');
// }

// Five times you win
var colors = ["red", "black", "green", "orange", "cyan"];
		clicks = 1;
function jackhammer(box){
	box.style["background-color"] = colors[(Math.floor(Math.random()*colors.length))];
	if (clicks === 5) {
		document.body.style.background = "teal";
		alert('YOU WIN HOSS 5 Clicks!!!');
	} else 
	clicks++;
	console.log('Way to go hoss! Keep clicking Jack...');
}

