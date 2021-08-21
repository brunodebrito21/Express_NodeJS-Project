const express = require("express")
const router = express.Router()
const controllerPessoas = require("../controller/pessoas")

router.get('/all',controllerPessoas.listAll)
router.get('/pessoa',controllerPessoas.listOne)
router.post("/new",controllerPessoas.addOne)
router.put("/update",controllerPessoas.updatePerson)
router.delete("/delete",controllerPessoas.removeSomeone)


module.exports = router