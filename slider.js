var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var x = document.getElementById("myRange").value;
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
	console.log(slider.value)
}
