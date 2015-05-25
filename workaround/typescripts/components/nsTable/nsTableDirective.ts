/// <reference path="../../../Scripts/typings/angularjs/angular.d.ts"/>
module NineYi {
    angular.module('NineYi', ['NineYi.Directives']);
}

module NineYi.Directives {
    interface ITableDirectiveScope extends ng.IScope {
        //onChange: (data:{ value: string }) => void;
    }

    angular.module('NineYi.Directives',[])
        .directive('nsTable', ():ng.IDirective => {
            return {
                restrict: 'EA',
                templateUrl: '/COMGen/workaround/Typescripts/Components/nsTable/nsTableTemplate.html',
                scope:{},
                link: function (scope:ITableDirectiveScope, element, attrs) {
                    console.log('table');
                }
            };
        });
}

