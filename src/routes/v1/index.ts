import express from 'express';
//importamos todas las rutas de cada controlador
import categoriasRoutes from './categorias';
import clientesRoutes from './clientes';
import pedidosRoutes from './pedidos';
import productosRoutes from './productos';
import usuariosRoutes from './usuarios';

const router = express.Router();

//endpoints
 
router.use("/categorias", categoriasRoutes); // /api/v1/categorias
router.use("/clientes", clientesRoutes); // /api/v1/clientes
router.use("/pedidos", pedidosRoutes); // /api/v1/pedidos
router.use("/productos", productosRoutes); // /api/v1/productos
router.use("/usuarios", usuariosRoutes); // /api/v1/usuarios

export default router;