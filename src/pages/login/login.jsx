import styles from "./login.module.css"
import TextInput from "../../components/textInput/textInput";

function Login(){
    return(
        <div className={styles.loginWrapper}>
            <div className={styles.loginHeader} >Log in to your account</div>
            <TextInput />
            <TextInput />
            <button></button>
            <span>Don't have an account? <button>Register</button> </span>

        </div>
    );

}

export default Login;