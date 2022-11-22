import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from 'redux/auth/operations';

const actions = [fetchContacts, addContact, deleteContact, logOut];

const getActions = type => actions.map(action => action[type]);

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
  isDeleting: false,
};

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactsSuccessReducer = (state, action) => {
  state.items.push(action.payload);
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
};

const anySuccessReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const deletePendingReducer = state => {
  state.isDeleting = true;
};

const anyRejectReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const deleteRejectReducer = state => {
  state.isDeleting = false;
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
      .addCase(deleteContact.rejected, deleteRejectReducer)
      .addCase(logOut.fulfilled, logOutSuccessReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anySuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer),
});

export const contactsReducer = contactsSlice.reducer;
