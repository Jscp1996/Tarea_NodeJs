import express from 'express';
//importamos los controladores
import {
getProductos,
getProducto,
postProducto,
putProducto,
deleteProducto
} from  '../../../controllers/v1/productos';
import { updateDateMiddleware } from '../../../middleware/updateDate';

const router = express.Router();

router.get("/", [updateDateMiddleware,getProductos]);
router.get("/:id", [updateDateMiddleware,getProducto]);
router.post("/", [updateDateMiddleware,postProducto]);
router.put("/:id", [updateDateMiddleware,putProducto]);
router.delete("/:id", [updateDateMiddleware,deleteProducto]);

export default router;