import  express  from 'express'
import {confirmProduct , rejectProduct , getPendingProducts , getReviews,getUser} from '../../operations/adminOperations/index.mjs'

const router = express.Router()

router.get('/' ,(req,res,next)=>{
    res.send('admin home')
})

router.get('/get_user' ,(req,res,next)=>{
    getUser(req,res)
})

router.put('/confirm_product/:product_id' ,(req,res,next)=>{
    confirmProduct(req,res)
})

router.put('/reject_product/:product_id' ,(req,res,next)=>{
    rejectProduct(req,res)
})

router.get('/get_products/pending' ,(req,res,next)=>{
    getPendingProducts(req,res)
})

router.get('/get_reviews' ,(req,res,next)=>{
    getReviews(req,res)
})

export default router