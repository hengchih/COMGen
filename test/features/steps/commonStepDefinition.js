var commonStepDefinition = function () {
    var Given = When = Then = this.defineStep;

    /*------------------------ Given ------------------------*/

    Given(/瀏覽"([^"]*)"頁面/, function (type, callback) {
        var stand, Stand, type = type.replace(/\s/g, '');
        switch (true) {
            case (/^test/i.test(type)):
                Stand = require(constants.PO.test);
                break;
        }//end switch

        stand = new Stand();
        this.stand = stand;

        stand.go().then(
            function () {
                callback();
            },
            function () {
                callback();
            }
        )
    });

    /*------------------------ Then -------------------------*/
    Then(/"([^"]*)"必須存在/, function(key, callback){
       this.stand.isExist(key).then(
           function(flag) {
               expect(flag, key + ' missing').to.be.true;
           }
       ).then(callback, callback);
    });

};

module.exports = commonStepDefinition;