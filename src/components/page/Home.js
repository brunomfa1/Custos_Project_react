import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home(params) {
    return(
         <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Custos</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href="/">Criar Projetos</a>
            <img src={savings} alt="Custos"></img>
         </section>
    )
}

export default Home