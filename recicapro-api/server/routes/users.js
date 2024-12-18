const router = require("express").Router()
const {User, validate} = require("../models/user")
const bcrypt = require("bcrypt")

router.post("/", async(req, res)=> {
    try{
        const { error } = validate(req.body);
        if(error) return res.status(400).send({message: error.details[0].message})
        
        const user = await User.findOne({email: req.body.email})
        if (user) return res.status(409).send({message: "usuario fornecido já existe"})
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT))

        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({ ...req.body, password: hashPassword }).save()
        res.status(201).send({message: "usuario criado com sucesso"})
    } catch(error){
        res.status(500).send({message: "erro interno no servidor"})
    }
})

router.get("/", async (req, res) => {
    try {
        const users = await User.find(); // Busca todos os usuários
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: "Erro ao buscar usuários" });
    }
});

module.exports = router;
