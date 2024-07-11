var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserList from '../components/UserList';
const mockStore = configureStore([]);
describe('UserList', () => {
    let store;
    const mockUsers = [
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
        render(_jsx(Provider, { store: store, children: _jsx(UserList, { users: mockUsers }) }));
        // Simulate clicking the 'View' button for the first user
        fireEvent.click(screen.getAllByText('View')[0]);
        // Verify that the dialog with user details is opened
        expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
        expect(screen.getByText(mockUsers[0].email)).toBeInTheDocument();
    });
    test('clicking delete button removes user from the list', () => __awaiter(void 0, void 0, void 0, function* () {
        render(_jsx(Provider, { store: store, children: _jsx(UserList, { users: mockUsers }) }));
        screen.debug();
        // Simulate clicking the 'Delete' button for the first user
        fireEvent.click(screen.getAllByText('Delete')[0]);
        // Wait for the delete action to be dispatched (assuming deleteUser action is async)
        expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
        expect(screen.getByText(mockUsers[0].email)).toBeInTheDocument();
    }));
});
