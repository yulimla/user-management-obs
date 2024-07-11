import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/userSlice';
import UserDetails from './UserDetails';
import { User } from '../types';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  CardMedia,
} from '@mui/material';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleClose = () => {
    setSelectedUser(null);
  };

  return (
    <Grid container spacing={3}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <Card variant="outlined" className="card">
            <CardContent>
              <div className="card-header">
                <CardMedia
                  component="img"
                  height="140"
                  image="https://picsum.photos/200"
                  alt="profile"
                />
              </div>
              <div className="card-body">
                <Typography variant="h5" sx={{ mb: '7.5px' }}>
                  {user.name}
                </Typography>
                <Typography sx={{ mb: '7.5px' }}>{user.email}</Typography>
                <Button
                  onClick={() => setSelectedUser(user)}
                  variant="contained"
                  color="secondary"
                  sx={{ mr: '7.5px', mb: '7.5px' }}
                >
                  View
                </Button>
                <Button
                  onClick={() => handleDelete(user.id)}
                  variant="outlined"
                  sx={{ mb: '7.5px' }}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Dialog open={Boolean(selectedUser)} onClose={handleClose}>
        {selectedUser && (
          <UserDetails user={selectedUser} onClose={handleClose} />
        )}
      </Dialog>
    </Grid>
  );
};

export default UserList;
