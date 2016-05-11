var currentTitle = {
	set: function() {

		window.onload = function() {

			var HTMLelement = document.querySelector('.menu h1');
			var windowPathname = window.location.pathname;

			if ( windowPathname.slice(1).indexOf("/") == -1 ) {
				
				var cutPathname = windowPathname.slice(1);
				var content = cutPathname.slice(0, cutPathname.indexOf(".html"));

				if ( content.indexOf("-") ) {
					var content = content.replace("-", " ");
				}

				HTMLelement.innerHTML = content;

				return;
			}

			var cutPathname = windowPathname.slice(1);
			var content = cutPathname.slice(0, cutPathname.indexOf("/"));

			if ( content.indexOf("-") ) {
				var content = content.replace("-", " ");
			}

			HTMLelement.innerHTML = content;

		};

	}
}

module.exports = currentTitle;