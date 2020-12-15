const results = document.querySelectorAll('.LC20lb');

for (let i=0; i<results.length; i++) {
	const linkNode = results[i].closest('a');
	linkNode.setAttribute('tabindex', 1);
}

// capture focus changes on results list to scroll entire result into view
document.getElementById('res').addEventListener("focus", e => {
	// only perform scroll if newly focused element is result link
	if (e.target.getAttribute('tabindex') === '1') {
		const resultNode = e.target.closest('.g');
		const bounds = resultNode.getBoundingClientRect();
		// scroll item to top if it extends past viewport top,
		// or to bottom if it extends past viewport bottom
		if (bounds.top < 0) {
			resultNode.scrollIntoView();
		} else if (bounds.bottom > window.innerHeight) {
			resultNode.scrollIntoView(false);
		}
	}
}, true);
