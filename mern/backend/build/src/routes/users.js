import { Router } from 'express';
const router = Router();
/* GET users listing. */
router.get('/', function (_, res) {
    res.send('respond with a resource');
});
export default router;
