import { Router } from 'express';
import multer from 'multer';
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);
router.get('/category/products', isAuthenticated, new ListByCategoryController().handle);

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

export { router };