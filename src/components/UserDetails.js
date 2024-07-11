import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/userSlice';
import { DialogTitle, DialogContent, TextField, DialogActions, Button, CardMedia, } from '@mui/material';
const UserDetails = ({ user, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const handleSave = () => {
        dispatch(editUser(Object.assign(Object.assign({}, user), { name, email })));
        onClose();
    };
    return (_jsxs(_Fragment, { children: [_jsx(DialogTitle, { children: "User Details" }), _jsxs(DialogContent, { children: [_jsx(CardMedia, { component: "img", height: "80px", image: "https://picsum.photos/200", alt: "profile", sx: {
                            margin: '15px auto 15px auto ',
                            width: '80px',
                            borderRadius: '15px',
                        } }), _jsx(TextField, { autoFocus: true, margin: "dense", label: "Name", type: "text", fullWidth: true, value: name, onChange: (e) => setName(e.target.value) }), _jsx(TextField, { margin: "dense", label: "Email", type: "email", fullWidth: true, value: email, onChange: (e) => setEmail(e.target.value) })] }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onClose, children: "Cancel" }), _jsx(Button, { onClick: handleSave, children: "Save" })] })] }));
};
export default UserDetails;
