import Student from "../models/Student.js"

export const addData = async (req,res)=>{

    try {
        const { name, email, age, course } = req.body
        if(name == "" || email == "" || age == "" || course == "") {
            res.status(401).json({msg:"Please fill the details"})
            return
        }
        if(age <= 18){
            res.status(401).json({msg:"Age must be 18 or above"})
            return
        }
        const data = await Student.create({name,email,age,course})
        res.status(201).json({msg:"Successfully Created", data})
    } catch (error) {
        console.log('error',error);
    }

}

export const getStudent = async(req,res)=>{
    try {

        const getData = await Student.find()
        res.status(200).json({msg:"Successfully Done", getData})
        
    } catch (error) {
        console.log('error',error);
    }
}
export const getStudentByParams = async(req,res)=>{
    try {
     
        const{studentid} = req.params
    
        const getdatabyid = await Student.findById(studentid)
        res.status(200).json({msg:"Successfully Done", getdatabyid})
        
    } catch (error) {
        console.log('error',error);
    }
}
export const deleteStudent = async(req,res)=>{
    try {
        
        const{id} = req.params
        
        const deletebyid = await Student.findByIdAndDelete(id)
        res.status(200).json({msg:"Deleted Successfully"})
        
    } catch (error) {
        console.log('error',error);
    }
}