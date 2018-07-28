var salaryCounter = angular.module("salaryCounter", []);

salaryCounter.factory('salaryFactory', function(){
    var toReturn = {};
    toReturn.basicSalary = 0;
    toReturn.houseAllowance = 0;
    toReturn.medicalAllowance = 0;
    toReturn.transportAllowance = 0;
    toReturn.tax = 0;
    toReturn.grossSalary = 0;

    toReturn.calculateSalary = function(){
        toReturn.grossSalary = (toReturn.basicSalary + toReturn.houseAllowance + 
                                toReturn.medicalAllowance + toReturn.transportAllowance) - 
                                toReturn.tax;
    }

    return toReturn;
});

salaryCounter.service('salaryService', function(salaryFactory){
    this.calculateSalary = function(basicSalary, houseAllowance, medicalAllowance, 
                                    transportAllowance, tax){

        salaryFactory.basicSalary = basicSalary;
        salaryFactory.houseAllowance = houseAllowance;
        salaryFactory.medicalAllowance = medicalAllowance;
        salaryFactory.transportAllowance = transportAllowance;
        salaryFactory.tax = tax;

        salaryFactory.calculateSalary();

        return salaryFactory.grossSalary;
    }
});

salaryCounter.controller('salaryController', function($scope, salaryService){
    $scope.calculateSalary = function(){
        $scope.grossSalary = salaryService.calculateSalary($scope.basicSalary, $scope.houseAllowance, 
                            $scope.medicalAllowance, $scope.transportAllowance, $scope.tax);
    }
});