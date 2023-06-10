import express from "express"

const router = express.Router()

router.get("/login/:email", login)
router.get("/login/:email/code", login)

export default router