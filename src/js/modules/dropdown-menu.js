var dropdown = {
	init: function() {

		var parts = {
			dropdownButton: document.querySelector('#menu-button'),
			dropdownMenu: document.querySelector('.menu nav ul')
		}

		return parts;

	},
	set: function() {

		setTimeout(function() {
			var _parts = dropdown.init();

			_parts.dropdownMenu.classList.add('collaped-menu');
			_parts.dropdownButton.classList.add('uncross');

			_parts.dropdownButton.addEventListener('click', dropdown.toggle, false);
		},100 );

	},
	toggle: function() {

		var _parts = dropdown.init();

		_parts.dropdownMenu.classList.toggle('collaped-menu');
		_parts.dropdownMenu.classList.toggle('uncollaped-menu');

		_parts.dropdownButton.classList.toggle('cross');
		_parts.dropdownButton.classList.toggle('uncross');

	}
}

module.exports = dropdown;