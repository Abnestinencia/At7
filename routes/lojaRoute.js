const express = require ('express')
const multer = require ('multer')
const LojaController = reqiure ('../controllers/lojaController');

const lojaRouter = express.Router();


let ctrl = new LojaController()

let upload = multer({storage});

lojaRouter.get("/", ctrl.listarView)

module.exports = lojaRouter