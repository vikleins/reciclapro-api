import { useState, useEffect } from "react";
import axios from "axios";
import styles from './styles.module.css'

const AppointmentsList = ({ companyId }) => {
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState("");    

    useEffect(() => {
        if (companyId) {
            
            const fetchAppointments = async () => {
                try {
                    const url = `http://localhost:5173/api/appointments/${companyId}`;
                    const { data } = await axios.get(url);
                    const sortedAppointments = data.sort((a, b) => {
                        const dateA = new Date(a.date + ' ' + a.time);
                        const dateB = new Date(b.date + ' ' + b.time);
                        return dateA - dateB;
                    });

                    setAppointments(sortedAppointments);
                } catch (err) {
                    setError("Erro ao buscar agendamentos");
                }
            };

            fetchAppointments();
        }
    }, [companyId]);


    const handleRemoveAppointment = async (id) => {
        try {
            const url = `http://localhost:5173/api/appointments/${id}`;
            await axios.delete(url);
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appointment) => appointment._id !== id)
            );
        } catch (err) {
            setError("Erro ao remover agendamento");
        }
    };

    if (!companyId) {
        return <p>Nenhuma empresa selecionada</p>;
    }

    
    

    return (
        <div>
            <h1>Agendamentos</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className={styles.appointmentDivContent} >
                {appointments.map((appointment) => (
                    <div className={styles.appointmentDiv} key={appointment._id}>
                        <p><span>Nome:</span>{appointment.name}</p>
                        <p><span>Email:</span>{appointment.email}</p>
                        <p><span>Dia:</span>{new Date(appointment.date).toLocaleDateString()}</p>
                        <p><span>Horário:</span>{appointment.time}</p>
                        <div>
                            <button onClick={() => handleRemoveAppointment(appointment._id)}>Remover</button>
                        </div>
                        {/* Renderize mais informações do agendamento aqui */}
                    </div>
                ))}
            </div>
            
           
        </div>
    );
};

export default AppointmentsList;
