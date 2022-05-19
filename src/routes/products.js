const { Router } = require ('express');
const router = Router();
const { allInOne, newProduct, getAll, getById,  createProduct, updateProduct, deleteProduct} = require ('../controllers/task.controller')

// habilitado para usr y adm
router.get('/', allInOne);
router.get('/:id?', getById);
router.get('/productCreate', (req, res)=>{
    res.render('newProduct')
})

// habilitados solo para adm
router.post('/', createProduct);
router.put('/:id?', updateProduct);
router.delete('/:id?', deleteProduct);

module.exports = router; 