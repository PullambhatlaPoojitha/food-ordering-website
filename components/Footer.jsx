import Image from "next/image";
import styles from "../styles/Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/bg.jpg" layout="fill" alt="" objectFit="cover" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}></div>
                <h1 className={styles.motto}>
                    OH YAY ,ITS DELICIOUS DELIGHTS
                    <Image src="/images/logo.png" width="500" height="500" alt=""/>
                    
                </h1>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        FIND OUR RESTAURENTS
                    </h1>
                    <div className={styles.text}>
                    Shri Vishnu Engineering College for Women,
                        <br />Bhimavaram
                        <br/>533404
                    </div>
                    <h1></h1>
                    <div className={styles.text}>
                    Kakinada,
                        <br />Near Sri Kiran Hospital
                        <br/>544321
                    </div>
                    <h1></h1>
                    <div className={styles.text}>
                    Amalapuram,
                        <br />Red bridge
                        <br/>544321
                    </div>
                    <h1></h1>
                    <div className={styles.text}>
                    I.polavaram,
                        <br />Peddha veedhi
                        <br/>Near Bank Of Baroda
                        <br/>533220
                    </div>
                        
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        WORKING HOURS
                    </h1>
                    <div className={styles.text}>
                        MONDAY-FRIDAY
                        <br/>9AM - 6PM
                    </div >
                    <h1></h1>
                    <div className={styles.caution}>
                        No orders are taken on FRIDAY and SATURDAY
                    </div>
                        
                </div>
            </div>
        </div>

    );
};

export default Footer;