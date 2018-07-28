var ums = angular.module("ums", ['ngRoute', 'ngMaterial']);

/*
    A directive to enable two way binding of file field
    */
ums.directive('imageUploadModel', function ($parse) {
    return {
        restrict: 'A', //the directive can be used as an attribute only

        /*
            link is a function that defines functionality of directive
            scope: scope associated with the element
            element: element on which this directive used
            attrs: key value pair of element attributes
            */
        link: function (scope, element, attrs) {
            var model = $parse(attrs.imageUploadModel),
                modelSetter = model.assign; //define a setter for demoFileModel

            //Bind change event on the element
            element.bind('change', function () {
                //Call apply on scope, it checks for value changes and reflect them on UI
                scope.$apply(function () {
                    //set the model value
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
});

ums.config(['$routeProvider', function($routeProvider){
    $routeProvider.

    when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    }).

    when('/students', {
        templateUrl: 'Students/index.html',
        controller: 'studentsIndexController'
    }).

    when('/students/:param1', {
        templateUrl: 'Students/details.html',
        controller: 'studentDetailsController'
    }).

    when('/newstudent', {
        templateUrl: 'Students/StudentForm.html',
        controller: 'studentFormController'
    }).

    when('/students/edit/:param1', {
        templateUrl: 'Students/StudentForm.html',
        controller: 'studentFormController'
    }).

    when('/students/delete/:param1', {
        templateUrl: 'Students/index.html',
        controller: 'studentsIndexController'
    }).

    otherwise({
        redirectTo: '/'
    })
}]);

//Setting Global variables which will be used in multiple controllers and setting dummy data.
var degreePrograms = [];
degreePrograms.push({id: 1, name: "Bachelors", shortName: "BS"});
degreePrograms.push({id: 2, name: "Masters", shortName: "MS"});

var studyPrograms = [];
studyPrograms.push({id: 1, name: "Computer Science", shortName: "CS"});
studyPrograms.push({id: 2, name: "Computer Engineering", shortName: "CE"});
studyPrograms.push({id: 3, name: "Software Engineering", shortName: "SE"});

var students = []; //Students Dummy data
students.push({id: 1, rollNumber: "2016-CS-1", enrollmentNumber: "123abcd", name: "Abdullah Shahid", fatherName: "Shahid Jamal", gender: "Male", batchYear: "2016", day: 2, month: 8, year: 1995, placeOfBirth: "Karachi", nationality: "Pakistani", province: "Sindh", cnic: "42101-123456-3", mobileNumber: "03310316702", phoneNumber: "021678911", email: "abdullahshahid95@hotmail.com", address: "R-83, Sector 5, NK", sscBoard: "Board of Seconday Education Karachi", sscTotal: 800, sscObtained: 700, sscSeat: 2123, hscBoard: "Intermediate Board Karachi", hscTotal: 800, hscObtained: 700, hscSeat: 7890, guardianName: "Shahid Jamal", guardianCnic: "2132-123213-1", relation: "Son", occupation: "ABCD", monthlyIncome: 1234, guardianMobile: "0011223344", guardianAddress: "R-83,Sector 5, NK", guardianEmail: "test@test.com", 
    department: "Computer Science", program: "Bachelors", picture: "student1.jpg"});

students.push({id: 2, rollNumber: "2016-CS-2", enrollmentNumber: "456abcd", name: "Bilal Chhipa", fatherName: "Abdul Qayyum Chhippa", gender: "Male", batchYear: "2016", day: 2, month: 23, year: 1995, placeOfBirth: "Karachi", nationality: "Pakistani", province: "Sindh", cnic: "42101-654321-3", mobileNumber: "03310319998", phoneNumber: "021678844", email: "bilal95@hotmail.com", address: "R-12, Gulshan", sscBoard: "Board of Seconday Education Karachi", sscTotal: 800, sscObtained: 700, sscSeat: 2123, hscBoard: "Intermediate Board Karachi", hscTotal: 800, hscObtained: 700, hscSeat: 7890, guardianName: "Abdul Qayyum Chhippa", guardianCnic: "2132-123213-1", relation: "Son", occupation: "ABCD", monthlyIncome: 1234, guardianAddress: "R-83,Sector 5, NK", guardianMobile: "0011223355", guardianEmail: "test@test.com", 
    department: "Computer Science", program: "Bachelors", picture: "student2.jpg"});

var count = 3; //variable for setting id of the student
/////////////////////////////////////////////////////////////////////////////////////////////

ums.controller('homeController', function($scope){
    console.log("Home Controller");
});

ums.controller('studentsIndexController', function($scope, $mdDialog){
    
    //Angular material confirmation dialog box
    $scope.showConfirm = function(event, studentId) {
        var confirm = $mdDialog.confirm()
           .title('Are you sure to delete the student?')
           .textContent('Record will be deleted permanently.')
           .ariaLabel('TutorialsPoint.com')
           .targetEvent(event)
           .ok('Yes')
           .cancel('No');
        $mdDialog.show(confirm).then(function() {
            $scope.deleteStudent(studentId);
            document.getElementById("deleteMessage").classList.remove('hide');
            setTimeout(function () {
                document.getElementById('deleteMessage').classList.add('hide')}, 5000);
        }, function() {
        });
     };

     //Deleting the student
    $scope.deleteStudent = function(id){

        for(var i = 0; i < students.length; i++)
        {
            if(students[i].id == id)
            {
                students.splice(i, 1);
            }
        }
    }

    $scope.students = students;

    console.log("Students Index Controller");
});

ums.controller('studentDetailsController', function($scope, $routeParams){
    $scope.students = students;

    $scope.studentId = $routeParams.param1;

    for(var i = 0; i < $scope.students.length; i++)
    {
        if($scope.students[i].id == $scope.studentId)
            $scope.student = $scope.students[i];
    }

    console.log("Students Details Controller");
});

ums.controller('studentFormController', function($scope, $routeParams){

    $scope.degreePrograms = degreePrograms;
    $scope.studyPrograms = studyPrograms;

    var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        $scope.batchYear = yyyy;
        
        $scope.months = [];
        $scope.days = [];
        $scope.years = [];
        
        for(var i = 1; i <= 12; i++)
        {
            $scope.months.push(i);
        }

        for(var i = 1950; i <= 2018; i++)
        {
            $scope.years.push(i);
        }

        for(var i = 1; i <= 31; i++)
        {
            $scope.days.push(i);
        }

    if(typeof $routeParams.param1 != 'undefined')
    {
        var studentId = $routeParams.param1;
        var studentInDB = {};
        var flag = 0;
        
        students.forEach(student => {
            if(student.id == studentId)
            {
                studentInDB = student;
                flag = 1;
            }
        });

        if(flag == 0)
        {
            window.location.href = "/#!/students";
        }

        degreePrograms.forEach(degreeProgram => {
            if(studentInDB.program == degreeProgram.name)
                $scope.selectedDegreeProgram = degreeProgram;
        });
        studyPrograms.forEach(studyProgram => {
            if(studentInDB.department == studyProgram.name)
                $scope.selectedStudyProgram = studyProgram;
        });

        //Initiallizing the current student values to show in Student Form
        $scope.studentId = studentId;

        $scope.batchYear = studentInDB.batchYear;

        $scope.studentName = studentInDB.name;
        $scope.fatherName = studentInDB.fatherName;
        $scope.gender = studentInDB.gender;

        $scope.selectedDay = studentInDB.day;
        $scope.selectedMonth = studentInDB.month;
        $scope.selectedYear = studentInDB.year;

        $scope.placeOfBirth = studentInDB.placeOfBirth;
        $scope.nationality = studentInDB.nationality;
        $scope.province = studentInDB.province;
        $scope.cnic = studentInDB.cnic;
        $scope.mobileNumber = studentInDB.mobileNumber;
        $scope.phoneNumber = studentInDB.phoneNumber;
        $scope.email = studentInDB.email;
        $scope.address = studentInDB.address;

        $scope.selectedSscBoard = studentInDB.sscBoard;
        $scope.sscTotal = studentInDB.sscTotal;
        $scope.sscObtained = studentInDB.sscObtained;
        $scope.sscSeat = studentInDB.sscSeat;

        $scope.selectedHscBoard = studentInDB.hscBoard;
        $scope.hscTotal = studentInDB.hscTotal;
        $scope.hscObtained = studentInDB.hscObtained;
        $scope.hscSeat = studentInDB.hscSeat;

        $scope.guardianName = studentInDB.guardianName;
        $scope.guardianCnic = studentInDB.guardianCnic;
        $scope.relation = studentInDB.relation;
        $scope.occupation = studentInDB.occupation;
        $scope.monthlyIncome = studentInDB.monthlyIncome;
        $scope.guardianMobile = studentInDB.guardianMobile;
        $scope.guardianAddress = studentInDB.guardianAddress;
        $scope.guardianEmail = studentInDB.guardianEmail;
        ////////////////////////////////////////////////////////////
    }
    else
    {
        $scope.studentId = 0;
        $scope.selectedDegreeProgram = $scope.degreePrograms[0];

        $scope.selectedStudyProgram = $scope.studyPrograms[0];

        $scope.selectedMonth = $scope.months[0];
        $scope.selectedDay = $scope.days[0];
        $scope.selectedYear = $scope.years[0];

        $scope.selectedSscBoard = "Board of Seconday Education Karachi";
        $scope.selectedHscBoard = "Intermediate Board Karachi";
    }

    $scope.saveStudent = function(isValid){
        console.log("adassad here");
        if($scope.studentId != 0)
        {

            students.forEach(student => {
                if(student.id == $scope.studentId)
                {
                    student.batchYear = $scope.batchYear;

                    student.name = $scope.studentName;
                    student.fatherName = $scope.fatherName;
                    student.gender = $scope.gender;

                    student.day = $scope.selectedDay;
                    student.month = $scope.selectedMonth;
                    student.year = $scope.selectedYear;

                    student.placeOfBirth = $scope.placeOfBirth;
                    student.nationality = $scope.nationality;
                    student.province = $scope.province;
                    student.cnic = $scope.cnic;
                    student.mobileNumber = $scope.mobileNumber;
                    student.phoneNumber = $scope.phoneNumber;
                    student.email = $scope.email;
                    student.address = $scope.address;

                    student.sscBoard = $scope.selectedSscBoard;
                    student.sscTotal = $scope.sscTotal;
                    student.sscObtained = $scope.sscObtained;
                    student.sscSeat = $scope.sscSeat;

                    student.hscBoard = $scope.selectedHscBoard;
                    student.hscTotal = $scope.hscTotal;
                    student.hscObtained = $scope.hscObtained;
                    student.hscSeat = $scope.hscSeat;

                    student.guardianName = $scope.guardianName;
                    student.guardianCnic = $scope.guardianCnic;
                    student.relation = $scope.relation;
                    student.occupation = $scope.occupation;
                    student.monthlyIncome = $scope.monthlyIncome;
                    student.guardianMobile = $scope.guardianMobile;
                    student.guardianAddress= $scope.guardianAddress;
                    student.guardianEmail= $scope.guardianEmail;
                }
            });

            window.location.href = "/#!/students";
            alert("Changes Saved.");
        }
        else
        {
            var total = 0;
            for(var i = 0; i < students.length; i++)
            {
                if(students[i].program == $scope.selectedDegreeProgram.name && students[i].department == $scope.selectedStudyProgram.name && 
                    students[i].batchYear == $scope.batchYear)
                    {
                        total = total + 1;
                    }
            }

            var rollNumberv = $scope.batchYear + "-" + 
            $scope.selectedStudyProgram.shortName + "-" + total + 1;

            students.push({id: count, rollNumber: rollNumberv, enrollmentNumber: "456abcd", 
            name: $scope.studentName, fatherName: $scope.fatherName, gender: $scope.gender, 
            batchYear: $scope.batchYear, day: $scope.selectedDay, month: $scope.selectedMonth, 
            year: $scope.selectedYear, placeOfBirth: $scope.placeOfBirth, 
            nationality: $scope.nationality, province: $scope.province, cnic: $scope.cnic, 
            mobileNumber: $scope.mobileNumber, phoneNumber: $scope.phoneNumber, email: $scope.email,
            address: $scope.address, sscBoard: $scope.selectedSscBoard, 
            sscTotal: $scope.sscTotal, sscObtained: $scope.sscObtained, sscSeat: $scope.sscSeat, 
            hscBoard: $scope.selectedHscBoard, hscTotal: $scope.hscTotal, hscObtained: $scope.hscObtained, 
            hscSeat: $scope.hscSeat, guardianName: $scope.guardianName, 
            guardianCnic: $scope.guardianCnic, relation: $scope.relation, occupation: $scope.occupation, 
            monthlyIncome: $scope.monthlyIncome, guardianMobile: $scope.guardianMobile,
            guardianAddress: $scope.guardianAddress, guardianEmail: $scope.guardianEmail, 
            department: $scope.selectedStudyProgram.name, program: $scope.selectedDegreeProgram.name, 
            picture: "student2.jpg"});

            window.location.href = "/#!/students";
            alert("Student Added.");
        }
    }
    console.log("Students Form Controller");
});