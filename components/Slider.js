import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/oc1.jpg",
    "/images/oc2.jpg",
    "/images/oc3.jpg",
    
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <center>
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <center>
            <Image src={img} alt="" objectFit="fill" width="900px" height="500px"/>
            </center>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/images/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
    </center>
  );
};

export default Slider;