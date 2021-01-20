const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './uploads/');
//     },
//     filename: function(req, file, cb){
//         cb(null, new Date().toISOString+file.originalname);
//     }
// })

// const fileFilter = (req, file,cb)=>{
//     if(file.mimetype === 'image/jpeg' || file.mimetype==='image/png'){
//         cb(null, true);
//     }else{
//         cb(null, false);
//     }
//     // cb(null, false);
//     // cb(null, true);
// };

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024*1024*5 //upto 5 mb
//     },
//     fileFilter: fileFilter
// });

const Product = require('../BackEndHandling(Models)/Product');

router.get('/', (req, res, next)=>{
    Product.find()
    .select('name price _id ownerName descriptionRegardingAvailability mobileNumber')
    .exec()
    .then(docs=>{
        console.log(docs);
        const response = {
            count: docs.length,
            products: docs.map(doc=>{
                return { 
                    name: doc.name,
                    price: doc.price,
                    _id: doc._id,
                    ownerName: doc.ownerName,
                    descriptionRegardingAvailability: doc.descriptionRegardingAvailability,
                    mobileNumber: doc.mobileNumber,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/products/'+doc.id
                    }
                }
            })
        }
        if(docs.length>0){
            res.status(200).json(response);
        }else{
            res.status(404).json({
                message: 'No enteries found'
            })
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
})

router.post('/', (req, res, next)=>{
   
    // console.log(req.file);
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        ownerName: req.body.ownerName,
        descriptionRegardingAvailability: req.body.descriptionRegardingAvailability,
        mobileNumber: req.body.mobileNumber
    });
    product
    .save()
    .then((result)=>{
        console.log(result);
        res.status(201).json({
            message: 'Created Product successfully',
            createdProduct: {
                name: result.name,
                price: result.price,
                _id: result.id,
                ownerName: result.ownerName,
                descriptionRegardingAvailability: result.descriptionRegardingAvailability,
                mobileNumber: result.mobileNumber,
                request:{
                    type: 'GET',
                    url: 'http://localhost:5000/products/'+result.id
                }
            }
        })
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({
            error: err
        })
    });
})

 router.delete('/:productId',(req,res,next)=>{
   
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: 'Product deleted',
            request: {
                type: 'POST',
                url : 'http://localhost:5000/products',
                body : {name: 'String', price: 'Number'}
            }
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

 });

module.exports = router;