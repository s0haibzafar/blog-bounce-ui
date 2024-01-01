import { useState } from "react";
import styles from "./login.module.css"
import TextInput from "../../components/textInput/textInput";
import loginSchema from "../../schemas/loginschema";
import { useFormik } from "formik";
import { login } from "../../api/internal";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const handlelogin = async () => {

        const data = {
            username: values.username,
            password: values.password,
        }
        const response = await login(data)

        if (response.status === 200) {
            // 1. setUser of  state
            const user = {
                _id: response.data.user._id,
                email: response.data.user.email,
                username: response.data.user.username,
                auth: response.data.auth,
            };

            dispatch(setUser(user));
            // 2. redirect on home page
            navigate('/');
        }
        else if (response.code === 'ERR_BAD_REQUEST') {
            //display error message
            setError(response.response.data.message)
        }
        else if (response.code === 'ERR_BAD_RESPONSE') {
            //display error message
            setError(response.response.data.message)
        }


    }

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
            <button
                className={styles.loginButton}
                onClick={handlelogin}
                disabled={!values.username || !values.password || error.username || error.password}
            >Login </button>
            <span >Don't have an account? <button className={styles.createAccount} onClick={() => navigate('/register')} >Register</button> </span>
            {error !== '' ? <p className={styles.errorMessages} >{error}</p> : ""}
        </div>
    );

}

export default Login;