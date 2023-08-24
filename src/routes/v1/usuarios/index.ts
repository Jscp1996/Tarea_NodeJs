import express from 'express';
//importamos los controladores
import {
getUsuarios,
getUsuario,
postUsuario,
putUsuario,
deleteUsuario
} from  '../../../controllers/v1/usuarios';
import { updateDateMiddleware } from '../../../middleware/updateDate';

const router = express.Router();

router.get("/", [updateDateMiddleware,getUsuarios]);
router.get("/:id", [updateDateMiddleware,getUsuario]);
router.post("/", [updateDateMiddleware,postUsuario]);
router.put("/:id", [updateDateMiddleware,putUsuario]);
router.delete("/:id", [updateDateMiddleware,deleteUsuario]);

export default router;