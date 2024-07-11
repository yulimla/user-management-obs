import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserForm from '../components/UserForm';
const mockStore = configureStore([]);
describe('UserForm', () => {
    let store;
    let onClose;
    beforeEach(() => {
        store = mockStore({
            users: { users: [] },
        });
        onClose = jest.fn();
    });
    test('renders UserForm with initial values', () => {
        render(_jsx(Provider, { store: store, children: _jsx(UserForm, { onClose: onClose }) }));
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });
    test('submits form with new user data', () => {
        render(_jsx(Provider, { store: store, children: _jsx(UserForm, { onClose: onClose }) }));
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'john.doe@example.com' },
        });
        const addButton = screen.getByText('Add'); // Exact text match
        fireEvent.click(addButton);
        expect(onClose).toHaveBeenCalled();
    });
    test('submits form with edited user data', () => {
        const user = {
            id: 1,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            username: 'janedoe',
        };
        render(_jsx(Provider, { store: store, children: _jsx(UserForm, { user: user, onClose: onClose }) }));
        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'Jane Smith' },
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'jane.smith@example.com' },
        });
        const saveButton = screen.getByText('Save'); // Exact text match
        fireEvent.click(saveButton);
        expect(onClose).toHaveBeenCalled();
    });
});
