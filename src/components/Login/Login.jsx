import styles from "./Login.module.css";
import {useState} from "react";

function Login(){
    const[email,setEmail] =useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState({});
     function handleSubmit(e){
        e.preventDefault();
        let newError = {};
        if(!email.trim()){
            newError.email = "Veuillez saisir votre email";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            newError.email = "adresse email invalide";
        }
        if(!password.trim()){
            newError.password = "Veuillez saisir votre mot de passe";
        }
        else if(password.length < 8){
            newError.password = "Le mot de passe doit contenir au moins 8 caractères";
        }
        else if(!/[A-Z]/.test(password)){
            newError.password = "Le mot de passe doit contenir au moins une lettre majuscule";
     }
     else if(!/[0-9]/.test(password)){
        newError.password = "Le mot de passe doit contenir au moins un chiffre";
     }
     else if(!/[^A-Za-z0-9]/.test(password)){
        newError.password = "Le mot de passe doit contenir au moins un caractère spécial";
     }
     setError(newError);
     console.log(newError);

    if(Object.keys(newError).length==0){
       alert("connexion valide");
       console.log(email+""+password);
    }

    }
     return(
 <div className={styles.loginContainer}> 
 <form onSubmit={handleSubmit} className={styles.loginCard}>
 <h2 className={styles.title}>Connexion</h2>
 <label htmlFor="email" className={styles.label}> Email </label>
<input type="email" 
id="email" 
placeholder="choisir votre email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className={styles.input}
 />
 {error.email && <span className={styles.errorMessage}>{error.email}</span>}
 <label htmlFor="password" className={styles.label}> Mot de passe </label>
 <input type="password" 
id="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className={styles.input}
 />
 {error.password && <span className={styles.errorMessage}>{error.password}</span>}
 <button type="submit" className={styles.submitBtn}> Se connecter </button>
 
 </form>
 </div>
   ) ;
}
export default Login;