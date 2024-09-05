import { Router } from "express";

const router = Router();

router.get('/list', async(req, res) => {
    try{
        res.render('clients/list');
    }
    catch(err){
        res.status(500).json({  message:err.message });
    }
});

router.get('/add', (req, res) => {
    res.render('clients/add');
});

router.post('/add', async(req, res) => {
    try{
        res.redirect('/list');
        res.render('main', {
            alerta: 'Los datos se han guardado correctamente.'
        });
    }
    catch(err){
        res.status(500).json({ message:err.message });
    }
});

router.get('/edit', (req, res) => {
    res.render('clients/edit');
});

router.post('/edit', async(req, res) => {
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({ message:err.message });
    }
});

router.get('/categories', async(req, res) => {
    try{
        res.render('clients/categories');
    }
    catch(err){
        res.status(500).json({  message:err.message });
    }
});

router.get('/products', async(req, res) => {
    try{
        res.render('clients/products');
    }
    catch(err){
        res.status(500).json({  message:err.message });
    }
});

export default router;