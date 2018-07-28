



var mongoose = require('mongoose');
// var connection = mongoose.createConnection('mongodb://qmz:qmz@ds137729.mlab.com:37729/mean_todoapplication');
// var db = mongoose.connection;

// db.once('open', function(){
	
// 	var productQCSetupSchema = mongoose.Schema({

//     "Category" : String, 
// 	"ModuleName" : String,
// 	"Status" : Boolean,
//     "QualityAssurance" : {
// 		"Product" : String,
// 		"Frequency" : String,
// 		Tests : [{
// 			Title : String,
// 			Quantity : Number,
// 			Symbol : String,
// 			Cutoffs :String ,
// 			Unit : String,
// 			PassPercentage  : Number,
// 			Status : Boolean
// 		}],
// 		Alert : {
// 			AssignedTo : {
// 				id: String,
// 				user_name : String
// 			},
// 			Frequency : String,
// 			QCTimeLine : Number,
// 			AlertsType : [],
// 			Level1 : {
// 				IsBefore : Boolean,
// 				Days : Number,
// 				Hours : Number,
// 				Users : [{id:String,user_name:String}],
// 				EmailSetup : {
// 					Subject : String,
// 					Template : String
// 				}
// 			},
// 			Level2 : {
// 				IsBefore : Boolean,
// 				Days : Number,
// 				Hours : Number,
// 				Users : [{id:String,user_name:String}],
// 				EmailSetup : {
// 					Subject : String,
// 					Template : String
// 				}
// 			}, 
// 			Level3 : {
// 				IsBefore : Boolean,
// 				Days : Number,
// 				Hours : Number,
// 				Users : [{id:String,user_name:String}],
// 				EmailSetup : {
// 					Subject : String,
// 					Template : String
// 				}
// 			}
// 		}
//     }
// });
// 	// var productQCSetupModel = mongoose.model('productQCSetupModel', productQCSetupSchema);
// 	console.log("Schema Found");
// 	module.exports.productQCSetupModel = mongoose.model('productQCSetupModel', productQCSetupSchema);
// });
var personSchema = mongoose.Schema({
	
	admission : [{
		Enrollment : String,
		FirstName : String,
		LastName :String,
		Male : String,
		Female :String,
		date : String,
		ContactNo : String,
		Adress1 : String,
		Adress11 : String,
		Contry : String,
		Nationlaty : String,
		Religion : String,
		City : String,
       FatherName : String,
	   FatherContact : String,
	   FatherQualification: String,
	   NatureJob : String,
	   NameCompany : String,
	   Desination : String,
	   ClassLast  : String,
	   Schoolfielsd : String,
	   Department : String,
       GradeObtain : String,
	   SchollCollege : String,
	   SchoolAdrees : String,
	   SchoolContact : String,
	   Sprinciple : String
    


			// Title : String,
			// Quantity : Number,
			// Symbol : String,
			// Cutoffs :String ,
			// Unit : String,
			// PassPercentage  : Number,
			// Status : Boolean
		}],
    name: String,
    age: Number,
    nationality: String
});
console.log("Schema Found");
module.exports.Home = mongoose.model('Home', personSchema);
//var Person = mongoose.model("Person", personSchema);





