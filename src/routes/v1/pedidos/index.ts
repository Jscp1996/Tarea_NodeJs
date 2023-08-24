import express from 'express';
//importamos los controladores
import {
getPedidos,
getPedido,
postPedido,
putPedido,
deletePedido
} from  '../../../controllers/v1/pedidos';
import { updateDateMiddleware } from '../../../middleware/updateDate';

const router = express.Router();

router.get("/", [updateDateMiddleware,getPedidos]);
router.get("/:id", [updateDateMiddleware,getPedido]);
router.post("/", [updateDateMiddleware,postPedido]);
router.put("/:id", [updateDateMiddleware,putPedido]);
router.delete("/:id", [updateDateMiddleware,deletePedido]);

export default router;