import { useState } from "react";
import styles from "../login/login.module.css"
import TextInput from "../../components/textInput/textInput";
import registerSchema from "../../schemas/registerschema";
import { useFormik } from "formik";
import { register } from "../../api/internal";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const handleregister = async () => {

        const data = {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }
        const response = await register(data)

        if (response.status === 201) {
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
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: registerSchema
    })
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginHeader} >Create account</div>
            <TextInput
                type="text"
                name="name"
                placeholder="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.name && touched.name ? 1 : undefined}
                errormessage={errors.name}
            />
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
                type="email"
                name="email"
                placeholder="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email && touched.email ? 1 : undefined}
                errormessage={errors.email}
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
            <TextInput
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.confirmPassword && touched.confirmPassword ? 1 : undefined}
                errormessage={errors.confirmPassword}
            />
            <button
                className={styles.loginButton}
                onClick={handleregister}
                disabled={
                    !values.username ||
                    !values.name ||
                    !values.password ||
                    !values.confirmPassword ||
                    errors.username ||
                    errors.name ||
                    errors.password ||
                    errors.confirmPassword
                }
            >Register </button>
            <span >Already have an account? <button className={styles.createAccount} onClick={() => navigate('/login')} >LogIn</button> </span>
            {error !== '' ? <p className={styles.errorMessages} >{error}</p> : ""}
        </div>
    );

}

export default Register;