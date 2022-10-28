import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/tele.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/offers" passHref>
          <li className={styles.listItem}>Offers & coupons</li>
          </Link>
          
          <Image src="/images/logo.png" alt="" width="160px" height="69px" />
          <Link href="/Contact" passHref>
          <li className={styles.listItem}>Contact</li>
          </Link>
          <Link href="/Faq" passHref>
          <li className={styles.listItem}>FAQ</li>
          </Link>
        </ul>
      </div>
      <Link href="/Cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/images/cart.jpg" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;