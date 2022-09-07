import { NextPage } from 'next'
import UnitCircle from '../components/unit_circle'
import styles from '../styles/Home.module.css'
import Head from "next/head";

const Home: NextPage = () => {
    return <>
        <Head>
            <title>Q.E.D</title>
            <meta name="theme-color" content="#326ba8" />
            <meta name="description" content="Quod Erat Demonstrandum" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className={styles.container}>
                <h1 className={styles.main_text}>
                    demonstrandum
                </h1>
                <UnitCircle/>
            </div>
        </main>
    </>
}

export default Home
