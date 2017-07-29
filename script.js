$(document).ready(function() {
	//Main IMG Modal
var modal = document.getElementById('imgModal');
var innerImg = document.getElementById('innerImg');

$('img').on('click tap', function () {
    modal.style.display = "block";
	innerImg.src = this.src;
});


modal.onclick = function() { 
    modal.style.display = "none";
	}
}
