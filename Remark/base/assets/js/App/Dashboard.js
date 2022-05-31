var application = angular.module("DashboardApp", ['ngDragDrop']);


application.controller("DashboardCtrl", function ($scope, $http, $window, $timeout, $interval) {
    //Star
    $scope.LoginDate = localStorage.getItem("LoginDate");
    $scope.ListDataCompany = JSON.parse(localStorage.getItem("DataAssigned"));
    
    if (localStorage.getItem("DataLogin") === null || localStorage.getItem("DataLogin") === "" || localStorage.getItem("DataLogin") === "undefined" || $scope.ListDataCompany === null || $scope.LoginDate === null) {
        //redirect Login
        $window.location.href = "/Home";
    }
    else {
        var datenow = new Date();
        var _sdatenow = ReturDatetoStringymd(datenow);
        if (_sdatenow !== $scope.LoginDate) {
            $window.location.href = "/Home";
        }
    }
    

    $scope.DataUserInfo = JSON.parse(localStorage.getItem("DataLogin"));
    $scope.UserImage = $scope.DataUserInfo[0].UserImage;

    GetMenu(1, $scope.DataUserInfo[0].UserID);

    angular.element(document).ready(function () {

        $scope.DataUserInfo = JSON.parse(localStorage.getItem("DataLogin"));
        // Check if user access is saved in local storage

    });

    $scope.MasterSearchbyEnterKey = function (keyEvent) {
        // Validate if a user Press enter key
        if (keyEvent.keyCode === 13) {
            MasterSearch();
        }
    };

    $scope.Logout = function () {
        DeleteLocalStorage();
        $window.location.href = "/Home";
    };

    $scope.SendDashboard = function () {
        $window.location.href = "/Dashboard/Dashboard";
    };

    $scope.SendPage = function (page) {
        $window.location.href = page;
    };


    function DeleteLocalStorage() {
        localStorage.removeItem("DataLogin");
    }

    function GetMenu(_CompanyID, _UserID) {
        // http reuqest
        $http({
            method: "POST",
            dataType: 'json',
            url: "/Dashboard/GetMenu",
            data: { COMPANYID: _CompanyID, USERID: _UserID },
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            $scope.ListMenu = response.data;
            $scope.ListMainUserMenu = JSON.parse($scope.ListMenu.MainUserMenu);
            $scope.ListMenuTop = JSON.parse($scope.ListMenu.MainMenu);
            $scope.ListMenuAssignment = JSON.parse($scope.ListMenu.MenuAssignment);
            $scope.list = $scope.ListMainUserMenu;
            $scope.ListMainTopFiveLatestPages = JSON.parse($scope.ListMenu.TopFiveLatestPages);
            
        }, function errorCallback(response) {
            console.log(response.data);
        });
    }

    function ReturDatetoStringymd(_date) {

        dd = String(_date.getDate()).padStart(2, '0');
        mm = String(_date.getMonth() + 1).padStart(2, '0');
        yyyy = _date.getFullYear();
        dateString = yyyy + mm + dd;

        return dateString;
    }

});

// Allows Integration whit security script
angular.bootstrap(document.getElementById("js_Dashboard"), ['DashboardApp']);
