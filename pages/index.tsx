import { NextPage } from 'next'
import UnitCircle from '../components/unit_circle'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <title>Q.E.D</title>
            <meta name="description" content="trolled" />
            <link rel="icon" href="/favicon.ico" />

            <h1 className={styles.main_text}>
                demonstrandum
            </h1>
            <UnitCircle/> 
        </div>
    )
}

export default Home
