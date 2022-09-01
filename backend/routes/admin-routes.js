const express = require("express")
const { getAllUserData, deleteUserData,   } = require("../controller/admin-controller")

const router = express.Router()

router.route("/admin").get(getAllUserData)
router.route("/admin/deleteuser/:id?").delete(deleteUserData)

module.exports = router;