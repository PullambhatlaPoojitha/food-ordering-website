import React from 'react';
import styles from "../styles/Faq.module.css";
const Faq = () => {
    return (
        <div>
            <h1></h1>
            <span className={styles.head}>1.What do you have to sell?</span>
            <h4></h4>
            <span className={styles.body}>We are bringing in our fold traditional, native, healthy and unique tasting pizzas to be delivered at your doorstep</span>
            <h4></h4>
            <span className={styles.head}>2.Do you offer Cash on Delivery?</span>
            <h4></h4>
            <span className={styles.body}>Yes. We offer Cash on Delivery which most of the other websites dont offer.</span>
            <h4></h4>
            <span className={styles.head}>3.How much time it takes to deliver my order?</span>
            <h4></h4>
            <span className={styles.body}>Generally it takes between 45 minutes to 1 hour time to deliver the order. Due to long distance or heavy traffic, delivery might take few extra minutes.</span>
            <h4></h4>
            <span className={styles.head}>4.What about Refunds?</span>
            <h4></h4>
            <span className={styles.body}>Refunds are subjected to conditions and would differ on a case to case basis.</span>
            <h4></h4>
            <span className={styles.head}>5.I want an Invoice for my order?</span>
            <h4></h4>
            <span className={styles.body}>Invoice Copy is sent via email & Text Message.</span>
            <h4></h4>
        </div>
    );
};

export default Faq;