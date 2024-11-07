const roomlist = require('../models/Roomlist');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const APIFeatures = require('../utils/apiFeatures');

exports.getroomlist = catchAsyncError(async (req, res, next)=>{
    const resPerPage = 40;
    
    let buildQuery = () => {
        return new APIFeatures(roomlist.find(), req.query).search().filter()
    }
    
    const filteredProductsCount = await buildQuery().query.countDocuments({})
    const totalProductsCount = await roomlist.countDocuments({});
    let productsCount = totalProductsCount;

    if(filteredProductsCount !== totalProductsCount) {
        productsCount = filteredProductsCount;
    }
    
    const roomlists = await buildQuery().paginate(resPerPage).query;

    res.status(200).json({
        success : true,
        count: productsCount,
        resPerPage,
        roomlists
    })
})


exports.newrooms = catchAsyncError(async (req, res, next)=>{
   
    let BASE_URL = process.env.BACKEND_URL;
    if(process.env.NODE_ENV === "production"){
        BASE_URL = `${req.protocol}://${req.get('host')}`
    }
  
    const product = await roomlist.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});


exports.deleteRoom = catchAsyncError(async (req, res, next) =>{
    const product = await roomlist.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: "rooms not found"
        });
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Room Deleted!"
    })

})