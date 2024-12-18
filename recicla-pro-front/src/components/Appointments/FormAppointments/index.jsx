
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css"

export default function FormAppointments(){


    const [companies, setCompanies] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        companyId: "",
    });

    const [message, setMessage] = useState("");

    useEffect(() => {
        // Buscar as empresas cadastradas
        const fetchCompanies = async () => {
            try {
                const url = "http://localhost:5173/api/users";
                const { data } = await axios.get(url);
                setCompanies(data);
            } catch (error) {
                console.error("Erro ao buscar empresas", error);
            }
        };

        fetchCompanies();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5173/api/appointments";
            const { data } = await axios.post(url, formData);
            setMessage(data.message);
        } catch (error) {
            console.error("Erro ao criar agendamento", error);
        }
    };


    return (<div className={styles.formAppointmentsContent}>
        <h1>Agendar Visita</h1>
        {message && <p style={{ color: "green" }}>{message}</p>}
        <form className={styles.formAppointments} onSubmit={handleSubmit}>
            <span>
                Digite seu nome
            </span>
            <input
                type="text"
                name="name"
                placeholder="Seu nome"
                onChange={handleChange}
                value={formData.name}
                required
            />
            <span>
                Digite seu Email
            </span>
            <input
                type="seu email"
                name="email"
                placeholder="Seu email"
                onChange={handleChange}
                value={formData.email}
                required
            />
            <span>
                Data do Agendamento
            </span>
            <input
                type="date"
                name="date"
                placeholder="Data do agendamento"
                onChange={handleChange}
                value={formData.date}
                required
            />
            <span>
                Digite a hora do agendamento
            </span>
            <input
                type="time"
                name="time"
                placeholder="Hora do agendamento"
                onChange={handleChange}
                value={formData.time}
                required
            />
            <span>
                Selecione a empresa que quer agendar
            </span>
            <select name="companyId" onChange={handleChange} value={formData.companyId} required>
                <option value="">Selecione uma empresa</option>
                {companies.map((company) => (
                    <option key={company._id} value={company._id}>
                        {company.companyName}
                    </option>
                ))}
            </select>
            <button type="submit">Agendar</button>
        </form>
    </div>)
}