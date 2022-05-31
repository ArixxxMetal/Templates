var application = angular.module("IndexApp", []);

application.controller("IndexCtrl", function ($scope, $http, $window, $timeout) {
    //Variables
    $scope.Login = {};

    $scope.Login.User = "";
    $scope.Login.Password = "";

    $scope.invalidAccess = false;

    angular.element(document).ready(function () {
        //Alertify
        //override defaults
        alertify.defaults.transition = "slide";
        alertify.defaults.theme.ok = "btn btn-primary";
        alertify.defaults.theme.cancel = "btn btn-danger";
        alertify.defaults.theme.input = "form-control";

        $scope.LoginDate = localStorage.getItem("LoginDate");
        
        $scope.ListDataCompany = JSON.parse(localStorage.getItem("DataAssigned"));


        // Check if user access is saved in local storage
        if ((localStorage.getItem("DataLogin") !== null & localStorage.getItem("DataLogin") !== "" & localStorage.getItem("DataLogin") !== "undefined") && $scope.ListDataCompany !== null && $scope.LoginDate !== null) {
            var datenow = new Date();
            var _sdatenow = ReturDatetoStringymd(datenow);
            if (_sdatenow === $scope.LoginDate) {
                //redirect Dashboard
                $window.location.href = "Dashboard/Dashboard";
            }
        }
    });

    $scope.PasswordEnterKey = function (keyEvent,validation) {
        // Validate if a user Press enter key
        if (keyEvent.keyCode === 13 && validation) {
            fSignIn();
        }
    };

    $scope.btnSignIn = function (validation) {
        
        if (validation) {
            fSignIn();
        }
    };

    function fSignIn() {
        $scope.invalidAccess = false;        

        // http reuqest
        $http({
            method: "POST",
            dataType: 'json',
            url: "/Home/Validation_Login",
            data: { USER: $scope.Login.User, PASSWORD: $scope.Login.Password },
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            
            // Get Companies List
            $scope.validationLogin = response.data;
            // Valdiate List Bulk Movements exists
            if ($scope.validationLogin.InvalidLogin === 1) {
                //Send Error                
                if ($scope.validationLogin.UserInfo !== null && $scope.validationLogin.CompaniesAssigned !== null) {
                    localStorage.setItem("DataLogin", $scope.validationLogin.UserInfo);
                    localStorage.setItem("DataAssigned", $scope.validationLogin.CompaniesAssigned);
                    localStorage.setItem("LogSessionID", $scope.validationLogin.LogSessionID);
                    localStorage.setItem("LoginDate", $scope.validationLogin.LoginDate);
                    
                    $window.location.href = "Dashboard/Dashboard";
                    
                }
                else {
                    if ($scope.validationLogin.UserInfo === null) {
                        alertify.error('User is not registered, please request them with System',5);
                        //alertify.confirm('User is not registered, please request them with System', function () { alertify.success('Ok') });
                        console.log('User is not registered');
                    }
                    if ($scope.validationLogin.CompaniesAssigned === null) {
                        alertify.error('The user does not have authorization for the company, please request them with System',5);
                        //alertify.confirm('The user does not have authorization for the company, please request them with System', function () { alertify.success('Ok') });
                        console.log('User does not have authorization for company');
                    }
                }
            }
            // End validaiton
            else {
                $scope.invalidAccess = true;        
            }
        }, function errorCallback(response) {
            console.log(response.data);
        });
        // End http reuqest        
       
    }

    function ReturDatetoStringymd(_date) {

        dd = String(_date.getDate()).padStart(2, '0');
        mm = String(_date.getMonth() + 1).padStart(2, '0');
        yyyy = _date.getFullYear();
        dateString = yyyy + mm + dd;

        return dateString;
    }

});