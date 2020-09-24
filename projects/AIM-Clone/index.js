
var oldstyle = true;
var button = document.querySelector("button");

button.addEventListener('click', (e)=> {
	e.preventDefault;
	if(oldstyle){
		// console.log("old")
		document.getElementById("logo").setAttribute("src", "imgs/aol.jpg");
		document.getElementById("page-style")
				.setAttribute("href", "old.css");
		document.getElementById('username').textContent="ScreenName";
		document.getElementById('text').textContent="Get a Screen Name";
		oldstyle = false;

	 }
	 else{
		//  console.log("new")
		document.getElementById("logo").setAttribute("src", "imgs/aol.png");
		document.getElementById("page-style").setAttribute("href", "new.css");
		document.getElementById('username').textContent="username";
		document.getElementById('text').textContent="Get a Username";
		oldstyle = true;
	 }
	
	
	
});

window.onload = document.getElementById("page-style").setAttribute("href", "new.css");



// function swapStyleSheet(style){
// 	document.getElementById("page-style").setAttribute("href", style);
// }
