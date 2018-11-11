const results = document.querySelectorAll(".LC20lb");

for (let i=0; i<results.length; i++) {
	const linkNode = results[i].closest('a');
	linkNode.setAttribute("tabindex", 1);
}