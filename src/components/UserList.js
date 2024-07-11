import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice';
import UserDetails from './UserDetails';
import { Grid, Card, CardContent, Typography, Button, Dialog, CardMedia, } from '@mui/material';
const UserList = ({ users }) => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };
    const handleClose = () => {
        setSelectedUser(null);
    };
    return (_jsxs(Grid, { container: true, spacing: 3, children: [users.map((user) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: _jsx(Card, { variant: "outlined", className: "card", children: _jsxs(CardContent, { children: [_jsx("div", { className: "card-header", children: _jsx(CardMedia, { component: "img", height: "140", image: "https://picsum.photos/200", alt: "profile" }) }), _jsxs("div", { className: "card-body", children: [_jsx(Typography, { variant: "h5", sx: { mb: '7.5px' }, children: user.name }), _jsx(Typography, { sx: { mb: '7.5px' }, children: user.email }), _jsx(Button, { onClick: () => setSelectedUser(user), variant: "contained", color: "secondary", sx: { mr: '7.5px', mb: '7.5px' }, children: "View" }), _jsx(Button, { onClick: () => handleDelete(user.id), variant: "outlined", sx: { mb: '7.5px' }, children: "Delete" })] })] }) }) }, user.id))), _jsx(Dialog, { open: Boolean(selectedUser), onClose: handleClose, children: selectedUser && (_jsx(UserDetails, { user: selectedUser, onClose: handleClose })) })] }));
};
export default UserList;
