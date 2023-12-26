import styles from "./login.module.css"
import TextInput from "../../components/textInput/textInput";
import loginSchema from "../../schemas/loginschema";
import { useFormik } from "formik";

function Login() {

    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema
    })
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginHeader} >Log in to your account</div>
            <TextInput
                type="text"
                name="username"
                placeholder="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.username && touched.username ? 1 : undefined}
                errormessage={errors.username}
            />
            <TextInput
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password && touched.password ? 1 : undefined}
                errormessage={errors.password}
            />
            <button className={styles.loginButton} >Login </button>
            <span >Don't have an account? <button className={styles.createAccount} >Register</button> </span>

        </div>
    );

}

export default Login;