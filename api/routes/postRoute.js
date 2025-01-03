import express from "express"

const router = express.Router()


router.get("/" , (req,res) => {
   res.send("post router works")
})

export default router