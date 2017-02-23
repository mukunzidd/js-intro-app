var sum = 0;

function add(number){
	if (number === "Reset") {
		sum = 0;
	} else
	sum+= number;
	document.getElementById("printout").innerHTML = sum;
}