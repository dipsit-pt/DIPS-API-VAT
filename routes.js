import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'SERVER-API-VAT' });
});

export default router;