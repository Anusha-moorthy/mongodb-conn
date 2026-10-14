import Course from "../models/Course.js"

export const addCourse = async(req,res)=>{
    try {
        
        const{courseName,trainerName,duration,fees} = req.body

        if(courseName == "" || trainerName == "" || duration == "" || fees == "") {
            res.status(401).json({msg:"Please fill the details"})
            return
        }
        if(fees <= 0) {
            res.status(400).json({msg:"Fees must be greater than 0"})
            return
        }
        const data = await Course.create({courseName,trainerName,duration,fees})
        res.status(201).json({msg:"Created Successfully", data})

    } catch (error) {
        console.log('error',error);
        
    }
}

export const getCourse = async(req,res)=>{
    try {
        const getdata = await Course.find()
        res.status(200).json({msg:"Successfully Done", getdata})
    } catch (error) {
        console.log('error',error);
        
    }
}

export const getCourseByParams = async(req,res)=>{
    try {
        const{courseid} = req.params
        const getcourseid = await Course.findById(courseid)
        res.status(200).json({msg:"Successfully Done", getcourseid})
    } catch (error) {
        console.log('error',error);
        
    }
}

export const deleteCourse = async(req,res)=>{
    try {
        const{id} = req.params
        const getdeleteid = await Course.findByIdAndDelete(id)
        res.status(200).json({msg:"Deleted Successfully"})
    } catch (error) {
        console.log('error',error);
        
    }
}