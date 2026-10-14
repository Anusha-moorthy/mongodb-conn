import express from 'express';
import { addProduct, deleteProduct, getProduct, getProductByParams } from '../controller/productController.js';

const route = express.Router()

route.post('/addproduct', addProduct)
route.get('/getproduct', getProduct)
route.get('/getproductbyparams/:productid', getProductByParams)
route.delete('/deleteproduct/:id', deleteProduct)

export default route