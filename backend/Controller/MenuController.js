var mongoose=require('../DBSchema/MenuDB');
var PatientViewSchema = mongoose.model('PatientView');
//var DummyFile = require('./DummyMenu');

var Controller=function () {
    this.insertPatientView=function (data) {
        return new Promise(function (resolve,reject) {
           
            var PatientView=new PatientViewSchema({
                injury: data.injury,
                visittype: data.visittype,
                iremark: data.iremark,
                Dateandtime: data.Dateandtime,
                doctor :data.doctor
               
            });
            console.log("hsjkfkjsdge");
            PatientView.save().then(function () {
               
                resolve({status:200,message:"PatientView inserted successfully !"});

            }).catch(function (err) {
                
                reject({status:500,message:"Error: "+err});
            })
        });
    }
    this.getAllPatient=function () {
        return new Promise(function (resolve,reject) {
            PatientViewSchema.find().exec().then(function (data) {
                resolve({status:200,patientviewdata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    /*this.getDummyData=function () {
        return new Promise(function (resolve,reject) {
            try {
                resolve({status:200,menudata:DummyFile});
            }catch(err) {
                reject({status:404,message:"No data found !"});
            }
        })
    }
    this.getMenu=function(id){
        return new Promise(function (resolve,reject) {
            MenuSchema.find({id:id}).exec().then(function (data) {
                resolve({status:200,menuSearch:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
    this.updateMenu=function (id) {
        return new Promise(function (resolve,reject) {
            MenuSchema.update({id:id}).then(function (data) {
                resolve({status:200,menuUpdated:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found"});
            })
        })
    }
    this.deleteMenu=function (id) {
        return new Promise(function (resolve,reject) {
            MenuSchema.remove({id:id}).then(function (data) {
                resolve({status:200,message:"Successfully Deleted !"});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }*/
};
module.exports = new Controller();