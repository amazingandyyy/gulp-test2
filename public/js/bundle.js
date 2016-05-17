///////////////////////module///////////////////////

'use strict';

var app = angular.module('gulpApp', []);

///////////////////////over///////////////////////


///////////////////////mainCtrl///////////////////////

'use strict';

var app = angular.module('gulpApp');

app.controller('mainCtrl', function($scope) {
    console.log('mainCtrl loaded');

    $scope.alert = () => {
        alert('ALERT!');
    }
})

///////////////////////over///////////////////////
