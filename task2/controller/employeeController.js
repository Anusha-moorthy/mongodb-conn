import Employee from "../models/Employee.js"

export const addEmployee = async (req,res)=>{

    const{name,department,salary,email} = req.body

    if(name == "" || department == "" || salary == "" || email == "") {
        res.status(401).json({msg:"Please fill the details"})
        return
    }
    if(salary <= 0) {
        res.status(400).json({msg:"Salary must be greater than 0"})
        return
    }
    const data = await Employee.create({name,department,salary,email})
    res.status(201).json({msg:"Successfully Created", data})
}

export const getEmployee = async(req,res)=>{
    const getdata = await Employee.find()
    res.status(200).json({msg:"Successfully Done", getdata})
}

export const getEmployeeByParams = async(req,res)=>{
    const{employeeid} = req.params
    const getdatabyparams = await Employee.findById(employeeid)
    res.status(200).json({msg:"Successfully Done", getdatabyparams})
}

export const deleteEmployee = async(req,res)=>{
    const{id} = req.params
    const deleteemployeeid = await Employee.findByIdAndDelete(id)
    res.status(200).json({msg:"Deleted Successfully", deleteemployeeid})
}