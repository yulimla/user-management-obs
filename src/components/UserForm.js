import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../redux/userSlice';
import { TextField, Button, DialogActions, DialogContent, DialogTitle, } from '@mui/material';
const UserForm = ({ user, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState((user === null || user === void 0 ? void 0 : user.name) || '');
    const [email, setEmail] = useState((user === null || user === void 0 ? void 0 : user.email) || '');
    const handleSubmit = () => {
        if (user) {
            dispatch(editUser(Object.assign(Object.assign({}, user), { name, email })));
        }
        else {
            const newUser = {
                id: Date.now(), // Using timestamp as a unique ID
                name,
                username: name.split(' ').join('').toLowerCase(),
                email,
            };
            dispatch(addUser(newUser));
        }
        onClose();
    };
    return (_jsxs(_Fragment, { children: [_jsx(DialogTitle, { children: user ? 'Edit User' : 'Add User' }), _jsxs(DialogContent, { children: [_jsx(TextField, { autoFocus: true, margin: "dense", label: "Name", type: "text", fullWidth: true, value: name, onChange: (e) => setName(e.target.value) }), _jsx(TextField, { margin: "dense", label: "Email", type: "email", fullWidth: true, value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onClose, children: "Cancel" }), _jsx(Button, { onClick: handleSubmit, children: user ? 'Save' : 'Add' })] })] }));
};
export default UserForm;
