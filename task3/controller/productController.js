import Product from "../models/Product.js"

export const addProduct = async(req,res)=>{

    try {
        const{productName,price,category,stock} = req.body
    
        if(productName == "" || price == "" || category == "" || stock == "") {
            res.status(401).json({msg:"Please provide details"})
            return
        }
        if(price <= 0) {
            res.status(401).json({msg:"Price must be greater than 0"})
            return
        }
        if(stock < 0) {
            res.status(401).json({msg:"Stock cannot be negative"})
            return
        }
    
        const data = await Product.create({productName,price,category,stock})
        res.status(201).json({msg:"Created Successfully", data})
    } catch (error) {

        console.log('error',error);
        
    }
}

export const getProduct = async(req,res)=>{

    const getdata = await Product.find()
    res.status(200).json({msg:"Successfully Done", getdata})
    
}

export const getProductByParams = async(req,res)=>{
    const{productid} = req.params
    const getdatabyid = await Product.findById(productid)
    res.status(200).json({msg:"Successfully Done", getdatabyid})

}

export const deleteProduct = async(req,res)=>{
    const{id} = req.params
    const getdatabyid = await Product.findByIdAndDelete(id)
    res.status(200).json({msg:"Deleted Successfully"})

}