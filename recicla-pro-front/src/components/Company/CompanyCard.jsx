import styles from './CompanyCard.module.css'
import { useEffect, useState } from "react";
import axios from "axios";



export default function CompanyCard(){
    

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const url = "http://localhost:5173/api/users"; // Endpoint do backend
                const { data } = await axios.get(url);
                setUsers(data);
            } catch (err) {
                setError("Erro ao buscar usuários");
            }
        };

        fetchUsers();
    }, []);
    

    return (
        <>
            <h1 >Recicla - PRO</h1>
            <h3>Empresas Parceiras: </h3>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className={styles.cards}>
                <ul className={styles.structCard_ul}>
                    {users.map((user) => (
                        <li className={styles.structCard} key={user._id}>
                                <h2>{user.companyName} </h2>
                            <div className={styles.structCard_infos}>

                                <p className={styles.email}>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341" />
                                    </svg>
                                    {user.email}
                                    </p>
                                <p className={styles.description_company}>
                                    {user.description}
                                </p>


                                <div className={styles.structCard_last_infos}>
                                    <p> 
                                       
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {user.timeFunction}
                                    </p>
                                    <p>
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {user.location}
                                    </p>
                                </div>
                                    <p>Materiais que reciclamos: {user.materials} </p>
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
            
        </>
    )
}