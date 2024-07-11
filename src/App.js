var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './redux/userSlice';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Button, Dialog, ThemeProvider, Typography } from '@mui/material';
import Header from './components/layouts/Header';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#141417',
        },
        secondary: {
            main: '#e9d7ff',
        },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
    },
});
const App = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [isFormOpen, setFormOpen] = useState(false);
    // const theme = useTheme();
    useEffect(() => {
        const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch('https://jsonplaceholder.typicode.com/users');
                const data = yield response.json();
                dispatch(setUsers(data));
            }
            catch (error) {
                console.error('Failed to fetch users:', error);
            }
        });
        fetchUsers();
    }, [dispatch]);
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs("div", { children: [_jsx(Header, {}), _jsxs(Container, { maxWidth: "xl", children: [_jsxs("div", { className: "title-page", children: [_jsx(Typography, { mb: 3, mt: 3, sx: { typography: { sm: 'h3', xs: 'h5' } }, children: "User Management" }), _jsx(Button, { onClick: () => setFormOpen(true), variant: "contained", color: "secondary", children: "Add User" })] }), _jsx(UserList, { users: users }), _jsx(Dialog, { open: isFormOpen, onClose: () => setFormOpen(false), children: _jsx(UserForm, { onClose: () => setFormOpen(false) }) })] })] }) }));
};
export default App;
