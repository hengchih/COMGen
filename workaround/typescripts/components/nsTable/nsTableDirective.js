/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    angular.module('NineYi', ['NineYi.Directives']);
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Directives;
    (function (Directives) {
        angular.module('NineYi.Directives', []).directive('nsTable', function () {
            return {
                restrict: 'EA',
                templateUrl: '/COMGen/workaround/Typescripts/Components/nsTable/nsTableTemplate.html',
                scope: {},
                link: function (scope, element, attrs) {
                    console.log('table');
                }
            };
        });
    })(Directives = NineYi.Directives || (NineYi.Directives = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=nsTableDirective.js.map