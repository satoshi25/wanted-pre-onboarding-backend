import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import postsRouter from './router/posts.js';
import { config } from './config.js';
import { db } from './db/database.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/posts', postsRouter);

app.use((req, res, next) => {
	res.sendStatus(404);
});

app.use((error, req, res, next) => {
	console.error(error);
	res.sendStatus(500);
})

db.getConnection().then(connection => console.log(connection))
app.listen(config.host.port);