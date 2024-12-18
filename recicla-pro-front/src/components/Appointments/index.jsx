import Header from '../Header/Header'
import FormAppointments from './FormAppointments/index'
import AppointmentsList from './AppontmentsList'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Appointments({user}){

    const [usersNew, setUsers] = useState([]);
    const [selectedCompanyId, setSelectedCompanyId] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const url = "http://localhost:5173/api/users"; // Endpoint do backend
                const { data } = await axios.get(url);
                setUsers(data);
                if (data.length > 0) setSelectedCompanyId(data[0]._id);
            } catch (err) {
                setError("Erro ao buscar usuários");
            }
        };

        fetchUsers();
    }, []);

    console.log('usersNew', usersNew)

    return(
        <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Header user={user} />
            {user ? (
                <AppointmentsList companyId={selectedCompanyId} />   
            ): (
                <div>
                        <FormAppointments />
                </div>
            )}
        </>
    )

}