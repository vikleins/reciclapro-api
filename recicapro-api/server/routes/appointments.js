const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");
const { User } = require("../models/user");

// Endpoint para criar um novo agendamento
router.post("/", async (req, res) => {
    try {
        const { name, email, date, time, companyId } = req.body;

        // Verifique se a empresa existe
        const company = await User.findById(companyId);
        if (!company) return res.status(404).send({ message: "Empresa não encontrada" });

        // Crie o agendamento
        const appointment = new Appointment({ name, email, date, time, companyId });
        await appointment.save();

        res.status(201).send({ message: "Agendamento criado com sucesso" });
    } catch (error) {
        res.status(500).send({ message: "Erro ao criar agendamento" });
    }
});

// Endpoint para listar agendamentos de uma empresa
router.get("/:companyId", async (req, res) => {
    try {
        const { companyId } = req.params;
        const appointments = await Appointment.find({ companyId }).populate("companyId", "companyName");

        res.status(200).send(appointments);
    } catch (error) {
        res.status(500).send({ message: "Erro ao buscar agendamentos" });
    }
});

// Endpoint para deletar um agendamento pelo ID
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findByIdAndDelete(id);

        if (!appointment) {
            return res.status(404).send({ message: "Agendamento não encontrado" });
        }

        res.status(200).send({ message: "Agendamento removido com sucesso" });
    } catch (error) {
        res.status(500).send({ message: "Erro ao remover agendamento" });
    }
});

module.exports = router;