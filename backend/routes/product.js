const express = require('express');
const { getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct, getAdminProducts } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get( getProducts);
router.route('/product/:id')
                            .get(getSingleProduct);
            
//Admin routes
router.route('/admin/product/new').post(newProduct);
router.route('/admin/products').get(getAdminProducts);
router.route('/admin/product/:id').delete( deleteProduct);
router.route('/admin/product/:id').put(updateProduct);

module.exports = router;