var currentTitle = {
	set: function() {

		var HTMLelement = document.querySelector('.menu h1');
		var windowPathname = window.location.pathname;
		var cutPathname = windowPathname.slice(1);

		// If the url contains only one '/'
		if ( windowPathname.slice(1).indexOf("/") == -1 ) {

			var content = cutPathname.slice(0, cutPathname.indexOf(".html"));
			content = currentTitle.replaceIndex(content);
			content = currentTitle.replaceDash(content);
			HTMLelement.innerHTML = content;
			return;
		}

		// If the url contains only one '/'
		var content = cutPathname.slice(0, cutPathname.indexOf("/"));
		content = currentTitle.replaceDash(content);
		HTMLelement.innerHTML = content;

	},

	// Check if there's a '-' in the name and replace if this is true
	replaceDash: function(content) {

		if ( content.indexOf("-") ) {
			content = content.replace("-", " ");
		}
		return content;

	},

	// If the content is index or nothing, replace content with "Hello"
	replaceIndex: function(content) {

		if ( content == "index" || content == "" ) {
			content = "hello"
		}
		return content;

	}
}

module.exports = currentTitle;
