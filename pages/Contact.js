import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Contact.module.css";
const Contact = () => {
    return (
        <div>

         
            <h1></h1>
            <center>
            <h1>Follow us</h1>
            <table className={styles.table}>
             
            <tbody>
            <tr className={styles.tr}>
              <td>
              <span className={styles.id}><Image src="/images/fb1.jpg" width="100px" height="80px" alt=""></Image></span>
              </td>
              <td>
              <span className={styles.name}><Link href=''>www.facebook.com/DeliciousDelights</Link></span>
              </td>
              
            </tr>
            <h1></h1>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}><Image src="/images/insta.webp" width="70px" height="70px" alt=""></Image></span>
              </td>
              <td>
                <span className={styles.name}><Link href=''>www.instagram.com/DeliciousDelights</Link></span>
              </td>
              
            </tr>
            <h1></h1>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}><Image src="/images/youtube.png" width="70px" height="70px" alt=""></Image></span>
              </td>
              <td>
                <span className={styles.name}><Link href=''>www.youtube.com/DeliciousDelights</Link></span>
              </td>
              
            </tr>
            <h1></h1>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}><Image src="/images/twittwer.png" width="70px" height="70px" alt=""></Image></span>
              </td>
              <td>
                <span className={styles.name}><Link href=''>www.twitter.com/DeliciousDelights</Link></span>
              </td>
              
            </tr>
            <h1></h1>
            </tbody>
          </table>
          </center>
        </div>
            // <Image src="/images/fb.png" width="120px" height="80px"></Image><Link href='' style={{padding:40}}>www.facebook.com/DeliciousDelights</Link>

        
    );
};

export default Contact;