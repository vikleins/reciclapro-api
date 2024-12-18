// import styles from "./styles.module.css";
import Header from '../Header/Header'
import CompanyCard from '../Company/CompanyCard'



const Main = ({user}) => {
    
    return (
       
        <>
        <Header user={user}/>
        <CompanyCard />
        
        </>
    );
};

export default Main;