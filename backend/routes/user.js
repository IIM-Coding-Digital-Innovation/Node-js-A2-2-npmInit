import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        firstName : "Alexis",
        lastName: "Zerah",
        email: "alex.zerah@gmail.com"
    });
});

export default router