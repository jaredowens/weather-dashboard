import * as path from 'path';
import { Router, type Request, type Response } from 'express';

// Use CommonJS __dirname directly
const router = Router();

// TODO: Define route to serve index.html

router.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
  });

export default router;