
function bigger() {
    document.getElementById("ftext").style.fontSize = "24pt";
}

function bolding() {
    var text = document.getElementById("ftext");
    if (document.getElementById("bold").checked) {
        text.style.fontWeight = "bold";
		text.style.textDecoration = "underline";
        text.style.color = "blue";
    } else {
        text.style.fontWeight = "normal";
        text.style.textDecoration = "none";
        text.style.color = "black";
    }
}
function normal(){
	var text = document.getElementById("ftext");
	document.getElementById("ftext").style.fontSize = "11pt";
	text.value = text.value.replace("Moo",".");
	text.value = text.value.toLowerCase();
	document.getElementById("bold").checked = false;
	bolding();
}
function fancy() {
    var text = document.getElementById("ftext");
    text.value = text.value.toUpperCase();
    text.value = text.value.split(".").join("Moo");
}
