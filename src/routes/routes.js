import { Router } from 'express';
import { rotaRaiz, todosLivros, selectID, updateLivros, insertLivros, deleteLivros } from '../controllers/controllers.js'

const router = Router();

router.get('/', rotaRaiz);
router.post('/livros', insertLivros);
router.get('/livros', todosLivros);
router.get('/livro', selectID);
router.put('/livros', updateLivros);
router.delete('/livros', deleteLivros);

export default router;