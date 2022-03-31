const express = require("express");
const router = express.Router();
const MessageModel = require("../models/messageModel")

router.post("/sendMessage", async (req, res) => {
    const msg = new MessageModel(req.body);
    try {
        await msg.save();
        return (
            res.send({ message: "Menssagem enviada com sucesso.", a: msg.message})
            )
    } catch (err) {
        return res.send({message: err})
    }
})

router.get("/getMessages", async (req, res) => {
    try {
        const result = await MessageModel.find();
        
        return (
            res.send({message: result})
        )
    } catch (err) {
        console.log(err)
        return res.send({ message: err})
    }
})

router.delete("/deleteMessage", async (req, res) => {
    const id = req.body.id
    await MessageModel.findByIdAndDelete(id)
    .then(() => { return res.send({ message: "O_O" }) })
    .catch((err) => {
        console.log(err);
        return res.send({ message: "T-T" })
    })
})

module.exports = router;