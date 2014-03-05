jasmine.Matchers.prototype.toBeAnObject = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be an object';
    };
    return (typeof actual === 'object');
};

jasmine.Matchers.prototype.toBeAFunction = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be a function';
    };
    return (typeof actual === 'function');
};

jasmine.Matchers.prototype.toBeANumber = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be a number';
    };
    return (typeof actual.valueOf()) === 'number';
};
 
jasmine.Matchers.prototype.toBeAString = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be a string';
    };
    return (typeof actual.valueOf()) === 'string';
};

jasmine.Matchers.prototype.toBeABoolean =function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be a boolean';
    };
    return (typeof actual.valueOf()) === 'boolean';
};

jasmine.Matchers.prototype.toBeAnArray = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be an array';
    };
    return (actual instanceof Array);
};

jasmine.Matchers.prototype.toBeAnObject = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be an object';
    };
    return (typeof actual === 'object');
};

jasmine.Matchers.prototype.toBeNaN = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be NaN';
    };
    return (actual !== actual);
};

jasmine.Matchers.prototype.toBeInfinity = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be infinite';
    };
    return ((typeof actual.valueOf() === 'number') && (!isFinite(actual)));
};

jasmine.Matchers.prototype.toBeAnInteger = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be an integer';
    };
    return ((typeof actual.valueOf() === 'number') && (Math.floor(actual.valueOf()) === actual.valueOf()));
};

jasmine.Matchers.prototype.toBeABoolean = function() {
    var actual = this.actual;
    this.message = function() {
        return 'Expected ' + actual + ' to be a boolean';
    };
    return (typeof actual.valueOf()) === 'boolean';
};

(function() {
	var toBeA = function(expected) {
		var actual = this.actual;
		this.message = function() {
			return 'Expected ' + actual + ' to be of type ' + expected;
		};
		return (actual instanceof expected);
	};
    jasmine.Matchers.prototype.toBeA = toBeA;
    jasmine.Matchers.prototype.toBeAn = toBeA;
}());