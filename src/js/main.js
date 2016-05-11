'use strict';

var mainNav = require('./modules/main-nav');
var heroImage = require('./modules/hero-image');
var dropdown = require('./modules/dropdown-menu');
var currentTitle = require('./modules/current-title');

var app = {
	launcher: function() {

		mainNav.activeLinks();
		heroImage.getImages();
		dropdown.set();
		currentTitle.set();

	}
};

app.launcher();