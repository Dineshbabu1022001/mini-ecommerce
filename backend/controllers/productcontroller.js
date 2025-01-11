const ProductModel= require('../models/productModel');
//get products api - /api/vi/products
exports.getProducts = async (req, res, next) => {
   const query = req.query.keyword?{ name : { 
    $regex: req.query.keyword,
    $options: 'i'
 }}:{}
 const products = await ProductModel.find(query);
    res.json({
        success: true,
        products
    })
}
//get single products api - /api/vi/products/:id
exports.getSingleProduct = async (req, res, next) => {
    try { 
    const product = await ProductModel.findById(req.params.id);
    res.json({
        success: true,
        product
    })
} catch (error) {
        res.status(400).json({
            success: false,
            message: 'Unable to Get Product With that ID'
        })
}
}