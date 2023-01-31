import * as yup from 'yup';

export const login = yup.object ({
    email: yup.string().email().required(), 
    password: yup.string().min(6).max(25).required(),
})