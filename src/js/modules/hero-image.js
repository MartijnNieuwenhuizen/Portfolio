var heroImage = {
	getImages: function() {

		var heroImage = document.querySelectorAll('.hero-img');
		if( heroImage.length ) {

			for ( i = 0; i < heroImage.length; i++ ) {

				var _this = heroImage[i];
				this.pullImage(_this);

			}

		}

	},
	pullImage: function(el) {

		var _this = el;
		var difference = _this.offsetLeft;

		_this.style.marginLeft = '-' + difference + 'px';

	}
}

module.exports = heroImage;