import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { validateEmail, validatePassword } from './validation';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: false, password: false });
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            setSuccess(true);
            setError({ email: false, password: false });
        } else {
            setError({ email: !isEmailValid, password: !isPasswordValid });
            setSuccess(false);
        }
    };

    return (
        <div>
            <TextField
                error={error.email}
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={error.email ? "Invalid email format" : ""}
            />
            <TextField
                error={error.password}
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={error.password ? "Invalid password format" : ""}
            />
            <button onClick={handleSubmit}>Submit</button>
            <Snackbar
                open={success}
                message="Validation Passed"
                autoHideDuration={4000}
                onClose={() => setSuccess(false)}
            />
        </div>
    );
};

export default LoginForm;
