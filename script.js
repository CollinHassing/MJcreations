$(document).ready(function() {
	//Main IMG Modal
var modal = document.getElementById('imgModal');
var innerImg = document.getElementById('innerImg');
modal.onclick = function() { 
    modal.style.display = "none";
	}
$('img').on('click', function () {
    modal.style.display = "block";
	innerImg.src = this.src;
	});
});
