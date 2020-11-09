import express from 'express';
import router from './router';
import cors from 'cors';

const app: express.Application = express();
const port: number = parseInt(process.env.PORT || '5000');
const apiPrefix: string = '/api';

app.use(cors());
app.use(express.json());
app.use(apiPrefix, router);
app.listen(port, () => console.log(`App is listening on port ${port}`));

export default app;