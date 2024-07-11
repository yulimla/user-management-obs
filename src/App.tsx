import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
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
  const users = useSelector((state: RootState) => state.users.users);
  const [isFormOpen, setFormOpen] = useState(false);
  // const theme = useTheme();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        const data = await response.json();
        dispatch(setUsers(data));
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Container maxWidth="xl">
          <div className="title-page">
            <Typography
              mb={3}
              mt={3}
              sx={{ typography: { sm: 'h3', xs: 'h5' } }}
            >
              User Management
            </Typography>
            <Button
              onClick={() => setFormOpen(true)}
              variant="contained"
              color="secondary"
            >
              Add User
            </Button>
          </div>

          <UserList users={users} />
          <Dialog open={isFormOpen} onClose={() => setFormOpen(false)}>
            <UserForm onClose={() => setFormOpen(false)} />
          </Dialog>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
