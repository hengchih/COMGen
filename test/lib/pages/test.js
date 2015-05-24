var Test;

Test = function() {
    PageObject.call(this);

    this.data.url = constants.DOMAIN + '/test.html';

    this.selector = {
        wrapper: '#wrapper'
    }
};

Test.prototype = Object.create(PageObject.prototype);

module.exports = Test;