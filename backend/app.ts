import express from 'express';
import path from 'path';

import indexRouter from './src/routes/index';
import usersRouter from './src/routes/users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
