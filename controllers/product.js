const Product = require('../models/product')

const getProducts = async (req, res) => {
    sort=1;
    const products = await (await Product.find({deleted: false}).sort({_id:`${sort}`})).slice(6).reverse()
    // res.status(200).json({ok:true, data: products, count: products.length})

    // products.update({deleted: "false"}, {$set: {deleted: "true"}}).then(res => console.log({res}))

    res.status(200).json({products})
    }

const createProduct = (req, res) => {
    if(!req.body.name){
        res.status(400).json({
            ok:false,
            message:'El campo Nombre del producto es obligatorio'
        })
        return
    }
        const newProduct = new Product(req.body)
         newProduct
             .save()
             .then( (product) => {
             res.status(201).json({ok: true, product})
             console.log(product)
              })
             .catch((err) => console.log(err))
            // next()
     }

const deleteProduct = async (req, res) =>{
    const { id } = req.params

    await Product.findByIdAndUpdate(id, {
        deleted: true,
    })
    res.status(200).json({ok:true, message: 'Producto eliminado con exito!'})
    console.log({ id })
}

     module.exports = {
        getProducts,
        createProduct,
        deleteProduct
     }