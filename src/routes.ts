import express from 'express';
import CodeController from './controller/codeController';
import LetterController from './controller/letterController';

const router = express.Router();

const codeController = new CodeController();
const letterController = new LetterController();

router.post('/send-code', (req, res) => codeController.sendCode(req, res));
router.post('/create-code', (req, res) => codeController.createCode(req, res));

router.post('/create-letter', (req, res) => letterController.createLetter(req, res));
router.get('/find-letter/:id', (req, res) => letterController.getLetter(req, res));

export default router;