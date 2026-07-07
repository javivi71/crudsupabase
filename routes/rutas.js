import { Router } from "express"
import { getProducts,addProduct,nuevoFormulario ,actualizarFormulario,eliminarFormulario,
         updateProduct,deleteProduct} from "../controllers/product-controller.js";

const router = Router();

router.get("/",getProducts);
// router.get("/add",addProduct);

// Rutas para añadir nuevos productos
router.get("/nuevo",nuevoFormulario);
router.post("/addProduct",addProduct); 

// Rutas para actualizar productos
router.get("/actualizar",actualizarFormulario);
router.post("/updateProduct",updateProduct); 


// Rutas para eliminar productos 
router.get("/eliminar",eliminarFormulario);
router.delete("/deleteProduct",deleteProduct); 


export default router;