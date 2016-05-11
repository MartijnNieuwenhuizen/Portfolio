var mainNav = {
	init: function() {

		var parts = {
			url: window.location.pathname,
			menuItems: document.querySelectorAll('.menu li a')
		};

		return parts

	},
	activeLinks: function() {

		var _parts = this.init();

		for ( i = 0; i < _parts.menuItems.length; i++ ) {

			// if the menu pathname matches the window.pathname set this item to the current item
			if ( _parts.menuItems[i].pathname === _parts.url ) {
				
				_parts.menuItems[i].classList.add('current');

			} else {

				_parts.menuItems[i].classList.remove('current');

			} 

		}

	}
};


module.exports = mainNav;