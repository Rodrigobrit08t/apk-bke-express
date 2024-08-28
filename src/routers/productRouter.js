import express from 'express'
import prodList from '../controllers/product/prodList.js'
import prodByID from '../controllers/product/prodByID.js'
import createProd from '../controllers/product/createProd.js'
import editProd from '../controllers/product/editProd.js'
import deleteProd from '../controllers/product/deleteProd.js'

const router = express.Router()

router.get('/', prodList)
router.patch('/', prodByID)
router.post('/', createProd)
router.put('/', editProd)
router.delete('/', deleteProd)

export default router