import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from 'redux/auth/operations';

const actions = [fetchContacts, addContact, deleteContact, logOut];

const getActions = type => actions.map(action => action[type]);

const initialContactsState = {
  items: [],
  isLoading: false,
  isDeleting: false,
  error: null,
};

const fetchContactsPendingReducer = state => {
  state.isLoading = true;
};

const deletePendingReducer = state => {
  state.isDeleting = true;
};

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const addContactsSuccessReducer = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
};

const deleteContactsSuccessReducer = (state, action) => {
  state.isDeleting = false;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const logOutSuccessReducer = state => {
  state.items = [];
  state.isLoading = false;
};

const anySuccessReducer = state => {
  state.error = null;
};

const anyRejectReducer = (state, action) => {
  state.error = action.payload;
  state.isDeleting = false;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactsSuccessReducer)
      .addCase(deleteContact.pending, deletePendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
      .addCase(logOut.fulfilled, logOutSuccessReducer)
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, logOut.pending),
        fetchContactsPendingReducer
      )
      .addMatcher(isAnyOf(...getActions('fulfilled')), anySuccessReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer),
});

export const contactsReducer = contactsSlice.reducer;
