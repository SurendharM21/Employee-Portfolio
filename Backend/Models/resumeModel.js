const mongoose=require('mongoose')
const resumeSchema = mongoose.Schema(
    {
        name:{
            type : String,required: true
        },
        email:{
            type:String,required: true
        },
        role:{
            type:String ,required: true
        },
        bio:{
            type:String,required: true
        },
        imagePath:
        {
         type:String,required: true
        },
       
        resp:
        {
            type:String,required: true
        },
        int:
        {
            type:String,required:true
        },
        tag:
        {
            type:String,required:true
        },
        exp:
        {
            type:String,required:true
        },
        phone:
        {
            type:String,required:true
        },
        skills: [{ type: String }],
    }
)
module.exports =mongoose.model("resume",resumeSchema);