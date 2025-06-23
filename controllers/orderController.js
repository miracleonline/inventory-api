exports.getAllOrders = async (req, res) => { 
const orders = await Order.find() 
.populate('product', 'name price') 
.populate('user', 'username'); 
res.json(orders); 
}; 
// Create order 
exports.createOrder = async (req, res) => { 
const { product, quantity } = req.body; 
if (!product || !quantity) { 
return res.status(400).json({ message: 'Product and quantity required' 
}); 
} 
const order = await Order.create({ 
product, quantity, user: req.user._id 
}); 
res.status(201).json(order); 
}; 
// Get order by ID 
exports.getOrderById = async (req, res) => { 
const order = await Order.findById(req.params.id) 
.populate('product', 'name price') 
.populate('user', 'username'); 
if (!order) return res.status(404).json({ message: 'Order not found' }); 
res.json(order); 
}; 
// Delete order 
exports.deleteOrder = async (req, res) => { 
const deleted = await Order.findByIdAndDelete(req.params.id); 
if (!deleted) return res.status(404).json({ message: 'Order not found' }); 
res.status(204).send(); 
};