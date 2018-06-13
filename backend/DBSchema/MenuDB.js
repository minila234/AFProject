const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PatientViewSchema=new Schema({
    injury:{
        type:String,
        require:true
    },
    visittype:{
        type:String,
        require:true
    },
    iremark:{
        type:String,
        require:true
    },
    Dateandtime:{
        type:String,
        require:true
    },
    doctor:{
        type:String,
        require:true,
    }
});

const Examinationchema=new Schema({
    examinationDateandTime:{
        type:String,
        require:true
    },
    hight:{
        type:Number,
        require:true
    },
    wight:{
        type:Number,
        require:true
    },
    BMI:{
        type:Number,
        require:true
    },
    temp:{
        type:Number,
        require:true
    },
    bloodpreasure:{
        type:Number,
        require:true,
    }
});
const TreatmentSchema=new Schema({
    tretmentDateandTime:{
        type:String,
        require:true
    },
    treatment:{
        type:String,
        require:true
    },
    tremaks:{
        type:String,
        require:true
    },
    active:{
        type:String,
        require:true,
    }
  
});
const InjectionSchema=new Schema({
    injectionDateandTime:{
        type:String,
        require:true
    },
    injection:{
        type:String,
        require:true
    },
    iremaks:{
        type:String,
        require:true,
    }

  
});
mongoose.model('PatientView',PatientViewSchema);//menu
mongoose.model('Examination',Examinationchema);//customer
mongoose.model('Treatment',TreatmentSchema);//customer
mongoose.model('Injection',InjectionSchema);//customer

mongoose.connect('mongodb://127.0.0.1:27017/opd',function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;