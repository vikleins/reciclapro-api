import Header from '../Header/Header'
import styles from './styles.module.css'
export default function AboutUs({user}){
    return(
    <div>
            <Header user={user} />
            <div className={styles.aboutUs}>
                <h1>Recicla Pro</h1>
                <div className={styles.containerAboutUs}>
                        <h2>Quem Somos?</h2>
                        <div>
                        Na Recicla PRO, acreditamos que a reciclagem é o ponto de partida para um futuro mais sustentável e responsável. Somos uma empresa comprometida em transformar a maneira como lidamos com resíduos, conectando pessoas e empresas a soluções práticas, inovadoras e ambientalmente corretas.

                        Nosso propósito é simples, mas poderoso: facilitar o acesso a serviços de reciclagem e descarte sustentável. Por meio de nossa plataforma, ajudamos você a encontrar empresas especializadas em reciclagem de diferentes tipos de materiais, como papel, plástico, vidro, metais, eletrônicos, resíduos orgânicos e até materiais perigosos.

                        Sabemos que, muitas vezes, encontrar o destino certo para o lixo reciclável pode ser um desafio. Por isso, criamos um espaço onde tudo fica mais fácil. Nossa plataforma foi desenvolvida para ser intuitiva e eficiente, permitindo que qualquer pessoa ou empresa encontre parceiros confiáveis para realizar o descarte correto dos seus resíduos.

                        A Recicla PRO não é apenas uma ponte entre você e empresas de reciclagem: somos agentes de mudança. Queremos impactar positivamente o planeta, incentivando práticas que reduzem o desperdício, promovem a reutilização e valorizam os recursos naturais. Cada material reciclado é um passo a mais rumo à preservação ambiental e à construção de um mundo melhor para as próximas gerações.

                        Mais do que um serviço, somos um movimento. Acreditamos no poder da conscientização coletiva e na força das pequenas atitudes do dia a dia. Por isso, convidamos você a fazer parte dessa jornada conosco, adotando soluções mais conscientes e sustentáveis para o descarte de resíduos.

                        <p>Recicla PRO – Conectando você à sustentabilidade e ao futuro que queremos construir juntos.</p> 
                        </div>
                </div>
            </div>
    </div>)
}