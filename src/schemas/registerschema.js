import * as yup from "yup";


const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const errorMessage = 'use lowercase, uppercase and digits';
const errorMessageConfirm = 'passwords must match';

const registerSchema = yup.object().shape({
    name: yup.string().max(30).required('name is required'),
    username: yup.string().min(5).max(30).required('username is required'),
    email: yup.string().email().required('email us required'),
    password: yup
        .string()
        .min(8)
        .max(25)
        .matches(passwordExp, { message: errorMessage })
        .required('password us required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], errorMessageConfirm)
        .required(),
});

export default registerSchema;