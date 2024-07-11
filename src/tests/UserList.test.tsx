import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserList from '../components/UserList';
import { User } from '../types';

const mockStore = configureStore([]);

describe('UserList', () => {
  let store: any;
  const mockUsers: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      username: 'johndoe',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      username: 'janesmith',
    },
  ];

  beforeEach(() => {
    store = mockStore({
      users: { users: mockUsers },
    });
  });

  test('clicking view button opens user details', () => {
    render(
      <Provider store={store}>
        <UserList users={mockUsers} />
      </Provider>,
    );

    // Simulate clicking the 'View' button for the first user
    fireEvent.click(screen.getAllByText('View')[0]);

    // Verify that the dialog with user details is opened
    expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[0].email)).toBeInTheDocument();
  });

  test('clicking delete button removes user from the list', async () => {
    render(
      <Provider store={store}>
        <UserList users={mockUsers} />
      </Provider>,
    );
    screen.debug();
    // Simulate clicking the 'Delete' button for the first user
    fireEvent.click(screen.getAllByText('Delete')[0]);

    // Wait for the delete action to be dispatched (assuming deleteUser action is async)
    expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[0].email)).toBeInTheDocument();
  });
});
