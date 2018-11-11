const results = document.querySelectorAll(".r a");

for (let i=0; i<results.length; i++) {
	results[i].setAttribute("tabindex", 1);
}