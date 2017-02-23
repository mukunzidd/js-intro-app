var daylight = ["yellow", "orange", "black"]
function passTime(box){
	if (box.id === "morning") {
		document.body.style.background = daylight[0];
		document.getElementById("daylight-title").innerHTML = "Morning";
	} else if (box.id === "afternoon") {
		document.body.style.background = daylight[1];
		document.getElementById("daylight-title").innerHTML = "Afternoon";
	} else if (box.id === "evening"){
		document.body.style.background = daylight[2];
		document.getElementById("daylight-title").innerHTML = "Evening Moise Go to sleep!!!";
	}
}
