import cors from 'cors';
import express from 'express';
import { routes } from './routes/routes.js';

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is listening on port ${port}...`))
