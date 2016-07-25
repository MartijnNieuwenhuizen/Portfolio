var prime = {};

prime.set = function() {

    if ( document.querySelector('.about') ) {

        var checkPrimeForm = document.querySelector('#check-prime');
        checkPrimeForm.onsubmit = function(e) {

            var inputField = checkPrimeForm.children[1];

            if (inputField.value.length) {

                var value = inputField.value;
                prime.check(value, inputField);

            }

            e.preventDefault();

        }

    }

}

prime.check = function(value, inputField) {

    var _value = value;
    var _inputField = inputField;

    var answer = prime.getAnswer(_value);
    if ( answer == true ) {
        _inputField.classList.add('right');
        _inputField.classList.remove('wrong');
    } else {
        _inputField.classList.add('wrong');
        _inputField.classList.remove('right');
    }

}

prime.getAnswer = function(value ) {

    var start = 2;
    while (start <= Math.sqrt(value)) {
        if (value % start++ < 1) return false;
    }
    return true;

}

module.exports = prime;
