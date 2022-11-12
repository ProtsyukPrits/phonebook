import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
  handlePending,
  handleRejected,
  handleFetchContactsFulfilled,
  handleAddContactFulfilled,
  handleDeleteContactFulfilled,
} from './constants';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFetchContactsFulfilled,
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: handleAddContactFulfilled,
    prepare({ name, number }) {
      return {
        payload: {
          name,
          number,
          id: nanoid(),
        },
      };
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: handleDeleteContactFulfilled,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
