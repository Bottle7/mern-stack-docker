import { Router } from 'express';
const indexRouter = Router();
/* GET home page. */
indexRouter.get('/', function (_, res) {
    // Send a 200 respose with a Hello World message
    res.status(200).send('Hello World!');
});
export default indexRouter;
