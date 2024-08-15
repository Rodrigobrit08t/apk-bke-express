import express from 'express'
import prodList from '../controllers/product/prodList.js'
import createProd from '../controllers/product/createProd.js'
import editProd from '../controllers/product/editProd.js'
import editProdName from '../controllers/product/editProdName.js'
import deleteProd from '../controllers/product/deleteProd.js'
import prodByID from '../controllers/product/prodByID.js'

const router = express.Router()

router.get('/', prodByID)

router.get('/List', prodList)

router.post('/', createProd)

router.put('/', editProd)

router.patch('/', editProdName)

router.delete('/', deleteProd)


export default router