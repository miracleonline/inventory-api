const express = require('express'); 
const router = express.Router(); 
const { 
getAllOrders, createOrder, 
getOrderById, deleteOrder 
} = require('../controllers/orderController'); 
const { protect } = require('../middlewares/authMiddleware'); 

router.get('/', protect, getAllOrders); 
router.post('/', protect, createOrder); 
router.get('/:id', protect, getOrderById); 
router.delete('/:id', protect, deleteOrder); 
module.exports = router; 