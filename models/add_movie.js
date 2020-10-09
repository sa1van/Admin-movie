const mongoose=require('mongoose')


const movie=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    direction:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    starttime:{
        type:String,
    },
    endtime:{
        type:String,
    },
    ticketprice:{
        type:String,
    },
    totaltickets:{
        type:String,
    },
})


module.exports=mongoose.model('movie',movie);
