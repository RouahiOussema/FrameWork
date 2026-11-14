import styles from "./Destination.module.css";
import { useState } from "react";

function Destination(props) {
     
    const [afficher, setAfficher] = useState(false);
    
    function generDetail(){
        setAfficher(!afficher);
    }



    return (
        <div className={styles.destination}>
            <img
            className={styles.image}
            src={props.image}
            alt={props.nom}
            />
            <h2 className={styles.titre}>
                {props.nom}
            </h2>
            <h3 className={styles.pays}>{props.pays}</h3>
            <p className={styles.description}>
            {props.description}
            </p>
            <h3 className={styles.prix}>{props.prix} DT
            </h3>
            <button className={styles.button} onClick={generDetail}>
                {afficher?"cacher Details":"Afficher Details"}
            </button>
            {afficher && (
                <p className={styles.details}>
                    Destination idéale pour votre prochain voyage.
                </p>
            )}
        </div>
    );
}

export default Destination;