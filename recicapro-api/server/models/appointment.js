const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;