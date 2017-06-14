function hidehtmlcssgal () {
	document.getElementsByClassName("htmlcss")[0].style.display="none";
	document.getElementsByClassName("htmlcss")[1].style.display="none";
	document.getElementsByClassName("jquery")[0].style.display="block";
	document.getElementsByClassName("jquery")[1].style.display="block";
}

function hidejquerygal () {
	document.getElementsByClassName("htmlcss")[0].style.display="block";
	document.getElementsByClassName("htmlcss")[1].style.display="block";
	document.getElementsByClassName("jquery")[0].style.display="none";
	document.getElementsByClassName("jquery")[1].style.display="none";
}
