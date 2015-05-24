var PageObject;

PageObject = function() {
    this.data = {
        url: ''
    };
    this.selector = {};
};

PageObject.prototype = {
    one: function(key) {
        var s = this.selector[key.replace(/\s/g, '')] || key;
        return $(s);
    },
    go: function(){
        var stand = this;
        return browser.getCurrentUrl().then(
            function(url) {
                browser.get(stand.data.url);
            }
        ).thenCatch(
            function(err){

            }
        ).then(
            function(){
                return stand;
            }
        )
    },
    isExist: function(target){
        var e = this.one(target);
        return browser.wait(
            function() {
                return e.isPresent().then(
                    function(flag){
                        return flag;
                    },
                    function(){
                        return false;
                    }
                )
            }
        , 5000);
    }
};

module.exports = PageObject;